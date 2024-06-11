import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import React, { lazy } from "react";
import { authStore } from "../store/auth.store";
import { observer } from "mobx-react-lite";
// import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
// import ResetPassword from "modules/Auth/ResetPassword/ResetPassword";
// import { ResetPasswordStep2 } from "modules/Auth/ResetPassword/Components/ResetPasswordStep2/ResetPasswordStep2";
// import { ResetPasswordStep3 } from "modules/Auth/ResetPassword/Components/ResetPasswordStep3/ResetPasswordStep3";
// import { Orders } from "components/Orders";
// import { Categories } from "components/Categories";
// // import Locations from "components/Locations/Locations";
// import Calendar from "components/Calendar/Calendar";
// import { CategoriesAdd } from "components/Categories/CategoriesAdd";
// import { Products } from "components/Products";
// import ProductsAdd from "components/Products/ProductsAdd/ProductsAdd";
// import { ProductsEdit } from "components/Products/ProductsEdit";
// import OrdersInfo from "components/Orders/OrdersINfo/OrdersInfo";
// import { OrdersAdd } from "components/Orders/OrdersAdd";
// import { OrdersHall } from "components/Orders/OrdersHall";
// // import Login from "modules/Auth/Login/Login";
// import Edit from "components/Categories/components/Edit";
const Login = lazy(() => import("../modules/Auth/Login/Login"));
const ResetPassword = lazy(() =>
  import(
    "../modules/Auth/ResetPassword/Components/ResetPasswordStep2/ResetPasswordStep2"
  )
);
const ResetPasswordStep2 = lazy(() =>
  import(
    "../modules/Auth/ResetPassword/Components/ResetPasswordStep2/ResetPasswordStep2"
  )
);
const ResetPasswordStep3 = lazy(() =>
  import(
    "../modules/Auth/ResetPassword/Components/ResetPasswordStep3/ResetPasswordStep3"
  )
);
const AuthLayout = lazy(() => import("../Layouts/AuthLayout/AuthLayout"));
const Orders = lazy(() => import("../components/Orders/Orders"));
const Locations = lazy(() => import("components/Locations/Locations"));
const Calendar = lazy(() => import("components/Calendar/Calendar"));
const CategoriesAdd = lazy(() =>
  import("components/Categories/CategoriesAdd/CategoriesAdd")
);
const Products = lazy(() => import("components/Products/Products"));
const ProductsAdd = lazy(() =>
  import("components/Products/ProductsAdd/ProductsAdd")
);
const ProductsEdit = lazy(() =>
  import("components/Products/ProductsEdit/ProductsEdit")
);
const Edit = lazy(() => import("components/Categories/components/Edit"));
const Categories = lazy(() => import("components/Categories/Categories"));
const OrdersInfo = lazy(() =>
  import("components/Orders/OrdersINfo/OrdersInfo")
);
const OrdersAdd = lazy(() => import("components/Orders/OrdersAdd/OrdersAdd"));
const OrdersHall = lazy(() =>
  import("components/Orders/OrdersHall/OrdersHall")
);
const Dashboard = lazy(()=> import ("components/Dashboard/Dashboard"))
export const Router = observer(() => {
  const isAuth = authStore.isAuth;
  const role = JSON.parse(localStorage.getItem("auth"));
  const type = role?.userData?.data?.user_type;

  if (!isAuth) {
    return (
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/resetPassword" element={<ResetPassword />} />
          <Route
            path="/auth/resetPassword/Step2"
            element={<ResetPasswordStep2 />}
          />
          <Route
            path="/auth/resetPassword/Step2/Step3"
            element={<ResetPasswordStep3 />}
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
          <Route path="" element={<Navigate to="/auth/login" />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/admin/" element={<MainLayout />}>
        <Route path="/admin/" element={<Orders />} />
        <Route path="/admin/orders/" element={<Orders />} />
        <Route path="/admin/categories/" element={<Categories />} />
        <Route path="/admin/fillials/" element={<Locations />} />
        <Route path="/admin/calendar/" element={<Calendar />} />
        <Route path="/admin/categories/add/" element={<CategoriesAdd />} />
        <Route path="/admin/categories/products/" element={<Products />} />
        <Route
          path="/admin/categories/products/add/"
          element={<ProductsAdd />}
        />
        <Route
          path="/admin/categories/products/edit/:productId/"
          element={<ProductsEdit />}
        />
        <Route path="/admin/categories/edit/:categoryId/" element={<Edit />} />
        <Route path="/admin/orders/info/:id/" element={<OrdersInfo />} />
        <Route path="/admin/orders/add" element={<OrdersAdd />} />
        <Route path="/admin/orders/AddHall" element={<OrdersHall />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/orders/" />} />
      <Route path="/admin/orders" element={<Navigate to="/admin/orders/" />} />
    </Routes>
  );
});
export default Router;
