import star from '../../assets/images/star.png';
import sushi from '../../assets/images/sushi.png';
import { Card, Container, Description, Title } from './styles';

export function Product() {
  return (
    <Card>
      <img src={sushi} alt="Sushi" />
      <Container>
        <Title>
          <h2>Nome do restaurante</h2>
          <span>
            4.5<img src={star}></img>
          </span>
        </Title>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <button>Saiba mais</button>
      </Container>
    </Card>
  );
}
