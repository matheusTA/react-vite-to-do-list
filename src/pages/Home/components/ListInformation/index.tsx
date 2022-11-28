import { Container, Title, Badge } from './styles';

function ListInformation() {
  return (
    <Container>
      <Title type="TotalTasks">
        Tarefas criadas <Badge>0</Badge>
      </Title>

      <Title type="FinishedTasks">
        Concluídas <Badge>2 de 5</Badge>
      </Title>
    </Container>
  );
}

export default ListInformation;
