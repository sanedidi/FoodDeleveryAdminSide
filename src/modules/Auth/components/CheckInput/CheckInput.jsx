import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const CheckInput = ({ text, name, ref, register = () => {} }) => {
    return(
        <Box display="flex" alignItems="center">
            <input 
                className={cls.checkbox} 
                type="checkbox" 
                aria-label="remember"
                ref={ref}
                {...register(name)}
            />
            <span className={cls.remember}>{text}</span>
        </Box>
    )
}