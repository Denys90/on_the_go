// import { FooterComponent } from 'components/Footer/Footer';

import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <FooterComponent /> */}
    </>
  );
};

export default SharedLayout;
