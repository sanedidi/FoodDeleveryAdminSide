import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const CustomInput = ({
  width,
  padding,
  bgColor,
  onChange,
  InputIcon,
  InputPlaceHolder,
  value,
  name,
  className,
}) => {
  return (
    <InputGroup style={{ display: "flex", alignItems: "center" }}>
      {InputIcon && (
        <InputLeftElement pointerEvents="none">{InputIcon}</InputLeftElement>
      )}
      <Input
        value={value}
        width={width}
        padding={padding}
        backgroundColor={bgColor}
        onChange={onChange}
        placeholder={InputPlaceHolder}
        name={name}
        className={className}
      />
    </InputGroup>
  );
};

export default CustomInput;
