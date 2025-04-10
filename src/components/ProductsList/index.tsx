import { Restaurant } from '../../models/Restaurant';
import { Product } from '../Product';
import { List } from './styles';

export type Props = {
  restaurants: Restaurant[];
};

export function ProductsList({ restaurants }: Props) {
  return (
    <div>
      <div className="wrapper">
        <List>
          {restaurants.map((restaurant) => (
            <Product
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
