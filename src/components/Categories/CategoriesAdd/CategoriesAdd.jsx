import React, { useState } from "react";
import s from "./CategoriesAdd.module.scss";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import {
  CreateIcon,
  FolderIcon,
  PlusIcon,
  PlusIconDown,
} from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import UseCAtegoriesAddProps from "./UseCAtegoriesAddProps";
import CustomInput from "components/Custom/CustomInput/CustomInput";
export const CategoriesAdd = () => {
  const { lang } = UseCAtegoriesAddProps();
  const [activeLang, setActiveLang] = useState(""); // State to hold the active language

  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };
  return (
    <>
      <Header
        title={
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "400",
            }}
          >
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
              }}
              to={"/admin/categories"}
            >
              <FolderIcon />
              Категории
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
              }}
            >
              <CreateIcon />
              Создать
            </Link>
          </Box>
        }
        headerBtn2={<CustomBtn BtnContent={"Сохранить"} BgColor={"blue"} />}
      />
      <div className={s.categoriesAdd}>
        <div className={s.categoriesAdd__underHead}>
          <div className={s.categoriesAdd__text}>
            <p>Общие Сведения</p>
          </div>
        </div>
        <div className={s.categoriesAdd__main_cont}>
          <div className={s.categoriesAdd__cont}>
            <div className={s.categoriesAdd__top}>
              <h1>Общие настройки</h1>
            </div>
            <div className={s.categoriesAdd__bottom}>
              <div className={s.categoriesAdd__bottom_lang}>
                {lang.map((el, index) => {
                  return (
                    <button
                      key={index}
                      className={`${s.categoriesAdd__language} ${
                        activeLang === el.lang ? s.activeLang : ""
                      }`}
                      onClick={() => handleLangClick(el.lang)}
                    >
                      <h2>{el.lang}</h2>
                      <span>{el.icon}</span>
                    </button>
                  );
                })}
              </div>
              <div className={s.categoriesAdd__upload}>
                <div className={s.categoriesAdd__upload_left}>
                  <button>
                    <PlusIconDown />
                    Макс размер 4 МБ
                    <p>Добавить фото</p>
                  </button>
                </div>
                <div className={s.categoriesAdd__right}>
                  <h2>Название</h2>
                  <CustomInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesAdd;
