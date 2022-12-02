import { ToDoProvider } from './contexts/toDo';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ToDoProvider>
      <Routes />
      <GlobalStyle />
    </ToDoProvider>
  );
}

export default App;
