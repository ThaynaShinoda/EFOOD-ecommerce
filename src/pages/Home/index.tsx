import { Banner } from '../../components/Banner';
import { RestaurantsList } from '../../components/RestaurantsList';
import { restaurants } from '../../data/RestaurantData';

export function Home() {
  return (
    <>
      <Banner />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
}
