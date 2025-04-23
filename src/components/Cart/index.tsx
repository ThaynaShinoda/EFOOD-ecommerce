import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/store';
import { Button } from '../Button';
import {
  CartContainer,
  CartItem,
  FinalPrice,
  Overlay,
  Sidebar,
} from './styles';
import { close, remove } from '../../redux/slices/cart';
import { priceFormat } from '../MenuList';

export function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  function getTotalPrice() {
    return items.reduce((acum, actualValue) => {
      return (acum += actualValue.preco);
    }, 0);
  }

  function removeItem(uniqueId: string) {
    dispatch(remove(uniqueId));
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceFormat(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.uniqueId)} type="button" />
            </CartItem>
          ))}
        </ul>
        <FinalPrice>
          <p>Valor total</p>
          <span>{priceFormat(getTotalPrice())}</span>
        </FinalPrice>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  );
}
