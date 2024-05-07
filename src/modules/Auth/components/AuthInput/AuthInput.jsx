import React from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { Box } from "@chakra-ui/react";
import Error from "../../../../assets/img/icon/error.svg";

export const AuthInput = React.forwardRef(
  (
    {
      name,
      error,
      rest,
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
    ref // Include ref parameter here
  ) => {
    return (
      <Box className={s.wrapper}>
        <Box display="flex" flexDirection="column">
          <label className={s.label} htmlFor={id}>
            {label}
            <span className={s.required}>*</span>
          </label>
          <Box className={s.inputWrapper}>
            <img src={src} alt={alt} width={24} height={24} />
            <input
              className={clsx(s.input, { [s.error]: !!error?.message })}
              {...rest}
              ref={ref} // Pass ref here
              {...register(name)}
              {...props}
              type={type}
              id={id}
              minLength={minLength ? minLength : 2}
              placeholder={placeholder}
              required={required}
            />
          </Box>
        </Box>
        {error?.message && (
          <Box display="flex" alignItems="center" marginTop="8px">
            <img src={Error} alt="error" width={16} height={16} />
            <p style={{ color: "red", marginLeft: "8px" }}>{error?.message}</p>
          </Box>
        )}
      </Box>
    );
  }
);
