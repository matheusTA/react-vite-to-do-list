import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { ToDo } from '../common/types/ToDo';
import { SessionStorageKeys } from '../enums';
import LocalStorage from '../services/LocalStorage';

interface ToDoContextData {
  data: ToDo[];
  addToDo: (toDo: ToDo) => void;
  removeToDo: (toDo: ToDo) => void;
  markAsDone: (toDo: ToDo) => void;
}

export const ToDoContext = createContext<ToDoContextData>(
  {} as ToDoContextData
);

export function ToDoProvider({ children }: PropsWithChildren<unknown>) {
  const [data, setData] = useState<ToDo[]>([]);

  useEffect(() => {
    const toDoList = LocalStorage.getItem<ToDo[]>(SessionStorageKeys.TO_DO);

    if (toDoList) {
      setData(toDoList);
    }
  }, []);

  const addToDo = useCallback(
    (toDo: ToDo) => {
      const alreadyExistsToDo = data.some(
        ({ content }) => content === toDo.content
      );

      if (!alreadyExistsToDo) {
        const toDoList = [...data, toDo];

        setData(toDoList);
        LocalStorage.setIntem<ToDo[]>(SessionStorageKeys.TO_DO, toDoList);
      } else {
        toast.error('Esse item já existe na lista.');
      }
    },
    [data]
  );

  const removeToDo = useCallback(
    (toDo: ToDo) => {
      const listWithoutOneToDo = data.filter(
        ({ content }) => content !== toDo.content
      );

      setData(listWithoutOneToDo);
      LocalStorage.setIntem<ToDo[]>(
        SessionStorageKeys.TO_DO,
        listWithoutOneToDo
      );
    },
    [data]
  );

  const markAsDone = useCallback(
    (toDo: ToDo) => {
      const toDoList = data.map(({ content, isCheck }) => {
        if (content === toDo.content) {
          return { content, isCheck: !isCheck };
        }

        return { content, isCheck };
      });

      setData(toDoList);
      LocalStorage.setIntem<ToDo[]>(SessionStorageKeys.TO_DO, toDoList);
    },
    [data]
  );

  const toDoProviderValue = useMemo(
    () => ({ data, addToDo, removeToDo, markAsDone }),
    [data, addToDo, removeToDo, markAsDone]
  );

  return (
    <ToDoContext.Provider value={toDoProviderValue}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDo() {
  const context = useContext(ToDoContext);

  return context;
}
