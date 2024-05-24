import React, { useEffect, useState } from "react";
import { Header } from "components/Header/Header";
import { Box } from "@chakra-ui/react";
import { DownloadIcon, Search2Icon } from "@chakra-ui/icons";
import { Link, useSearchParams } from "react-router-dom";
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
import ReactPaginate from "react-paginate";
import toast, { Toaster } from "react-hot-toast";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;

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
    isLoading,
    setSelectedProductId,
    onCloseModal1,
    onCloseModal2,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    setIsLoading,
    getProducts,
  } = useProductsProps();

  const { current, totalPages } = paginationData;

  const handleProductsPerPageChange = (perPage) => {
    if (limit === 10) {
      setSearchParams({ limit: 20 });
    } else {
      setSearchParams({ limit: 10 });
    }
  };
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
      toast.success("Продукт удален успешно");
      setIsOpenModal2(false);
    } catch (error) {
      toast.error("Что то пошло не так повторите попытку!");
    }
  };

  const handlePageChange = (event) => {
    setSearchParams({ ...searchParams, page: event.selected + 1 });
  };

  useEffect(() => {
    getProducts(page, limit);
  }, [page]);

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
      <Toaster />
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
        <CustomTable key={isLoading} columns={columns} data={data} />
        <Box className={s.products__pagination}>
          <ReactPaginate
            previousLabel={"< previous"}
            nextLabel={"next >"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            className={s.products_pag}
            initialPage={page - 1}
          />
          <button onClick={() => handleProductsPerPageChange(10)}>
            Показать по 20
          </button>
        </Box>
      </Box>
      <>
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
