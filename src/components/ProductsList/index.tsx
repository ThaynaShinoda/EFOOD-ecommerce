import { Product } from '../Product';
import { List } from './styles';

export function ProductsList() {
  return (
    <div>
      <div className="wrapper">
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </div>
  );
}
