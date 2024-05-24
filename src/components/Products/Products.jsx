import React, { useState, useEffect } from "react";
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
import s from "./Products.module.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CustomPagination } from "public/imports"; // Corrected import
import { useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

export const Products = () => {
  const {
    data,
    columns,
    setSearchQuery,
    isOpenModal2,
    setIsOpenModal2,
    selectedProductId,
    setIsLoading,
  } = useProductsProps();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { prod, refetch, isLoading } = useQuery({
    queryKey: ["GET/prod", page, pageSize],
    queryFn: () => {
      return request
        .get(
          `https://food-delivery-api-n6as.onrender.com/v1/order_products?page=${page}&limit=${pageSize}`
        )
        .then((response) => response.prod);
    },
  });

  const totalPages = prod ? Math.ceil((prod.count || 0) / pageSize) : 0; 

  useEffect(() => {
    refetch();
  }, [page, pageSize, refetch]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
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
      refetch(); // Refetch data after deleting a product
    } catch (error) {
      toast.error("Что-то пошло не так, повторите попытку!");
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
        <CustomPagination
          count={totalPages}
          page={page}
          onPageChange={handlePageChange}
        />
      </Box>
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
        onPrimaryBtnClick={deleteProduct}
      />
    </>
  );
};

export default Products;
