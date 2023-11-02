import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/HomePage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
