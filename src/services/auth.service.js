import { useMutation } from '@tanstack/react-query';
import request from './httpRequest/index';

const authServices = {
  login: (data) => request.post('https://food-delivery-api-n6as.onrender.com/v1/auth/super_admin/login', data),
  register: (data) => request.post('auth/register', data),
  checkEmail: (data) => request.post('auth/checkEmail', data),
  checkCode: (data) => request.post('auth/checkCode', data),
  restorePassword: (data) => request.post('auth/restorePassword', data),
  updatePassword: (data) => request.post('auth/updatePassword', data),
};

export const useLogin = () => {
  return useMutation({ mutationFn: (data) => authServices.login(data) });
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
  return useMutation({ mutationFn: (data) => authServices.restorePassword(data) });
};

export const useUpdatePassword = () => {
  return useMutation({ mutationFn: (data) => authServices.updatePassword(data) });
};
