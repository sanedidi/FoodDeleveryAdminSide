import { CloseIcon } from "@chakra-ui/icons";
import {
  Link,
  HeaderBox,
  CreateIcon,
  FolderIcon,
  CustomBtn,
  Header,
  MainProd,
  Box,
  React,
  useState,
  toast,
} from "public/imports";
import request from "services/httpRequest";

export const ProductsAdd = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category_id ||
      !formData.branch_id ||
      !selectedFile
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    if (
      isNaN(formData.income_price) ||
      isNaN(formData.sale_price) ||
      isNaN(formData.quantity)
    ) {
      toast.error("Please enter valid numeric values for price and quantity.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append("photo", selectedFile);

    try {
      const response = await request.post(
        "https://food-delivery-api-n6as.onrender.com/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Продукт создан!!!");
    } catch (error) {
      toast.error("Заполните все поля");
    }
  };
  return (
    <>
      <Header
        title={
          <HeaderBox
            path={"/admin/categories/products"}
            icon1={<FolderIcon />}
            gg={"Продукт"}
            hh={"Создать"}
            icon={<CreateIcon />}
          />
        }
        headerBtn1={
          <Link
            to={"/admin/categories/products"}
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
      <Box padding={"16px"}>
        <MainProd />
      </Box>
    </>
  );
};

export default ProductsAdd;
