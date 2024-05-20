import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
const CustomTextArea = ({ handleInputChange, Name, placeHolder, value }) => {
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        name={Name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </>
  );
};

export default CustomTextArea;
