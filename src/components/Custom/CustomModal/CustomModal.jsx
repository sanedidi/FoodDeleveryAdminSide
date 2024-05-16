import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import CustomBtn from "../CustomBtn/CustomBtn";

const CustomModal = ({
  isOpenModal,
  onCloseModal,
  modalTitle,
  modalContent,
  primaryBtnText,
  ModalBtnBgColor,
  secondaryBtnText,
  onPrimaryBtnClick,
}) => {
  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalContent}</ModalBody>
        <ModalFooter
          width={"100%"}
          justifyContent={"space-between"}
          display={"flex"}
          gap={"10px"}
        >
          <CustomBtn
            BgColor={ModalBtnBgColor}
            Onclick={onCloseModal}
            BtnContent={secondaryBtnText}
          />
          <CustomBtn Onclick={onPrimaryBtnClick} BtnContent={primaryBtnText} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
