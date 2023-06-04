import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Goods from "./modules/Goods/Goods";

const ShopsPage = lazy(() => import("./pages/ShopsPage/ShopsPage"));
const ShoppingCartPage = lazy(() =>
  import("./pages/ShoppingCartPage/ShopingCartePage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shops" element={<ShopsPage />}>
          <Route path=":id" element={<Goods />} />
        </Route>
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
