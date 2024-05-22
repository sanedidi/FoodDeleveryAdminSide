import { Button } from "@chakra-ui/react";
import React from "react";

export const CustomBtn = ({ BgColor, BtnContent, Onclick, BtnBorder, type }) => {
  return (
    <Button
      width={"100%"}
      type={type}
      border={BtnBorder}
      onClick={Onclick}
      colorScheme={BgColor}
    >
      {BtnContent}
    </Button>
  );
};

export default CustomBtn;
