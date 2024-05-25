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
} from "public/imports";

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
      alert("Please fill in all the required fields.");
      return;
    }

    if (
      isNaN(formData.income_price) ||
      isNaN(formData.sale_price) ||
      isNaN(formData.quantity)
    ) {
      alert("Please enter valid numeric values for price and quantity.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append("photo", selectedFile);

    console.log("Submitting form data:", Object.fromEntries(data.entries()));

    try {
      const response = await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );
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
          <>
            <Link to={"/admin/categories/products"}>
              <CustomBtn BgColor={"blue"} BtnContent={"Вернутся"} />
            </Link>
          </>
        }
      />
      <Box padding={"16px"}>
        <MainProd />
      </Box>
    </>
  );
};

export default ProductsAdd;
