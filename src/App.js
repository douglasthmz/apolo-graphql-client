import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
