import { Button } from '../Button';
import { Card, Description, InfosContainer, ItemName } from './styles';

type Props = {
  name: string;
  description: string;
  image: string;
};

export function MenuCard({ name, description, image }: Props) {
  return (
    <Card>
      <InfosContainer>
        <img src={image} alt={name} />
        <ItemName>{name}</ItemName>
        <Description>{description}</Description>
      </InfosContainer>
      <Button> Adicionar ao carrinho</Button>
    </Card>
  );
}
