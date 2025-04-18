import { Restaurant } from '../../pages/Home';
import { RestaurantCard } from '../RestaurantCard';
import { List } from './styles';

export type Props = {
  restaurants: Restaurant[];
};

export function getRestaurantTags(restaurant: Restaurant) {
  const tags = [];
  if (restaurant.destacado === true) {
    tags.push('Destaque da semana');
  }
  if (restaurant.tipo) {
    tags.push(restaurant.tipo);
  }

  return tags;
}

export function RestaurantsList({ restaurants }: Props) {
  return (
    <div>
      <div className="wrapper">
        <List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard
                id={restaurant.id}
                image={restaurant.capa}
                restaurantName={restaurant.titulo}
                starsNum={restaurant.avaliacao}
                description={restaurant.descricao}
                infos={getRestaurantTags(restaurant)}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}
