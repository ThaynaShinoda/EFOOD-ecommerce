import { Restaurant } from '../../models/Restaurant';
import { RestaurantCard } from '../RestaurantCard';
import { List } from './styles';

export type Props = {
  restaurants: Restaurant[];
};

export function RestaurantsList({ restaurants }: Props) {
  return (
    <div>
      <div className="wrapper">
        <List>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              restaurantName={restaurant.restaurantName}
              starsNum={restaurant.starsNum}
              description={restaurant.description}
              infos={restaurant.infos}
            />
          ))}
        </List>
      </div>
    </div>
  );
}
