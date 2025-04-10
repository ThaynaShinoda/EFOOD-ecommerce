import { Banner } from '../../components/Banner';
import { ProductsList } from '../../components/ProductsList';
import { Restaurant } from '../../models/Restaurant';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    restaurantName: 'Hioki Sushi',
    starsNum: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
  },
  
];

export function Home() {
  return (
    <>
      <Banner />
      <ProductsList restaurants={restaurants} />
    </>
  );
}
