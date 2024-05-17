import Lang from "components/lang/Lang.jsx";
import { React, s } from "./imports.js";
import { Box } from "@chakra-ui/react";
import CustomInput from "components/Custom/CustomInput/CustomInput.jsx";
import CustomSelect from "components/Custom/CustomSelect/CustomSelect.jsx";
export const MainProd = () => {
  return (
    <Box className={s.prod}>
      <Box className={s.prod__left}>
        <Box className={s.prod__top}>
          <h2 className={s.prod__title}>Товар</h2>
          <p className={s.prod__text}>Активный</p>
        </Box>
        <Box className={s.prod__lang}>
          <Lang />
        </Box>
        <Box className={s.prod__bottom}>
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Название </h2>
            <CustomInput
              bgColor={"transparent"}
              InputPlaceHolder={"Введите Название"}
            />
          </Box>
          <Box className={s.prod__price}>
            <div className={s.prod__price_input}>
              <h2 className={s.prod__bottom_title}>Цена прихода </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Напишите сумму"}
              />
            </div>
            <div className={s.prod__price_input}>
              <h2 className={s.prod__bottom_title}>Цена продаж </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Напишите сумму"}
              />
            </div>
          </Box>
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Категории </h2>
            <CustomSelect placeHolder={'Выберите категории'}  option1={"22"} option2={"ss"} option3={"sdb"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainProd;
