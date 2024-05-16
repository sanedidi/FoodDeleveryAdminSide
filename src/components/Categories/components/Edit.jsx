import React from "react";
import s from "../CategoriesAdd/CategoriesAdd.module.scss";
import UseCategoriesAddProps from "../CategoriesAdd/UseCAtegoriesAddProps";
import { PlusIconDown } from "components/SvgComponents/SvgComponents";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { Box } from "@chakra-ui/react";
import { Done } from "@mui/icons-material";

const Edit = () => {
  const {
    lang,
    activeLang,
    mainImage,
    name,
    setActiveLang,
    setMainImage,
    setName,
  } = UseCategoriesAddProps();

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);
  };

  return (
    <form>
      <Box className={s.categoriesAdd_modal}>
        <Box className={s.categoriesAdd__main_cont_modal}>
          <Box className={s.categoriesAdd__cont}>
            <Box className={s.categoriesAdd__top}>
              <h1>Общие настройки</h1>
            </Box>
            <Box className={s.categoriesAdd__bottom_modal}>
              <Box className={s.categoriesAdd__bottom_lang}>
                {lang.map((el, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`${s.categoriesAdd__language} ${
                        activeLang === el.lang ? s.activeLang : ""
                      }`}
                    >
                      <h2>{el.lang}</h2>
                      <span>{el.icon}</span>
                    </button>
                  );
                })}
              </Box>
              <form className={s.categoriesAdd__upload}>
                <Box className={s.categoriesAdd__upload_left}>
                  {mainImage ? (
                    <Box className={s["drag-file-area"]}>
                      <label className={s.label}>
                        <div
                          type="file"
                          className={s["default-file-input"]}
                          onChange={handleMainImageChange}
                        >
                          skvnd
                        </div>
                        <span
                          className={`${s["browse-files-text"]} ${
                            mainImage ? s.active : ""
                          }`}
                        >
                          <Done />
                          Загружено
                        </span>{" "}
                      </label>{" "}
                    </Box>
                  ) : (
                    <Box className={s.input_box}>
                      <Box className={s["drag-file-area"]}>
                        <label className={s.label}>
                          <input
                            type="file"
                            className={s["default-file-input"]}
                            onChange={handleMainImageChange}
                          />
                          <span className={s["browse-files-text"]}>
                            <PlusIconDown />
                            Макс. размер 4 МБ
                          </span>{" "}
                        </label>{" "}
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box className={s.categoriesAdd__right}>
                  <CustomInput
                    type="text"
                    value={name}
                    InputPlaceHolder={"Название..."}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Edit;
