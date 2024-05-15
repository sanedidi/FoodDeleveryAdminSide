import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import React from "react";
import { authStore } from "../store/auth.store";
import { observer } from "mobx-react-lite";
import { Login } from "../modules//Auth/Login/Login";
import { ResetPassword } from "../modules/Auth/ResetPassword/ResetPassword";
import { ResetPasswordStep2 } from "../modules/Auth/ResetPassword/Components/ResetPasswordStep2/ResetPasswordStep2";
import { ResetPasswordStep3 } from "../modules/Auth/ResetPassword/Components/ResetPasswordStep3/ResetPasswordStep3";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import Clients from "../components/Clients/Clients";
import Orders from "../components/Orders/Orders";
import Categories from "components/Categories/Categories";
import Dashboard from "components/Dashboard/Dashboard";
import Locations from "components/Locations/Locations";
import Calendar from "components/Calendar/Calendar";
import { CategoriesAdd } from "components/Categories/CategoriesAdd";
import { Products } from "components/Products";
export const Router = observer(() => {
  const isAuth = authStore.isAuth;

  const role = JSON.parse(localStorage.getItem("auth"));
  const type = role?.userData?.data?.user_type;

  if (!isAuth) {
    return (
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route path="/auth" element={<Login />} />
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
      <Route path="" element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/fillials" element={<Locations />} />
        <Route path="/admin/calendar" element={<Calendar />} />
        <Route path="/admin/categories/add" element={<CategoriesAdd />} />
        <Route path="/admin/categories/products" element={<Products />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      <Route path="" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  );
});
export default Router;
