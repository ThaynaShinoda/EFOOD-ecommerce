import { Restaurant } from '../../models/Restaurant';
import { MenuCard } from '../MenuCard';
import { BannerRestaurant, Infos, List } from './styles';

export type Props = {
  restaurants: Restaurant[];
  idSelected: number;
};

export function MenuList({ restaurants, idSelected }: Props) {
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === idSelected
  );

  if (!selectedRestaurant) return null;

  return (
    <div>
      <BannerRestaurant>
        <img
          src={selectedRestaurant.image}
          alt={selectedRestaurant.restaurantName}
        />
        <div className="wrapper">
          <h2>{selectedRestaurant.restaurantName}</h2>
          <Infos>
            {selectedRestaurant.infos.map((info) => (
              <span key={info}>{info}</span>
            ))}
          </Infos>
        </div>
      </BannerRestaurant>
      <div className="wrapper">
        <List>
          {selectedRestaurant.menu.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </List>
      </div>
    </div>
  );
}
