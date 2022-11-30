import { Circle, Trash, CheckCircle } from 'phosphor-react';
import { CheckButton, Container, DeleteButton, Item, Title } from './styles';

export interface ToDo {
  isCheck: boolean;
  content: string;
}

interface ListInformationProps {
  list: ToDo[];
}

function ListItem({ list }: ListInformationProps) {
  return (
    <Container>
      {list.map(({ isCheck, content }) => (
        <Item key={content}>
          <CheckButton isCheck={isCheck}>
            {isCheck ? (
              <CheckCircle size={24} weight="fill" />
            ) : (
              <Circle size={24} />
            )}
          </CheckButton>

          <Title>{content}</Title>

          <DeleteButton>
            <Trash size={24} />
          </DeleteButton>
        </Item>
      ))}
    </Container>
  );
}

export default ListItem;
