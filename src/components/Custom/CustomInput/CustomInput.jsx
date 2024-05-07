import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
export const CustomInput = ({ width, padding, bgColor, onChange, InputIcon, InputPlaceHolder }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">{InputIcon}</InputLeftElement>
      <Input
        width={width}
        padding={padding}
        backgroundColor={bgColor}
        onChange={onChange}
        placeholder={InputPlaceHolder}
      />
    </InputGroup>
  );
};

export default CustomInput;
