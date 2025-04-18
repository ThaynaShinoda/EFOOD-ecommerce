import { useEffect, useState } from 'react';
import { Restaurant } from '../../pages/Home';
import { MenuCard } from '../MenuCard';
import { BannerRestaurant, Infos, List } from './styles';
import { useParams } from 'react-router-dom';
import { getRestaurantTags } from '../RestaurantsList';

export function MenuList() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  function capitalize(tag: string) {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  return (
    <div>
      <BannerRestaurant>
        <img src={restaurant?.capa} alt={restaurant?.titulo} />
        <div className="wrapper">
          <h2>{restaurant?.titulo}</h2>
          <Infos>
            {restaurant &&
              getRestaurantTags(restaurant).map((tag) => (
                <span key={tag}>{capitalize(tag)}</span>
              ))}
          </Infos>
        </div>
      </BannerRestaurant>
      <div className="wrapper">
        <List>
          {restaurant?.cardapio.map((item) => (
            <MenuCard
              key={item.id}
              image={item.foto}
              name={item.nome}
              description={item.descricao}
            />
          ))}
        </List>
      </div>
    </div>
  );
}
