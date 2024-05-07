import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import s from "./styles.module.scss";
import SideBar from "../../components/SideBar/SideBar";
export const MainLayout = () => {
  return (
    <>
      <Box className={s.mainLayOut}>
        <SideBar />
        <Box className={s.mainLayOut__wrapper} id="outlet">
          <Outlet className={s.outlet} />
        </Box>
      </Box>
    </>
  );
};
