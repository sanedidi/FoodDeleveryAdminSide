// Router.js
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import React, { lazy } from "react";
import { authStore } from "../store/auth.store";
import { observer } from "mobx-react-lite";
// import ButcherDelete from "components/Butcher/ButcherDelete/ButcherDelete";

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
const ButcherReminded = lazy(() =>
  import("components/Butcher/ButcherReminded/ButcherReminded")
);
const ResetPasswordStep3 = lazy(() =>
  import(
    "../modules/Auth/ResetPassword/Components/ResetPasswordStep3/ResetPasswordStep3"
  )
);
const AuthLayout = lazy(() => import("../Layouts/AuthLayout/AuthLayout"));
const Orders = lazy(() => import("../components/Orders/Orders"));
const ButcherDelete = lazy(() =>
  import("../components/Butcher/ButcherDelete/ButcherDelete")
);

const Butcher = lazy(() => import("../components/Butcher/Butcher"));
const Locations = lazy(() => import("components/Locations/Locations"));
const Calendar = lazy(() => import("components/Calendar/Calendar"));
const CategoriesAdd = lazy(() =>
  import("components/Categories/CategoriesAdd/CategoriesAdd")
);
const Products = lazy(() => import("components/Products/Products"));
const ProductsAdd = lazy(() =>
  import("components/Products/ProductsAdd/ProductsAdd")
);
const WorkersAdd = lazy(() =>
  import("components/Workers/WorkersAdd/WorkersAdd")
);
const ProductsEdit = lazy(() =>
  import("components/Products/ProductsEdit/ProductsEdit")
);
const WorkersEdit = lazy(() =>
  import("components/Workers/WokersEdit/WorkersEdit")
);
const ButcherInfo = lazy(() =>
  import("components/Butcher/ButcherInfo/ButcherInfo")
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
const Workers = lazy(() => import("components/Workers/Workers"));
const ButcherAdd = lazy(() =>
  import("components/Butcher/ButcherAdd/ButcherAdd")
);
const Dashboard = lazy(() => import("components/Dashboard/Dashboard"));

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
        <Route path="/admin/workers/add/" element={<WorkersAdd />} />
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
        <Route
          path="/admin/ButcherInfo/edit/:categoryId"
          element={<ButcherInfo />}
        />
        <Route path="/admin/orders/info/:id/" element={<OrdersInfo />} />
        <Route
          path="/admin/butcher/reminded/:categoryId/"
          element={<ButcherReminded />}
        />
        <Route
          path="/admin/butcher/delete/:categoryId/"
          element={<ButcherDelete />}
        />
        <Route path="/admin/orders/add" element={<OrdersAdd />} />
        <Route path="/admin/orders/AddHall" element={<OrdersHall />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/workers" element={<Workers />} />
        <Route path="/admin/workers/butcher" element={<Butcher />} />
        <Route
          path="/admin/workers/butcher/butcherAdd"
          element={<ButcherAdd />}
        />
        <Route
          path="/admin/workers/workersEdit/:workersId/"
          element={<WorkersEdit />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/admin/orders/" />} />
      <Route path="/admin/orders" element={<Navigate to="/admin/orders/" />} />
    </Routes>
  );
});

export default Router;
