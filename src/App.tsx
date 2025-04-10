import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { ProductsList } from './components/ProductsList';
import { GlobalStyle } from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <ProductsList />
      <Footer />
    </>
  );
}

export default App;
