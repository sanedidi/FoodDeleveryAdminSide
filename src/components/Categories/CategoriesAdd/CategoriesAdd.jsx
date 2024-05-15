import React, { useState } from "react";
import s from "./CategoriesAdd.module.scss";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import {
  CreateIcon,
  FolderIcon,
  PlusIconDown,
} from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import UseCAtegoriesAddProps from "./UseCAtegoriesAddProps";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { usePostCategory } from "services/categories.service";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const CategoriesAdd = () => {
  const { lang } = UseCAtegoriesAddProps();
  const [activeLang, setActiveLang] = useState("");
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState(null);

  const handleMainImageChange = (event) => {
    setMainImage(event.target.files[0]);
  };

  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", mainImage);

    try {
      const response = await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data && response.data.errors) {
        const errors = response.data.errors;

        switch (true) {
          case errors.name === "":
            toast.error("Введите название");
            break;
          case errors.photo === null:
            toast.error("Загрузите фото");
            break;
          default:
            toast.error("Ошибка при создании категории");
        }
      } else {
        toast.success("Категория успешно создана");
      }
    } catch (error) {
      toast.error("Заполните Поле или Загрузите Фото! ");
    }
  };

  return (
    <>
      <Toaster />
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
              <form onSubmit={handleSubmit} className={s.categoriesAdd__upload}>
                <div className={s.categoriesAdd__upload_left}>
                  <div className={s.input_box}>
                    <div className={s["drag-file-area"]}>
                      <label className={s.label}>
                        <input
                          type="file"
                          className={s["default-file-input"]}
                          onChange={handleMainImageChange}
                        />
                        <span className={s["browse-files-text"]}>
                          <PlusIconDown />
                          макс размер 4 мб
                        </span>{" "}
                      </label>{" "}
                    </div>{" "}
                  </div>
                </div>
                <div className={s.categoriesAdd__right}>
                  <CustomInput
                    type="text"
                    value={name}
                    InputPlaceHolder={"Название..."}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <CustomBtn
                  type="submit"
                  BtnContent={"Сохранить"}
                  BgColor={"blue"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesAdd;
