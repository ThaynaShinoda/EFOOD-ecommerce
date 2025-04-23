import logo from '../../assets/images/efood_logo.svg';
import banner from '../../assets/images/bgImage.png';
import { Headercontainer, Image } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/store';
import { open } from '../../redux/slices/cart';

export function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  function openCart() {
    dispatch(open());
  }

  return (
    <Image style={{ backgroundImage: `url(${banner})` }}>
      <div className="wrapper">
        <Headercontainer>
          <Link to="/">
            <h2>Restaurantes</h2>
          </Link>
          <img src={logo} alt="EFOOD" />
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </Headercontainer>
      </div>
    </Image>
  );
}
