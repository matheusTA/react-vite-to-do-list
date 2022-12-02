import Header from '../../components/Header';
import Input from './components/Input';
import { useToDo } from '../../contexts/toDo';
import EmptyList from './components/EmptyList';
import ListInformation from './components/ListInformation';
import ListItem from './components/ListItem';
import { Container, Content } from './styles';

function Home() {
  const { data } = useToDo();
  const toDoListIsEmpty = data.length === 0;

  return (
    <Container>
      <Header />
      <Content>
        <Input />
        <ListInformation />

        {toDoListIsEmpty ? <EmptyList /> : <ListItem />}
      </Content>
    </Container>
  );
}

export default Home;
