import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/CatalogCars/CatalogCars'));
const Favorites = lazy(() => import('../../pages/FavoritCar/FavoritCar'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
