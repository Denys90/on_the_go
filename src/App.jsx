import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Wrapper } from 'styles/Wrapper.styled';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <>
      <Wrapper>
        {' '}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Wrapper>
    </>
  );
}
export default App;
