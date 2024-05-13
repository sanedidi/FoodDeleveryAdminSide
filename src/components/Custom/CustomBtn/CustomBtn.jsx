import { Button } from "@chakra-ui/react";
import React from "react";

const CustomBtn = ({ BgColor, BtnContent, Onclick, BtnBorder }) => {
  return (
    <Button
      border={BtnBorder}
      onClick={Onclick}
      colorScheme={BgColor}
    >
      {BtnContent}
    </Button>
  );
};

export default CustomBtn;
