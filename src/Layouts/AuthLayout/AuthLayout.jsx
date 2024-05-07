import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import s from "./styles.module.scss";
import React from "react";
import { GroupsIcon } from "../../components/SvgComponents/SvgComponents";
export const AuthLayout = () => {
  return (
    <Box className={s.login}>
      <Box className={s.login__wrapper}>
        <Box className={s.login__wrapperLeft}>
          <h2 className={s.login__title}>Delever</h2>
        </Box>
        <Box className={s.login__wrapperContent}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
