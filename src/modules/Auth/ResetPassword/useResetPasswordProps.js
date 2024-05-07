import { useForm } from "react-hook-form";
import { authStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../../services/auth.service";

export const useResetPasswordProps = () => {
  const navigate = useNavigate()

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const  { mutate, isPending } = useResetPassword()

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.data = res?.data
        navigate("Step2")
      },
      onError: (error) => {
        setError("email", { message: error?.response?.data })
      }
    })
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isPending
  };
};