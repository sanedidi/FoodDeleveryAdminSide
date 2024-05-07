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
  } = useForm();

  const { mutate, isPending } = useLogin();

  const onSubmit = (data) => {
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
        console.log(error);
        setError('email', { message: error?.response?.data?.detail });
        setError('password', { message: error?.response?.data?.detail });
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
