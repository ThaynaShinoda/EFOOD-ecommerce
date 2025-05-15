import { Button } from '../Button';
import { Card, Description, InfosContainer, ItemName } from './styles';

type Props = {
  name: string;
  description: string;
  image: string;
  onClick: () => void
};

export function MenuCard({ name, description, image ,onClick}: Props) {
  return (
    <Card onClick={onClick}>
      <InfosContainer>
        <img src={image} alt={name} />
        <ItemName>{name}</ItemName>
        <Description>{description}</Description>
      </InfosContainer>
      <Button type="button"> Adicionar ao carrinho</Button>
    </Card>
  );
}
