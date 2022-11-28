import { PlusCircle } from 'phosphor-react';
import { Container, InputText, Button } from './styles';

function Input() {
  return (
    <Container>
      <InputText placeholder="Adicione uma nova tarefa" />
      <Button>
        Criar <PlusCircle size={24} />
      </Button>
    </Container>
  );
}

export default Input;
