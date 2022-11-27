import { Container } from './styles';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo-tipo da aplicação" />
    </Container>
  );
}

export default Header;
