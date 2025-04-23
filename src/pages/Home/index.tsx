import { useGetRestaurantsQuery } from '../../services/api';
import { Banner } from '../../components/Banner';
import { RestaurantsList } from '../../components/RestaurantsList';
import { Food } from '../../components/MenuList';

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Food[];
};

export function Home() {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Banner />
        <RestaurantsList restaurants={restaurants} />
      </>
    );
  }
  return <h3>Carregando...</h3>;
}
