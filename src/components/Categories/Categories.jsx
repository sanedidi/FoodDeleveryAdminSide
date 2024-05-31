import s from "./CategoriesAdd/CategoriesAdd.module.scss";
import {
  React,
  Link,
  CustomBtn,
  CustomInput,
  Box,
  Stack,
  CustomModal,
  Header,
  PlusIcon,
  TrashIcon,
  UnderHeader,
  DownloadIcon,
} from "public/imports";
import useCategoriesProps from "./useCategoriesProps";
import { SearchIcon } from "@chakra-ui/icons";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import html2canvas from "html2canvas";
import { Skeleton } from "antd";
import { useRef } from "react";

export const Categories = () => {
  const {
    isOpenModal2,
    onCloseModal2,
    setSearchQuery,
    columns,
    data,
    selectedCategoryId,
    handleDeleteCategory,
    getCat,
    isLoading,
    setIsLoading,
  } = useCategoriesProps();

  const categoriesWrapperRef = useRef(null);

  const handleDownload = () => {
    if (categoriesWrapperRef.current) {
      html2canvas(categoriesWrapperRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "categories.png";
          link.click();
        }, "image/png");
      });
    }
  };
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header
        headerBtn2={
          <Link to={"/admin/categories/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
        title={"Категории"}
      />
      <Box className={s.categories}>
        <UnderHeader
          firstItem={
            <CustomInput
              InputIcon={<SearchIcon style={{ color: "#0e73fc" }} />}
              InputPlaceHolder={"Поиск..."}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          }
          thirdItem={
            <CustomBtn
              Onclick={() => handleDownload()}
              BtnContent={
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <DownloadIcon color={"blue"} />
                  <p style={{ color: "#000", fontWeight: "500" }}>Скачать</p>
                </Box>
              }
              BgColor={"white"}
              BtnBorder={"1px solid #E5E9EB"}
            />
          }
        />
        <Box className={s.categories__wrapper} ref={categoriesWrapperRef}>
          {isLoading ? (
            <Stack>
              <Skeleton height="40px" />
            </Stack>
          ) : (
            <CustomTable key={isLoading} columns={columns} data={data} />
          )}
        </Box>
      </Box>

      <CustomModal
        isOpenModal={isOpenModal2}
        onCloseModal={onCloseModal2}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            <TrashIcon />
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            Вы уверены, что хотите удалить этот товар?
          </Box>
        }
        secondaryBtnText={<Box>Нет</Box>}
        ModalBtnBgColor={"blue"}
        primaryBtnText="Да"
        onPrimaryBtnClick={() => {
          handleDeleteCategory(selectedCategoryId);
          onCloseModal2();
        }}
      />
    </>
  );
};
export default Categories;
