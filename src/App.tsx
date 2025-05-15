import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

import { Router } from './routes';
import { GlobalStyle } from './styles/styles';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Cart } from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
