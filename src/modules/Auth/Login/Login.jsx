import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import s from "./styles.module.scss";
import { useLoginProps } from "./useLoginProps";
import LockOpen from "../../../assets/img/icon/lock_open.svg";
import EmailOutline from "../../../assets/img/icon/mail_outline.svg";
import { BtnSubmit } from "../components/BtnSubmit/BtnSubmit";
import { CopyRight } from "../components/CopyRight/CopyRight";
import { AuthInputPassword } from "../components/AuthInputPassword/AuthInputPassword";
import { AuthInput } from "../components/AuthInput/AuthInput";
import { IoCall } from "react-icons/io5";
import React from "react";
export const Login = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    isPending,
    formState: { errors },
  } = useLoginProps();

  return (
    <Box className={s.form}>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <Box className={s.form__wrapper}>
          <Box className={s.form__top}>
            <h1 className={s.form__title}>Войти в систему</h1>
          </Box>
          <Box className={s.form__btm}>
            <AuthInput
              label="Имя пользователя"
              id="login"
              type="access_token"
              placeholder="Введите e-mail"
              src={EmailOutline}
              alt="email"
              register={register}
              name="login"
              user={"s.form__input_title"}
              error={errors.login}
              required
            />
            <AuthInputPassword
              label="Пароль"
              id="password"
              src={LockOpen}
              alt="lockOpen"
              placeholder="Введите пароль"
              register={register}
              name="password"
              error={errors.password}
              required
            />
            <Box className={s.btnWrapper}>
              <BtnSubmit height="50px" text="Войти" isPending={isPending} />
            </Box>
          </Box>
        </Box>
      </FormControl>
      <Box className={s.form__text}>
        <p>
          <IoCall /> Служба поддержки
        </p>
        <p>+998 (90) 910-72-20</p>
      </Box>
    </Box>
  );
};
