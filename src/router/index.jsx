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
import Test from "../components/test/test";
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
      <Route path="" element={<MainLayout />}></Route>
      <Route path="/admin/test" element={<Test />} />
      <Route path="*" element={<Navigate to="/admin/test" />} />
      <Route path="" element={<Navigate to="/admin/test" />} />
    </Routes>
  );
});
export default Router
