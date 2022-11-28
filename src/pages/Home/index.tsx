import Header from '../../components/Header';
import Input from '../../components/Input';
import ListInformation from './components/ListInformation';
import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Input />
        <ListInformation />
      </Content>
    </Container>
  );
}

export default Home;
