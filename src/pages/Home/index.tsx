import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Input />
      </Content>
    </Container>
  );
}

export default Home;
