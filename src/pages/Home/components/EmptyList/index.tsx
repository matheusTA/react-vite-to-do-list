import Clipboard from '../../../../assets/clipboard.svg';
import { Container, Title } from './styles';

function EmptyList() {
  return (
    <Container>
      <img alt="Clipboard" src={Clipboard} />
      <Title>
        <strong>Você ainda não tem tarefas cadastradas </strong>
        Crie tarefas e organize seus itens a fazer
      </Title>
    </Container>
  );
}

export default EmptyList;
