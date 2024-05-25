import React, { useRef, useState } from "react";
import s from "./CategoriesAdd/CategoriesAdd.module.scss";
import {
  DownloadIcon,
  PlusIcon,
  PlusIconDown,
  ReloadIcon,
  TrashIcon,
} from "components/SvgComponents/SvgComponents";
import { Link } from "react-router-dom";
import UnderHeader from "components/UnderHeader/UnderHeader";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { SearchIcon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import useCategoriesProps from "./useCategoriesProps";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import html2canvas from "html2canvas";
import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import UseCAtegoriesAddProps from "./CategoriesAdd/UseCAtegoriesAddProps";
import { Lang, CustomModal, Header } from "public/imports";
import { Skeleton } from "antd";

export const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);
  };
  const {
    isOpenModal1,
    isOpenModal2,
    onCloseModal1,
    onCloseModal2,
    updateCategory,
    setSearchQuery,
    columns,
    data,
    selectedCategoryId,
    handleDeleteCategory,
  } = useCategoriesProps();
  const {
    lang,
    activeLang,
    mainImage,
    name,
    setActiveLang,
    setMainImage,
    setName,
  } = UseCAtegoriesAddProps();

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
        headerBtn1={
          <CustomBtn
            Onclick={handleRefresh}
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <ReloadIcon />
                <p style={{ color: "blue", fontWeight: "500" }}>
                  {" "}
                  Обновить CRM филиал
                </p>
              </Box>
            }
          />
        }
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
                <>
                  <DownloadIcon />
                  <p style={{ color: "black", fontWeight: "400" }}>Скачать</p>
                </>
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
        isOpenModal={isOpenModal1}
        onCloseModal={onCloseModal1}
        modalContent={
          <Box>
            <Box className={s.categoriesAdd_modal}>
              <Box className={s.categoriesAdd__underHead_modal}>
                <Box className={s.categoriesAdd__cont}>
                  <Box className={s.categories__bottom_modal}>
                    <Box className="categoriesAdd__bottom_lang">
                      <Lang />
                    </Box>
                    <form className={s.categoriesAdd__upload}>
                      <Box className="categoriesAdd__upload_left">
                        {mainImage ? (
                          <Box className={s["drag-file-area"]}>
                            <label className={s["label"]}>
                              <div
                                type="file"
                                className={s["default-file-input"]}
                                onChange={handleMainImageChange}
                              >
                                skvnd
                              </div>
                              <span
                                className={`browse-files-text ${
                                  mainImage ? "active" : ""
                                }`}
                              >
                                <Done />
                                Загружено
                              </span>{" "}
                            </label>{" "}
                          </Box>
                        ) : (
                          <Box className={s["input_box"]}>
                            <Box className={s["drag-file-area"]}>
                              <label className="label">
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
                      <Box className="categoriesAdd__right">
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
          </Box>
        }
        secondaryBtnText={<Box>Нет</Box>}
        ModalBtnBgColor={"blue"}
        primaryBtnText="Да"
        onPrimaryBtnClick={() => {
          updateCategory({
            id: selectedCategoryId,
            name,
            photo: mainImage,
          });
          onCloseModal1();
        }}
      />
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
