import React, { useState } from "react";
import s from "./CategoriesAdd.module.scss";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import { PlusIconDown } from "components/SvgComponents/SvgComponents";
import { Link, useNavigate } from "react-router-dom";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import UseCAtegoriesAddProps from "./UseCAtegoriesAddProps";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { usePostCategory } from "services/categories.service";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import HeaderBox from "../components/HeaderBox";

export const CategoriesAdd = () => {
  const {
    lang,
    activeLang,
    setActiveLang,
    name,
    setName,
    mainImage,
    setMainImage,
    imagePreview,
    setImagePreview,
  } = UseCAtegoriesAddProps();
  const navigate = useNavigate();
  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
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
        navigate("/admin/categories/");
      }
    } catch (error) {
      toast.error("Ошибка: " + error.message);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Header
          title={<HeaderBox />}
          headerBtn2={
            <CustomBtn
              type="submit"
              BtnContent={"Сохранить"}
              BgColor={"blue"}
            />
          }
        />
        <Box className={s.categoriesAdd}>
          <Box className={s.categoriesAdd__underHead}>
            <Box className={s.categoriesAdd__text}>
              <p>Общие Сведения</p>
            </Box>
          </Box>
          <Box className={s.categoriesAdd__main_cont}>
            <Box className={s.categoriesAdd__cont}>
              <Box className={s.categoriesAdd__top}>
                <h1>Общие настройки</h1>
              </Box>
              <Box className={s.categoriesAdd__bottom}>
                <Box className={s.categoriesAdd__bottom_lang}>
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
                </Box>
                <form
                  onSubmit={handleSubmit}
                  className={s.categoriesAdd__upload}
                >
                  <Box className={s.categoriesAdd__upload_left}>
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
                            макс размер 4 мб
                          </span>{" "}
                        </label>{" "}
                      </Box>{" "}
                    </Box>
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
            <Box className={s.preview}>
              {imagePreview && <img src={imagePreview} alt="Preview" />}
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CategoriesAdd;
