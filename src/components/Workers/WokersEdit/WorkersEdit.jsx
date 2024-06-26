import React, { useState, useEffect } from "react";
import {
  Box,
  CustomBtn,
  CustomInput,
  Header,
  Lang,
  Link,
  Toaster,
  toast,
} from "public/imports";
import s from "components/Categories/CategoriesAdd/CategoriesAdd.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import request from "services/httpRequest";

const WorkersEdit = () => {
  const navigate = useNavigate();
  const { workersId } = useParams();

  const [productData, setProductData] = useState({
    id: workersId,
    name: "",
  });

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await request.get(
          `https://food-delivery-api-n6as.onrender.com/v1/catalog/${workersId}`
        );
        const worker = response.data.Data;
        setProductData({
          id: workersId,
          name: worker.name,
        });
      } catch (error) {
        console.log("Failed to fetch worker", error);
      }
    };

    fetchWorker();
  }, [workersId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await request.put(
        `https://food-delivery-api-n6as.onrender.com/v1/catalog/${workersId}`,
        {
          id: productData.id,
          name: productData.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Работник успешно обновлен!");
      navigate("/admin/workers");
    } catch (error) {
      console.error("Ошибка при обновлении работника", error);
      toast.error("Что-то пошло не так, попробуйте еще раз!");
    }
  };

  return (
    <>
      <Toaster />
      <Header
        title="Редактировать работника"
        headerBtn1={
          <Link
            to="/admin/workers"
            style={{
              display: "flex",
              alignItems: "center",
              color: "red",
              gap: "10px",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "16px",
              border: "1px solid red",
            }}
          >
            Отменить
          </Link>
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
                <Box className={s.categoriesAdd__upload_left}></Box>
                <Box className={s.categoriesAdd__right}>
                  <CustomInput
                    type="text"
                    value={productData.name}
                    onChange={(e) =>
                      setProductData({ ...productData, name: e.target.value })
                    }
                    placeholder="Название..."
                  />
                  <CustomBtn
                    BgColor="blue"
                    type="submit"
                    BtnContent="Сохранить"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default WorkersEdit;
