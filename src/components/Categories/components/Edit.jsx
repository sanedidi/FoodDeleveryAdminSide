import {
  Box,
  CustomBtn,
  CustomInput,
  Header,
  Lang,
  Link,
  PlusIconDown,
  axios,
  useNavigate,
  useParams,
} from "public/imports";
import React, { useState, useEffect } from "react";
import s from "../CategoriesAdd/CategoriesAdd.module.scss";
import { Done } from "@mui/icons-material";
import { CloseIcon } from "@chakra-ui/icons";

const Edit = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [productData, setProductData] = useState({
    id: categoryId,
    name: "",
    photo: null,
    imagePreview: null,
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `https://food-delivery-api-n6as.onrender.com/v1/category/${categoryId}`
        );
        const category = response.data.Data;
        setProductData({
          id: categoryId,
          name: category.name,
          photo: category.photo,
          imagePreview: category.photo,
        });
      } catch (error) {
        console.log("Failed to fetch category", error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setProductData((prevData) => ({ ...prevData, photo: file }));

    const reader = new FileReader();
    reader.onload = () => {
      setProductData((prevData) => ({
        ...prevData,
        imagePreview: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", categoryId);
    formData.append("name", productData.name);
    formData.append("photo", productData.photo);

    try {
      await axios.put(
        `https://food-delivery-api-n6as.onrender.com/v1/category/${categoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Категория успешно обновлена!");
      setTimeout(() => {
        navigate("/admin/categories/");
      }, 1000);
    } catch (error) {
      alert("Что-то пошло не так, попробуйте еще раз!");
    }
  };

  return (
    <>
      <Header
        title={"Редактировать "}
        headerBtn1={
          <CustomBtn
            BtnContent={
              <Link
                to={"/admin/categories"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "red",
                  gap: "10px",
                }}
              >
                <CloseIcon fontSize={"10px"} color={"red"} />
                Отменить
              </Link>
            }
            BgColor={"white"}
            BtnBorder={"1px solid red"}
            onClick={() => navigate("/admin/categories/")}
          />
        }
      />
      <form onSubmit={handleSubmit}>
        <Box className={s.categoriesAdd}>
          <Box className={s.categoriesAdd__main_cont}>
            <Box className={s.categoriesAdd__cont}>
              <Box className={s.categoriesAdd__top}>
                <h1>Общие настройки</h1>
              </Box>
              <Box className={s.categoriesAdd__bottom}>
                <Box className={s.categoriesAdd__bottom_lang}>
                  <Lang />
                </Box>

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
                        </span>
                      </label>
                    </Box>
                  </Box>
                </Box>
                <Box className={s.categoriesAdd__right}>
                  <CustomInput
                    type="text"
                    value={productData.name}
                    InputPlaceHolder={"Название..."}
                    onChange={(e) =>
                      setProductData((prevData) => ({
                        ...prevData,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Name"
                  />
                  <CustomBtn
                    BgColor={"blue"}
                    type="submit"
                    BtnContent={"Сохранить"}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={s.preview}>
              {productData.imagePreview && (
                <img
                  src={`https://${productData.imagePreview}`}
                  alt="Preview"
                />
              )}
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Edit;
