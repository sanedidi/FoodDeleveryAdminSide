import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest/index";

const fn = (accessToken) => {
  // Разделите токен
  const tokenParts = accessToken.split(".");
  const payload = tokenParts[1];

  // Декодируйте полезную нагрузку
  const decodedPayload = JSON.parse(atob(payload));

  // Извлеките restaurant_id
  const restaurantId = decodedPayload.restaurant_id;

  return restaurantId
};

const authServices = {
  login: (data) => request.post("auth/admin/login ", data),
  register: (data) => request.post("auth/register", data),
  checkEmail: (data) => request.post("auth/checkEmail", data),
  checkCode: (data) => request.post("auth/checkCode", data),
  restorePassword: (data) => request.post("auth/restorePassword", data),
  updatePassword: (data) => request.post("auth/updatePassword", data),
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => authServices.login(data),
    onSuccess: ({
      data: {
        Data: { refresh_token, acces_token },
      },
    }) => {
      localStorage.setItem("acces_token", acces_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("restaurant_id", fn(acces_token));
    },
  });
};

export const useRegister = () => {
  return useMutation({ mutationFn: (data) => authServices.register(data) });
};

export const useCheckEmail = () => {
  return useMutation({ mutationFn: (data) => authServices.checkEmail(data) });
};

export const useCheckCode = () => {
  return useMutation({ mutationFn: (data) => authServices.checkCode(data) });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data) => authServices.restorePassword(data),
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: (data) => authServices.updatePassword(data),
  });
};
