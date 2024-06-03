import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./OrdersAdd.module.scss";
import { Box, Header, Select } from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";

export const OrdersAdd = () => {
  const [branchOptions, setBranchOptions] = useState([]);
  const [prodOptions, setProdOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    branch_id: "",
    comment: "",
    customer_name: "",
    customer_phone: "",
    delivery_time: "",
    order_type: "",
    payment_type: "",
    products: [],
  });

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(
          "https://food-delivery-api-n6as.onrender.com/v1/branches"
        );
        const options = response.data.Data.branches.map((branch) => ({
          value: branch.id,
          label: branch.name,
        }));
        setBranchOptions(options);
      } catch (error) {
        console.error("Failed to fetch branches", error);
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://food-delivery-api-n6as.onrender.com/v1/products"
        );
        const options = response.data.Data.products.map((prod) => ({
          value: prod.id,
          label: prod.name,
          category_id: prod.category_id,
          photo: prod.photo,
          name: prod.name,
          desc: prod.description,
          price: prod.sale_price,
        }));
        setProdOptions(options);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://food-delivery-api-n6as.onrender.com/v1/categories"
        );
        const options = response.data.Data.category.map((cat) => ({
          value: cat.id,
          label: cat.name,
          photo: cat.photo,
        }));
        setCategories(options);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (field, value) => {
    setOrderDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProductChange = (productId) => {
    setOrderDetails((prevState) => ({
      ...prevState,
      products: [...prevState.products, { id: productId, quantity: 1 }],
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/order",
        orderDetails
      );
      alert("Order created successfully!");
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  const filteredProdOptions = selectedCategory
    ? prodOptions.filter((prod) => prod.category_id === selectedCategory)
    : prodOptions;

  return (
    <>
      <Header
        title={
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <CloseIcon fontSize={"14px"} />
            Список товаров
          </Box>
        }
        headerBtn1={
          <Select
            options={branchOptions}
            placeholder="Выберите филиал"
            onChange={(option) => handleInputChange("branch_id", option.value)}
          />
        }
        headerBtn2={
          <Select
            options={[{ value: "предзаказ", label: "Pre-order" }]}
            placeholder="Выберите тип заказа"
            onChange={(option) => handleInputChange("order_type", option.value)}
          />
        }
      />
      <Box className={s.orders}>
        <Box className={s.orders__left}>
          <h2 className={s.orders__title}>Категории</h2>
          <Box className={s.orders__items}>
            {categories.map((category) => (
              <Box
                key={category.value}
                className={`${s.orders__cat} ${
                  selectedCategory === category.value ? s.orders__active : ""
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                <img src={category.photo} alt={category.label} />
                <h2>{category.label}</h2>
              </Box>
            ))}
          </Box>
        </Box>

        <div className={s.form}>
          {filteredProdOptions.map((product, index) => (
            <Box key={index} className={s.orders__product}>
              <Box className={s.orders__prod_imh}>
                <img src={product.photo} alt="" />
              </Box>
              <Box className={s.orders__desc}>
                <p>{product.label}</p>
                <p className={s.orders_button}>{product.desc}</p>
              </Box>
              <Box className={s.orders__price}>
                <p className={s.orders_button}>{product.price} сум</p>
                <button
                  key={product.value}
                  onClick={() => handleProductChange(product.value)}
                >
                  Добавить
                </button>
              </Box>
            </Box>
          ))}
        </div>
        <button className={s.submit_button} onClick={handleSubmit}>
          Create Order
        </button>
      </Box>
    </>
  );
};

export default OrdersAdd;
