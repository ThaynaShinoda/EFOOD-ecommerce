import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/styles';
import { Footer } from './components/Footer';
import { Router } from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
