import { Circle, Trash, CheckCircle } from 'phosphor-react';
import { useToDo } from '../../../../contexts/toDo';
import { CheckButton, Container, DeleteButton, Item, Title } from './styles';

function ListItem() {
  const { data, removeToDo, markAsDone } = useToDo();

  return (
    <Container>
      {data.map(({ isCheck, content }) => (
        <Item key={content}>
          <CheckButton
            isCheck={isCheck}
            type="button"
            onClick={() => markAsDone({ content, isCheck })}
          >
            {isCheck ? (
              <CheckCircle size={24} weight="fill" />
            ) : (
              <Circle size={24} />
            )}
          </CheckButton>

          <Title isCheck={isCheck}>{content}</Title>

          <DeleteButton
            type="button"
            onClick={() => removeToDo({ content, isCheck })}
          >
            <Trash size={24} />
          </DeleteButton>
        </Item>
      ))}
    </Container>
  );
}

export default ListItem;
