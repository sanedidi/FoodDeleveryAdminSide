import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import CustomBtn from "../CustomBtn/CustomBtn";

export const CustomModal = ({
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
    <Modal size={"md"} isOpen={isOpenModal} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent>
        {modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
        <ModalBody>{modalContent}</ModalBody>
        {(primaryBtnText || secondaryBtnText) && (
          <ModalFooter
            width={"100%"}
            justifyContent={"space-between"}
            display={"flex"}
            gap={"10px"}
          >
            {secondaryBtnText && (
              <CustomBtn
                BgColor={ModalBtnBgColor}
                Onclick={onCloseModal}
                BtnContent={secondaryBtnText}
              />
            )}
            {primaryBtnText && (
              <CustomBtn
                Onclick={onPrimaryBtnClick}
                BtnContent={primaryBtnText}
              />
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
