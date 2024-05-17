import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
const CustomTextArea = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder={placeHolder}
        size={size}
      />
    </>
  );
};

export default CustomTextArea;
