import { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { RestaurantsList } from '../../components/RestaurantsList';

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    },
  ];
};

export function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  return (
    <>
      <Banner />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
}
