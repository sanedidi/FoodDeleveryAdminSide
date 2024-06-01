import React, { useEffect, useState } from "react";
import s from "./OrdersAdd.module.scss";
import { Box, Header, Textarea } from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";
import Select from "react-select";
import axios from "axios";

export const OrdersAdd = () => {
  const [branchOptions, setBranchOptions] = useState([]);
  const [prodOptions, setProdOptions] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    branch_id: "",
    comment: "",
    customer_name: "",
    customer_phone: "",
    delivery_time: "",
    order_type: "",
    payment_type: "",
    products: [{ id: "", quantity: 1 }],
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
          label: prod.articul,
        }));
        setProdOptions(options);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (field, value) => {
    setOrderDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...orderDetails.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setOrderDetails((prevState) => ({
      ...prevState,
      products: newProducts,
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

  return (
    <>
      <Header
        title={
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <CloseIcon fontSize={"14px"} />
            Список товаров
          </Box>
        }
        headerBtn1={<></>}
        headerBtn2={<></>}
      />

      <div className={s.form}>
        <Select
          options={branchOptions}
          placeholder="Select Branch"
          onChange={(option) => handleInputChange("branch_id", option.value)}
        />
        <Select
          options={prodOptions}
          placeholder="Select Product"
          onChange={(option) => handleProductChange(0, "id", option.value)}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={orderDetails.customer_name}
          onChange={(e) => handleInputChange("customer_name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Phone"
          value={orderDetails.customer_phone}
          onChange={(e) => handleInputChange("customer_phone", e.target.value)}
        />
        <Select
          options={[{ value: "Later", label: "Later" }]}
          placeholder="Delivery Time"
          onChange={(option) =>
            handleInputChange("delivery_time", option.value)
          }
        />
        <Select
          options={[{ value: "предзаказ", label: "Pre-order" }]}
          placeholder="Order Type"
          onChange={(option) => handleInputChange("order_type", option.value)}
        />
        <Select
          options={[
            { value: "payme", label: "PayMe" },
            { value: "click", label: "Click" },
          ]}
          placeholder="Payment Type"
          onChange={(option) => handleInputChange("payment_type", option.value)}
        />
        <Textarea
          placeholder="Comment"
          value={orderDetails.comment}
          onChange={(e) => handleInputChange("comment", e.target.value)}
        />
        <Select
          options={[
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
          ]}
          placeholder="Product Quantity"
          onChange={(option) =>
            handleProductChange(0, "quantity", option.value)
          }
        />
        <button onClick={handleSubmit}>Create Order</button>
      </div>
    </>
  );
};

export default OrdersAdd;
