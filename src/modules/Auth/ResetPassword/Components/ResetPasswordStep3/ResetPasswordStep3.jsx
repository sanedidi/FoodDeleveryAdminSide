import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import LockOpen from "../../../../../assets/img/icon/lock_open.svg";
import { CopyRight } from "../../../components/CopyRight/CopyRight";
import { BtnSubmit } from "../../../../../components/BtnSubmit/BtnSubmit";
import { CheckInput } from "../../../components/CheckInput/CheckInput";
import { LinkPage } from "../../../../../modules/Auth/components/LinkPage/LinkPage";
import { AuthInputPassword } from "../../../../../modules/Auth/components/AuthInputPassword/AuthInputPassword";
import { useResetPasswordStep3Props } from "./useResetPasswordStep3Props";

export const ResetPasswordStep3 = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    isPending,
    formState: { errors },
  } = useResetPasswordStep3Props();

  return (
    <Box>
      <h1 className={cls.title}>Восстановление пароля</h1>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <AuthInputPassword
          label="Новый пароль"
          id="password"
          src={LockOpen}
          alt="lockOpen"
          placeholder="Введите новый пароль"
          register={register}
          name="password"
          error={errors.password}
          required
        />
        <AuthInputPassword
          label="Повторите пароль"
          id="confirmPassword"
          src={LockOpen}
          alt="lockOpen"
          placeholder="Повторите пароль"
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword}
          required
        />
        <CheckInput text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных" />
        <Box className={cls.btnWrapper}>
          <BtnSubmit
            height="60px"
            text="Восстановить пароль"
            isPending={isPending}
          />
          <LinkPage
            text="Вернуться назад"
            to="/auth/forgotPassword/forgotPasswordStepTwo"
          />
        </Box>
        <CopyRight />
      </FormControl>
    </Box>
  );
};
