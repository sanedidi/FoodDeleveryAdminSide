import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import Test from '../../components/test/test'
export const MainLayout = () => {
  return (
    <>
      <Box className={cls.content}>
        <Test />
        <Box className={cls.wrapper} id="outlet">
          <Outlet className={cls.outlet} />
        </Box>
      </Box>
    </>
  );
};
