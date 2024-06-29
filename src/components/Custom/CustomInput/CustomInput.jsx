import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const CustomInput = ({
  width,
  padding,
  bgColor,
  onChange,
  InputIcon,
  InputPlaceHolder,
  value,
  name,
  className,
  type,
  disabled,
  defaultValue,
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
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </InputGroup>
  );
};

export default CustomInput;
