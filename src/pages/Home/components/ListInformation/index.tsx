import { Container, Text, Badge } from './styles';

function ListInformation() {
  return (
    <Container>
      <Text type="TotalTasks">
        Tarefas criadas <Badge>0</Badge>
      </Text>

      <Text type="FinishedTasks">
        Concluídas <Badge>2 de 5</Badge>
      </Text>
    </Container>
  );
}

export default ListInformation;
