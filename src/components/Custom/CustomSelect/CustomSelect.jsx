import React from "react";
import { Select } from "@chakra-ui/react";
const CustomSelect = ({ option1, option2, option3, placeHolder }) => {
  return (
    <Select placeholder={placeHolder}>
      <option value="option1">{option1}</option>
      <option value="option2">{option2}</option>
      <option value="option3">{option3}</option>
    </Select>
  );
};

export default CustomSelect;
