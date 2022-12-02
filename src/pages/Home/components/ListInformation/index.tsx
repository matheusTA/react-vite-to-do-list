import { useToDo } from '../../../../contexts/toDo';
import { Container, Text, Badge } from './styles';

function ListInformation() {
  const { data } = useToDo();
  const totalToDo = data.length;
  const totalToDoFinished = data.filter((d) => d.isCheck).length;

  return (
    <Container>
      <Text type="TotalTasks">
        Tarefas criadas <Badge>{totalToDo}</Badge>
      </Text>

      <Text type="FinishedTasks">
        Concluídas
        <Badge>
          {totalToDoFinished} de {totalToDo}
        </Badge>
      </Text>
    </Container>
  );
}

export default ListInformation;
