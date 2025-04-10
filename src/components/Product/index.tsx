import star from '../../assets/images/star.png';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Card, Container, Description, Infos, Title } from './styles';

type Props = {
  image: string;
  restaurantName: string;
  starsNum: string;
  description: string;
  infos: string[];
};

export function Product({
  image,
  restaurantName,
  starsNum,
  description,
  infos,
}: Props) {
  return (
    <Card>
      <img src={image} alt={restaurantName} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Container>
        <Title>
          <h2>{restaurantName}</h2>
          <span>
            {starsNum}
            <img src={star}></img>
          </span>
        </Title>
        <Description>{description}</Description>
        <Button bgcolor="red">Saiba mais</Button>
      </Container>
    </Card>
  );
}
