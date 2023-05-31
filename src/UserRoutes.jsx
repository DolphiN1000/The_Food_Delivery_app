import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ShopsPage = lazy(() => import("./pages/ShopsPage/ShopsPage"));
const ShoppingCartPage = lazy(() =>
  import("./pages/ShoppingCartPage/ShopingCartePage")
);
const HomePage = lazy (()=> import('./pages/HomePage/HomePage'))
const UserRoutes = () => {
  return <Suspense fallback={<p>...Loading</p>}>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shops' element={<ShopsPage />} />
        <Route path='/cart' element={<ShoppingCartPage />} />
    </Routes>
  </Suspense>
};

export default UserRoutes;
