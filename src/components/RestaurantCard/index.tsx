import { Link } from 'react-router-dom';

import star from '../../assets/images/star.png';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Card, Container, Description, Infos, Title } from './styles';

type Props = {
  image: string;
  restaurantName: string;
  starsNum: number;
  description: string;
  infos: string[];
  id: number;
};

export function RestaurantCard({
  image,
  restaurantName,
  starsNum,
  description,
  infos,
  id,
}: Props) {
  function capitalize(tag: string) {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  return (
    <Card>
      <img src={image} alt={restaurantName} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{capitalize(info)}</Tag>
        ))}
      </Infos>
      <Container>
        <Title>
          <h2>{restaurantName}</h2>
          <span>
            {starsNum}
            <img src={star} alt="Estrela"></img>
          </span>
        </Title>
        <Description>{description}</Description>
        <Link to={`/restaurantes/${id}`}>
          <Button type="button" bgcolor="red">
            Saiba mais
          </Button>
        </Link>
      </Container>
    </Card>
  );
}
