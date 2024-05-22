import React, { useState } from "react";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import { DownloadIcon, Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  FilterIcon,
  PlusIcon,
  ReloadIcon,
  TrashIcon,
} from "components/SvgComponents/SvgComponents";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import UnderHeader from "components/UnderHeader/UnderHeader";
import CustomInput from "components/Custom/CustomInput/CustomInput";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import { Skeleton } from "antd";
import { CustomModal } from "components/Categories/imports";
import useProductsProps from "./useProductsProps";
import { Lang } from "./components/mainProd/as";
import s from "./Products.module.scss";
import axios from "axios";

export const Products = () => {
  const {
    data,
    columns,
    setSearchQuery,
    isOpenModal1,
    isOpenModal2,
    setIsOpenModal1,
    setIsOpenModal2,
    selectedProductId,
    paginationData,
    handlePageChange,
  } = useProductsProps();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(
        `https://food-delivery-api-n6as.onrender.com/v1/product/${selectedProductId}`
      );
      console.log("Product deleted successfully");
      setIsOpenModal2(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Header
        title={"Продукты "}
        headerBtn1={
          <Box className={s.Products__btn}>
            <CustomBtn
              onClick={handleRefresh}
              BgColor={"white"}
              type={"button"}
              BtnBorder={"1px solid #E5E9EB"}
              BtnContent={
                <Box
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <ReloadIcon />
                  <p style={{ color: "blue", fontWeight: "500" }}>
                    Обновить CRM филиал
                  </p>
                </Box>
              }
            />
          </Box>
        }
        headerBtn2={
          <Link to={"/admin/categories/products/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
      />
      <UnderHeader
        firstItem={
          <CustomInput
            InputPlaceHolder={"Поиск..."}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputIcon={<Search2Icon color={"blue"} />}
          />
        }
        secondItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <FilterIcon />
                <p style={{ color: "#000", fontWeight: "500" }}>Фильтр</p>
              </Box>
            }
          />
        }
        thirdItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <DownloadIcon color={"blue"} />
                <p style={{ color: "#000", fontWeight: "500" }}>Скачать</p>
              </Box>
            }
          />
        }
      />
      <Box className={s.products__wrapper}>
        {isLoading ? (
          <Skeleton active />
        ) : (
          <>
            <CustomTable key={isLoading} columns={columns} data={data} />
            <Box className={s.pagination}>
            <ul>
          {Array.from({ length: paginationData.totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={paginationData.current === index + 1 ? s.active : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
            </Box>
          </>
        )}
      </Box>
      <>
        <CustomModal
          isOpenModal={isOpenModal1}
          onCloseModal={() => setIsOpenModal1(false)}
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
                        <Box className="categoriesAdd__right"></Box>
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
            setIsOpenModal1(false);
          }}
        />
        <CustomModal
          isOpenModal={isOpenModal2}
          onCloseModal={() => setIsOpenModal2(false)}
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
            deleteProduct();
          }}
        />
      </>
    </>
  );
};

export default Products;
