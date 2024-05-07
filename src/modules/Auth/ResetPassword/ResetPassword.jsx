import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useResetPasswordProps } from "./useResetPasswordProps";
import EmailOutline from "../../../assets/img/icon/mail_outline.svg";
import { CopyRight } from "../components/CopyRight/CopyRight";
import { BtnSubmit } from "../../../components/BtnSubmit/BtnSubmit";
import { LinkPage } from "../components/LinkPage/LinkPage";
import { AuthInput } from "../components/AuthInput/AuthInput";


export const ResetPassword = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useResetPasswordProps();

  return (
    <Box>
      <h1 className={cls.title}>Восстановление пароля</h1>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <AuthInput
          label="Email или номер телефона"
          id="email"
          type="email"
          placeholder="Введите e-mail"
          src={EmailOutline}
          alt="email"
          register={register}
          name="email"
          error={errors.email}
          required
        />
          
        <p className={cls.text}>Введите номер телефона чтобы получить код активации</p>
        <Box className={cls.btnWrapper}>
          <BtnSubmit
            height="60px"
            text="Получить код активации"
            isPending={isPending} 
          />
          <LinkPage 
            text="Войти в аккаунт" 
            to="/auth/login" 
          />
        </Box>
        <CopyRight />
      </FormControl>
    </Box>
  )
};