import banner from '../../assets/images/bgImage.png';
import logo from '../../assets/images/efood_logo.svg';
import { DescriptionBanner, Image } from './styles';

export function Banner() {
  return (
    <Image style={{ backgroundImage: `url(${banner})` }}>
      <div className="wrapper">
        <img src={logo} alt="Efood" />
        <DescriptionBanner>
          Viva experiências gastronômicas no conforto da sua casa
        </DescriptionBanner>
      </div>
    </Image>
  );
}
