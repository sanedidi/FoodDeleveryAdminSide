import { useForm } from 'react-hook-form';
import { authStore } from '../../../store/auth.store';
import { useLogin } from '../../../services/auth.service';
import { useToast } from '@chakra-ui/react';

export const useLoginProps = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors, // Добавляем clearErrors для сброса ошибок
  } = useForm();

  const { mutate, isLoading: isPending } = useLogin(); // Переименуем isLoading в isPending для консистентности

  const onSubmit = (data) => {
    clearErrors(); // Сбрасываем предыдущие ошибки перед новой попыткой
    mutate(data, {
      onSuccess: (res) => {
        authStore.userData = res?.data;
        authStore.login();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: 'Вы успешно вошли в аккаунт',
          status: 'success',
        });
      },
      onError: (error) => {
        const errorMessage = error?.response?.data?.detail || 'Ошибка входа';
        setError('login', { message: errorMessage });
        setError('password', { message: errorMessage });
      },
    });
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isPending,
  };
};
