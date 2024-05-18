import {
  React,
  s,
  CustomBtn,
  CustomInput,
  CustomSelect,
  Lang,
  Textarea,
  makeAnimated,
  Box,
  Select,
} from "./imports.js";
import useMainProdProps from "./useMainProdProps.jsx";

export const MainProd = () => {
  const {
    generateRandomNumber,
    article,
    setArticle,
    colourOptions,
    colourOptions1,
    colourOptions3,
    handleArticleChange,
  } = useMainProdProps();

  const animatedComponents = makeAnimated();

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
            <Box className={s.prod__price_input}>
              <h2 className={s.prod__bottom_title}>Цена прихода </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Напишите сумму"}
              />
            </Box>
            <Box className={s.prod__price_input}>
              <h2 className={s.prod__bottom_title}>Цена продаж </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Напишите сумму"}
              />
            </Box>
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
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Единица измерения </h2>
            <Box className={s.prod__dd}>
              <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                defaultValue={(colourOptions[0], colourOptions[5])}
                options={colourOptions3}
              />
            </Box>
          </Box>
          <Box className={s.prod__main_inputs}>
            <Box className={s.prod__inputs}>
              <h2 className={s.prod__bottom_title}> Код единицы измерения </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Введите код"}
              />
            </Box>
            <Box className={s.prod__inputs}>
              <h2 className={s.prod__bottom_title}> Код ИКПУ </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Введите код"}
              />
            </Box>
            <Box className={s.prod__inputs}>
              <h2 className={s.prod__bottom_title}> Код упаковки </h2>
              <CustomInput
                bgColor={"transparent"}
                InputPlaceHolder={"Введите код"}
              />
            </Box>
          </Box>
          <Box className={s.prod__name}>
            <h2 className={s.prod__bottom_title}>*Филлиалы </h2>
            <CustomSelect
              placeHolder={"Выберите Филлиалы"}
              option1={"22"}
              option2={"ss"}
              option3={"sdb"}
            />
          </Box>
        </Box>
      </Box>
      <Box className={s.prod__right}></Box>
    </Box>
  );
};

export default MainProd;
