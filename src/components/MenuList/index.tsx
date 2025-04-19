import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Restaurant } from '../../pages/Home';
import { MenuCard } from '../MenuCard';
import {
  BannerRestaurant,
  CartButton,
  Infos,
  List,
  Modal,
  ModalContent,
} from './styles';
import { getRestaurantTags } from '../RestaurantsList';
import close from '../../assets/images/close_icon.png';

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export function MenuList() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  interface Food {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    porcao: string;
    preco: number;
  }

  const [selectedFood, setSelectedFood] = useState<Food>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  function capitalize(tag: string) {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  function openModal(food: any) {
    setSelectedFood(food);
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
    setSelectedFood(undefined);
  }

  return (
    <>
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
                onClick={() => openModal(item)}
              />
            ))}
          </List>
        </div>
      </div>
      {modalIsOpen && selectedFood && (
        <Modal className="visible">
          <ModalContent>
            <img src={selectedFood.foto} alt="" />
            <div>
              <img
                className="closeButton"
                onClick={closeModal}
                src={close}
              ></img>

              <h3>{selectedFood.nome}</h3>
              <p>{selectedFood.descricao}</p>
              <p>Serve: {selectedFood.porcao}</p>
              <CartButton>
                Adicionar ao carrinho - {priceFormat(selectedFood.preco)}
              </CartButton>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  );
}
