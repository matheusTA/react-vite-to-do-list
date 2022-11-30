import Header from '../../components/Header';
import Input from '../../components/Input';
import EmptyList from './components/EmptyList';
import ListInformation from './components/ListInformation';
import ListItem, { ToDo } from './components/ListItem';
import { Container, Content } from './styles';

const toDoList: ToDo[] = [
  {
    isCheck: true,
    content: 'Coffe',
  },
  {
    isCheck: false,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel .',
  },
  {
    isCheck: false,
    content: 'CS',
  },
  {
    isCheck: true,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
];

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Input />
        <ListInformation />
        {/* <EmptyList /> */}
        <ListItem list={toDoList} />
      </Content>
    </Container>
  );
}

export default Home;
