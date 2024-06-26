import React from "react";
import s from "./OrdersAdd.module.scss";
import {
  Box,
  CustomBtn,
  CustomInput,
  Header,
  Link,
  Select,
  Textarea,
  Toaster,
} from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";
import DatePicker from "react-multi-date-picker";
import useOrdersAddProps from "./useOrdersAddProps";
import { CLickIcon, PaymeIcon } from "components/SvgComponents/SvgComponents";
import free from "assets/img/free.png";
import cash from "assets/img/cash.png";
export const OrdersAdd = () => {
  const {
    branchOptions,
    prodOptions,
    categories,
    selectedCategory,
    setSelectedCategory,
    totalAmount,
    orderDetails,
    handleInputChange,
    handleProductChange,
    handleSubmit,
  } = useOrdersAddProps();

  const filteredProdOptions = selectedCategory
    ? prodOptions.filter((prod) => prod.category_id === selectedCategory)
    : prodOptions;

  const orderedProducts = orderDetails.products.filter(
    (product) => product.quantity > 0
  );

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 0) {
      handleProductChange(
        id,
        quantity -
          orderDetails.products.find((product) => product.id === id).quantity
      );
    }
  };

  const handleDateChange = (date) => {
    handleInputChange("delivery_time", date);
  };

  return (
    <>
      <Toaster />
      <Header
        title={
          <Link to={"/admin/orders"} className={s.orders__header}>
            <CloseIcon fontSize={"14px"} />
            <p to={"/admin/orders"}>Список товаров</p>
          </Link>
        }
        headerBtn1={
          <Select
            options={branchOptions}
            placeholder="Выберите Филлиал"
            onChange={(option) => handleInputChange("branch_id", option.value)}
          />
        }
        headerBtn2={
          <CustomInput disabled={true} InputPlaceHolder="Самовызов" />
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
              <Box
                onClick={() => handleProductChange(product.value, 1)}
                key={index}
                className={s.orders__product}
              >
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
                  <button>Добавить</button>
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
                    onChange={(e) => {
                      let phoneNumber = e.target.value;
                      if (!phoneNumber.startsWith("+998")) {
                        phoneNumber =
                          "+998" + phoneNumber.replace(/^\+?998?/, "");
                      }
                      handleInputChange("customer_phone", phoneNumber);
                    }}
                  />
                </Box>
                <Box className={s.orders__item}>
                  <input
                    className={s.orders__time}
                    value={orderDetails.delivery_time}
                    onChange={(e) =>
                      handleInputChange("delivery_time", e.target.value)
                    }
                    type="datetime-local"
                  />
                </Box>
              </Box>
            </Box>
            <h2 className={s.orders__client_title}>Заказ инфо</h2>
            <Box className={s.orders__ordered}>
              {orderedProducts.length > 0 ? (
                orderedProducts.map((product, index) => (
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
                        className={s.orders__add_btn}
                        onClick={() => handleProductChange(product.id, -1)}
                      >
                        -
                      </button>
                      <input
                        className={s.orders__input}
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(product.id, e.target.value)
                        }
                      />
                      <button
                        className={s.orders__add_btn}
                        onClick={() => handleProductChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <Box className={s.orders__ordered_info}>
                  Выберите продукт для заказа
                </Box>
              )}
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
                  orderDetails.payment_type === "наличные" ? s.active : ""
                }
                onClick={() => handleInputChange("payment_type", "наличные")}
              >
                <img src={cash} alt="" />
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
            <CustomBtn
              BgColor={"blue"}
              BtnContent={"Создать заказ"}
              Onclick={handleSubmit}
              type={"button"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrdersAdd;
