import { Box } from "@chakra-ui/react";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import React from "react";

export const Header = ({
  onOpen,
  isOpen,
  register = () => {},
  title,
  onClose = () => {},
  handleAccept = () => {},
  headerBtn1,
  headerBtn2,
  path1,
  path2,
}) => {
  return (
    <header id="header" className={s.header}>
      <Box className={s.header__wrapper}>
        <h1 className={s.header__title}>{title}</h1>
        <Box
          gap={10}
          style={{ display: "flex" }}
          alignItems={"center"}
          className={s.header__wrapperLeft}
        >
          <Box style={{ display: "flex", height: "34px" }}>{headerBtn1}</Box>
          <Box style={{ maxHeight: "34px" }}>{headerBtn2}</Box>
        </Box>
      </Box>
    </header>
  );
};
