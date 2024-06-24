import s from "components/Categories/CategoriesAdd/CategoriesAdd.module.scss";
import UseCategoriesAddProps from "components/Categories/CategoriesAdd/UseCAtegoriesAddProps";
import HeaderBox from "components/Categories/components/HeaderBox";
import { Box } from "@chakra-ui/react";
import {
  Lang,
  toast,
  Toaster,
  CustomBtn,
  CustomInput,
  useNavigate,
  Header,
  React,
  Link,
  useState,
} from "public/imports";
import { FolderIcon } from "components/SvgComponents/SvgComponents";
import request from "services/httpRequest";

export const WorkersAdd = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const restaurant_id = localStorage.getItem("restaurant_id");
    if (!restaurant_id || !name) {
      toast.error("Все поля обязательны для заполнения.");
      return;
    }
    const formData = {
      name: name,
      restaurant_id: restaurant_id,
    };

    try {
      const response = await request.post("/catalog", formData);

      if (response.data && response.data.errors) {
        const errors = response.data.errors;

        if (errors.name === "") {
          toast.error("Введите название");
        } else {
          toast.error("Ошибка при создании категории");
        }
      } else {
        toast.success("Категория успешно создана");
        navigate("/admin/workers/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { status, data } = error.response;
        if (status === 400) {
          toast.error(`Ошибка 400: ${data.description}`);
        } else if (status === 404) {
          toast.error("Ошибка 404: Не найдено");
        } else if (status === 500) {
          toast.error("Ошибка 500: Внутренняя ошибка сервера");
        } else {
          toast.error(`Ошибка: ${error.message}`);
        }
      } else {
        toast.error(`Ошибка: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Header
          title={
            <HeaderBox
              path={"/admin/workers"}
              gg={"Каталог"}
              hh={"Создать"}
              icon={<FolderIcon />}
            />
          }
          headerBtn2={
            <Link
              to={"/admin/workers"}
              style={{
                display: "flex",
                alignItems: "center",
                color: "red",
                gap: "10px",
                border: "1px solid red",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Отменить
            </Link>
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
                  <Lang />
                </Box>
                <Box className={s.categoriesAdd__right}>
                  <CustomInput
                    type="text"
                    value={name}
                    InputPlaceHolder={"Название..."}
                    onChange={(e) => setName(e.target.value)}
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
          </Box>
        </Box>
      </form>
    </>
  );
};

export default WorkersAdd;
