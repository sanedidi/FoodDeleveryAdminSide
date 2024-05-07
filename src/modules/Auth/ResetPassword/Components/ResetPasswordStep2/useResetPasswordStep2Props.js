import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCheckCode } from "../../../../../services/auth.service";

export const useResetPasswordStep2Props = () => {

  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useCheckCode()

  const onSubmit = (data) => {
    mutate({
      ...data,
      request_id: auth?.data?.request_id
    }, {
      onSuccess: () => {
        navigate("Step3")
      },
      onError: (error) => {
        setError("verify_code", { message: error?.response?.data })
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