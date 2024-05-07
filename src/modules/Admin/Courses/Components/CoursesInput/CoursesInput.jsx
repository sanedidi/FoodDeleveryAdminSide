import React from 'react';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';

export const CoursesInput = React.forwardRef((
    { name, required, register = () => {}, placeholder, type, label, id, ...props },
    ref,
) => {
    return (
        <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor={id}>
                {label}
            </label>
            <input
                className={cls.input}
                {...props}
                ref={ref}
                {...register(name)}
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
            />
        </Box>
    );
});
