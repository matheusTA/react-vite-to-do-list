import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { ToDo } from '../../../../common/types/ToDo';
import { useToDo } from '../../../../contexts/toDo';
import { Container, InputText, Button } from './styles';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const { addToDo } = useToDo();

  function handleAddToDo() {
    const toDo: ToDo = {
      content: inputValue,
      isCheck: false,
    };

    addToDo(toDo);
    setInputValue('');
  }

  return (
    <Container>
      <InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <Button type="button" onClick={() => handleAddToDo()}>
        Criar <PlusCircle size={24} />
      </Button>
    </Container>
  );
}

export default Input;
