import logo from '../../assets/images/efood_logo.svg';
import banner from '../../assets/images/bgImage.png';
import { Headercontainer, Image } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Image style={{ backgroundImage: `url(${banner})` }}>
      <div className="wrapper">
        <Headercontainer>
          <Link to="/">
            <h2>Restaurantes</h2>
          </Link>
          <img src={logo} alt="EFOOD" />
          <span>0 produto(s) no carrinho</span>
        </Headercontainer>
      </div>
    </Image>
  );
}
