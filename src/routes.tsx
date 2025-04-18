import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RestaurantPage } from './pages/RestaurantPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes/:id" element={<RestaurantPage />} />
    </Routes>
  );
}
