import Header from '../../components/Header';
import Input from '../../components/Input';
import EmptyList from './components/EmptyList';
import ListInformation from './components/ListInformation';
import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Input />
        <ListInformation />
        <EmptyList />
      </Content>
    </Container>
  );
}

export default Home;
