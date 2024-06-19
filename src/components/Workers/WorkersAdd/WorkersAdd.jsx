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
} from "public/imports";
import { FolderIcon } from "components/SvgComponents/SvgComponents";
import request from "services/httpRequest";

export const WorkersAdd = () => {
  const { lang, activeLang, setActiveLang, name, setName } =
    UseCategoriesAddProps();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await request.post(
        "https://food-delivery-api-n6as.onrender.com/v1/catalog",
        { name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.errors) {
        const errors = response.data.errors;

        switch (true) {
          case errors.name === "":
            toast.error("Введите название");
            break;
          default:
            toast.error("Ошибка при создании категории");
        }
      } else {
        toast.success("Категория успешно создана");
        navigate("/admin/workers/");
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
          title={
            <HeaderBox
              path={"/admin/categories"}
              gg={"Категории"}
              hh={"Создать"}
              icon={<FolderIcon />}
            />
          }
          headerBtn2={
            <Link
              to={"/admin/categories"}
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
