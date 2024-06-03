import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./OrdersAdd.module.scss";
import { Box, CustomInput, Header, Select, Textarea } from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";
import { Calendar } from "primereact/calendar";
import { CLickIcon, PaymeIcon } from "components/SvgComponents/SvgComponents";
import free from "assets/img/free.png";
export const OrdersAdd = () => {
  const [branchOptions, setBranchOptions] = useState([]);
  const [prodOptions, setProdOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderDetails, setOrderDetails] = useState({
    branch_id: "",
    comment: "",
    customer_name: "",
    customer_phone: "",
    delivery_time: null,
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

  const handleProductChange = (productId, quantity) => {
    const existingProductIndex = orderDetails.products.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...orderDetails.products];
      updatedProducts[existingProductIndex].quantity += quantity;
      if (updatedProducts[existingProductIndex].quantity < 0)
        updatedProducts[existingProductIndex].quantity = 0;
      setOrderDetails((prevState) => ({
        ...prevState,
        products: updatedProducts,
      }));
    } else {
      setOrderDetails((prevState) => ({
        ...prevState,
        products: [...prevState.products, { id: productId, quantity }],
      }));
    }

    // Вычисляем общую сумму заказа
    const productPrice = prodOptions.find(
      (prod) => prod.value === productId
    ).price;
    const totalPriceChange = productPrice * quantity;
    setTotalAmount((prevTotalAmount) => prevTotalAmount + totalPriceChange);
  };

  const handleSubmit = async () => {
    const hasProducts = orderDetails.products.some(
      (product) => product.quantity > 0
    );

    if (!hasProducts) {
      alert("Пожалуйста, выберите продукты для заказа.");
      return;
    }

    try {
      await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/order",
        orderDetails
      );
      alert("Заказ успешно создан!");
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

        <Box className={s.orders__right}>
          <Box className={s.orders__products}>
            {filteredProdOptions.map((product, index) => (
              <Box key={index} className={s.orders__product}>
                <Box className={s.orders__prod_imh}>
                  <img src={product.photo} alt="" />
                </Box>
                <Box className={s.orders__desc}>
                  <p className={s.orders__prod_title}>{product.label}</p>
                  <p className={s.orders_button}>{product.desc}</p>
                </Box>
                <Box className={s.orders__price}>
                  <p className={s.orders__button}>
                    <span>{product.price}</span> сум
                  </p>
                  <button onClick={() => handleProductChange(product.value, 1)}>
                    Добавить
                  </button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={s.orders__info}>
            <h2 className={s.orders__client_title}>Клиент инфо</h2>
            <Box className={s.orders__client}>
              <Box className={s.orders__main_info}>
                <Box className={s.orders_item}>
                  <h2>Имя</h2>
                  <CustomInput
                    type="text"
                    InputPlaceHolder="Имя клиента"
                    value={orderDetails.customer_name}
                    onChange={(e) =>
                      handleInputChange("customer_name", e.target.value)
                    }
                  />
                </Box>
                <Box className={s.orders_item}>
                  <h2>Номер телефона</h2>
                  <CustomInput
                    type="text"
                    InputPlaceHolder="Телефон номер клиента"
                    value={orderDetails.customer_phone}
                    onChange={(e) =>
                      handleInputChange("customer_phone", e.target.value)
                    }
                  />
                </Box>
                <Box className={s.orders__item}>
                  <Calendar
                    value={orderDetails.delivery_time}
                    onChange={(e) =>
                      handleInputChange("delivery_time", e.value)
                    }
                    showTime
                    className={s.orders__calendar}
                    dateFormat="dd.mm.yy"
                    showIcon
                    hourFormat="24"
                    placeholder="Выберите дату"
                  />
                </Box>
              </Box>
            </Box>
            <h2 className={s.orders__client_title}>Заказ инфо</h2>
            <Box className={s.orders__ordered}>
              {orderDetails.products
                .filter((product) => product.quantity > 0)
                .map((product, index) => (
                  <div key={index} className={s.orders__productItem}>
                    <Box className={s.orders__prod_img}>
                      <img
                        src={
                          prodOptions.find((prod) => prod.value === product.id)
                            .photo
                        }
                        alt=""
                      />
                    </Box>
                    <Box className={s.orders__ordered_info}>
                      <p className={s.orders__label}>
                        {
                          prodOptions.find((prod) => prod.value === product.id)
                            .label
                        }
                      </p>
                      <p className={s.orders__desc}>
                        {
                          prodOptions.find((prod) => prod.value === product.id)
                            .desc
                        }
                      </p>
                      <p className={s.orders__label}>
                        {
                          prodOptions.find((prod) => prod.value === product.id)
                            .price
                        }{" "}
                        сум
                      </p>
                    </Box>
                    <div className={s.quantityControl}>
                      <button
                        onClick={() => handleProductChange(product.id, -1)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() => handleProductChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
            </Box>

            <Box className={s.orders__total}>
              <p>
                Общяя сумма: <span> {totalAmount} UZS</span>
              </p>
            </Box>

            <Box className={s.paymentButtons}>
              <button
                className={
                  orderDetails.payment_type === "click" ? s.active : ""
                }
                onClick={() => handleInputChange("payment_type", "click")}
              >
                <CLickIcon />
              </button>
              <button
                className={
                  orderDetails.payment_type === "payme" ? s.active : ""
                }
                onClick={() => handleInputChange("payment_type", "payme")}
              >
                <PaymeIcon />
              </button>

              <button
                className={orderDetails.payment_type === "free" ? s.active : ""}
                onClick={() => handleInputChange("payment_type", "free")}
              >
                <img src={free} alt="" />
              </button>
            </Box>
            <Box>
              <Textarea
                placeholder="Comment"
                value={orderDetails.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <button className={s.submit_button} onClick={handleSubmit}>
          Создать заказ
        </button>
      </Box>
    </>
  );
};

export default OrdersAdd;
