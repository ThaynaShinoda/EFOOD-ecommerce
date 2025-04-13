// RestaurantPage.tsx
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MenuList } from '../../components/MenuList';
import { restaurants } from '../../data/RestaurantData';
import { slugify } from '../../utils/slugify';

export function RestaurantPage() {
  const { slug } = useParams();

  const selectedRestaurant = restaurants.find(
    (restaurant) => slugify(restaurant.restaurantName) === slug
  );

  if (!selectedRestaurant) {
    return <p>Restaurante não encontrado.</p>;
  }

  return (
    <div>
      <Header />
      <MenuList restaurants={restaurants} idSelected={selectedRestaurant.id} />
    </div>
  );
}
