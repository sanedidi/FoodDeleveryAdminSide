
import React, { useEffect, useState } from "react";
import s from "./OrdersHall.module.scss";
import { Box, CustomBtn, CustomInput, Header, Select, Textarea, Toaster, toast } from "public/imports";
import { CloseIcon } from "@chakra-ui/icons";
import { Calendar } from "primereact/calendar";
import { CLickIcon, PaymeIcon } from "components/SvgComponents/SvgComponents";
import free from "assets/img/free.png";
import useOrdersHallProps from "./useOrdersHallProps";

export const OrdersHall = () => {
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
  } = useOrdersHallProps();

  const filteredProdOptions = selectedCategory
    ? prodOptions.filter((prod) => prod.category_id === selectedCategory)
    : prodOptions;

  const orderedProducts = orderDetails.products.filter(
    (product) => product.quantity > 0
  );

  return (
    <>
    <Toaster/>
      <Header
        title={
          <Box display={"flex"} alignItems={"center"} gap={"15px"}>
            <CloseIcon fontSize={"14px"} />
            Список товаров
          </Box>
        }
        headerBtn2={
        <>
         <Select
            options={branchOptions}
            placeholder="Выберите филиал"
            onChange={(option) => handleInputChange("branch_id", option.value)}
          />
        </>
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

export default OrdersHall;
