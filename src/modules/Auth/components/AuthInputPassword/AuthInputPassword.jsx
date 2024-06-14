import React, { useState } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import Error from "../../../../assets/img/icon/error.svg"
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

export const AuthInputPassword = React.forwardRef(
  (
    {
      name,
      maxLength,
      error,
      minLength,
      required,
      alt,
      src,
      register = () => {},
      placeholder,
      type,
      label,
      id,
      ...props
    },
    ref, // Include ref parameter here
  ) => {
    const { ...rest } = props;

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <Box className={s.wrapper}>
        <Box display="flex" flexDirection="column">
          <label className={s.label} htmlFor={id}>
            {label} 
            <span className={s.required}>*</span>
          </label>
          <Box className={s.inputWrapper}>
            <InputGroup display="flex" alignItems='center' size='md'>
              <img src={src} alt={alt} width={24} height={24} />
              <input
                className={clsx(s.input, { [s.error]: !!error?.message })}
                {...rest}
                ref={ref} // Pass ref here
                {...register(name)}
                {...props}
                type={show ? 'text' : 'password'}
                id={id}
                maxLength={maxLength ? maxLength : 20}
                minLength={minLength ? minLength : 4}
                placeholder={placeholder}
                required={required} 
              />
              <InputRightElement >
                <button className={s.btnEye} type='button' onClick={handleClick}>
                  {
                    show ? 
                    <ViewIcon />
                    : <ViewOffIcon />
                  }
                </button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        { error?.message && 
          <Box display="flex" alignItems="center" marginTop="8px">
            <img src={Error} alt="error" width={16} height={16}/>
            <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
          </Box>
        }
      </Box>
    );
  }
);
