import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/styles';
import { Footer } from './components/Footer';
import { Router } from './routes';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
