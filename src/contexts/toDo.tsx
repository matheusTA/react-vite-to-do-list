import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ToDo } from '../common/types/ToDo';

interface ToDoContextData {
  data: ToDo[];
  addToDo: (toDo: ToDo) => void;
  removeToDo: (toDo: ToDo) => void;
}

export const ToDoContext = createContext<ToDoContextData>(
  {} as ToDoContextData
);

export function ToDoProvider({ children }: PropsWithChildren<unknown>) {
  const [data, setData] = useState<ToDo[]>([]);

  const addToDo = useCallback((toDo: ToDo) => {
    setData((state) => [...state, toDo]);
  }, []);

  const removeToDo = useCallback(
    (toDo: ToDo) => {
      const listWithoutOneToDo = data.filter((d) => d.content !== toDo.content);

      setData(listWithoutOneToDo);
    },
    [data]
  );

  const toDoProviderValue = useMemo(
    () => ({ data, addToDo, removeToDo }),
    [data, addToDo, removeToDo]
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
