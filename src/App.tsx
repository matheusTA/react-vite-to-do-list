import { Toaster } from 'react-hot-toast';
import { ToDoProvider } from './contexts/toDo';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ToDoProvider>
      <Routes />
      <GlobalStyle />
      <Toaster position="top-right" />
    </ToDoProvider>
  );
}

export default App;
