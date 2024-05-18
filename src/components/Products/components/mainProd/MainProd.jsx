import Lang from "components/lang/Lang.jsx";
import { React, s } from "./imports.js";
import { Box, InputRightElement } from "@chakra-ui/react";
import CustomInput from "components/Custom/CustomInput/CustomInput.jsx";
import CustomSelect from "components/Custom/CustomSelect/CustomSelect.jsx";
import { CustomBtn } from "components/Categories/imports.js";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { Textarea } from "@chakra-ui/react";

import Select from "react-select";
export const MainProd = () => {
  const [article, setArticle] = useState("");
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colourOptions1 = [
    { value: "chocolate", label: "Делимый" },
    { value: "strawberry", label: "Не делимый" },
  ];
  const animatedComponents = makeAnimated();

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    setArticle(randomNumber.toString());
  };
  const handleArticleChange = (event) => {
    let value = event.target.value;
    if (value.length > 6) {
      value = value.slice(0, 6);
    }
    setArticle(value);
  };

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
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Описание </h2>
            <Textarea placeholder="Here is a sample placeholder" />
          </Box>
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Категории </h2>
            <CustomSelect
              placeHolder={"Выберите категории"}
              option1={"22"}
              option2={"ss"}
              option3={"sdb"}
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
            <h2 className={s.prod__bottom_title}>*Артикул </h2>
            <Box className={s.prod__gen}>
              <CustomInput
                value={article}
                onChange={handleArticleChange}
                bgColor={"transparent"}
                InputPlaceHolder={"Введите Артикул"}
              />
              <CustomBtn
                BtnContent={<p className={s.prod_btn_text}>Генерировать</p>}
                Onclick={generateRandomNumber}
              />
            </Box>
          </Box>
          <Box className={s.prod__name}>
            <Box className={s.prod__choice}>
              <Box className={s.prod__item}>
                <h2 className={s.prod__bottom_title}>Делимый / Не делимый </h2>

                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={(colourOptions[0], colourOptions[5])}
                  options={colourOptions1}
                />
              </Box> 
              <Box className={s.prod__item}>
                <h2 className={s.prod__bottom_title}>*Тег </h2>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[colourOptions[0]]}
                  isMulti
                  options={colourOptions}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainProd;
