import { Box, useDisclosure } from "@chakra-ui/react";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineEllipsis, CustomModal } from "public/imports";

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
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
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
          <Box style={{ display: "flex", maxHeight: "34px" }}>{headerBtn1}</Box>
          <Box style={{ maxHeight: "34px", textAlign: "center" }}>
            {headerBtn2}
          </Box>
        </Box>
        <Box
          borderRadius={"8px"}
          border={"1px solid #e7e7e7"}
          className={s.header__bur}
          onClick={onOpenModal}
          style={{ maxHeight: "34px" }}
        >
          <AiOutlineEllipsis fontSize={"30px"} />
        </Box>
      </Box>
      <Box>
        <CustomModal
          isOpenModal={isOpenModal}
          onCloseModal={onCloseModal}
          modalContent={
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              {headerBtn2}
              {headerBtn1}
            </Box>
          }
          ModalBtnBgColor={"blue"}
        />
      </Box>
    </header>
  );
};
