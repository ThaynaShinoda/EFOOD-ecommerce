import { Link } from 'react-router-dom';
import star from '../../assets/images/star.png';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Card, Container, Description, Infos, Title } from './styles';

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

type Props = {
  image: string;
  restaurantName: string;
  starsNum: string;
  description: string;
  infos: string[];
};

export function RestaurantCard({
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
        <Link to={`/restaurant/${slugify(restaurantName)}`}>
          <Button bgcolor="red">Saiba mais</Button>
        </Link>
      </Container>
    </Card>
  );
}
