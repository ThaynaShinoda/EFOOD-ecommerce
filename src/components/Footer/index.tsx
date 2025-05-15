/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/images/efood_logo.svg';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import { Container, SocialMedia } from './styles';

export function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <img src={logo} alt="EFOOD" />
        <SocialMedia>
          <a href="#">
            <img src={instagram} alt="Logo instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Logo facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Logo twitter" />
          </a>
        </SocialMedia>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </Container>
  );
}
