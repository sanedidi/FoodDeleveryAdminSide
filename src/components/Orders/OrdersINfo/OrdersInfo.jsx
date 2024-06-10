import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Header, CustomBtn, Link } from "public/imports";
import { useGetOrderByIdService } from "services/orders.service";
import s from "./OrdersInfo.module.scss";
const OrdersInfo = () => {
  const { id } = useParams();
  const { data: orderData } = useGetOrderByIdService(id);

  return (
    <>
      <Header
        title={`Информация о заказе - Номер: ${
          orderData?.Data.order_number || ""
        }`}
        headerBtn1={
          <CustomBtn
            BgColor={"transparent"}
            BtnBorder={"1px solid red"}
            BtnContent={
              <Link
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                to={"/admin/orders"}
              >
                <CloseIcon color={"red"} />
                Закрыть
              </Link>
            }
          />
        }
      />
      <Box className={s.orders}>
        <Box className={s.orders__wrapper}>
          {orderData?.Data ? (
            <Box className={s.orders__data}>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}>Статус</h2>
                <Box className={s.orders__list}>
                  {/* <ul>
                    <li className={s.orders__li}>
                      {orderData?.Data.created_at}-Заказ начат
                    </li> */}
                  <li
                    style={{ textTransform: "uppercase" }}
                    className={s.orders__li}
                  >
                    {orderData?.Data.status}-Заказ получен в Вендор
                  </li>
                  {/* <li className={s.orders__li}>
                      {orderData?.Data.status}-Заказ подтвержден
                    </li>
                  </ul>
                  <ul>
                    <li className={s.orders__li}>
                      {orderData?.Data.created_at}-Заказ начат
                    </li>
                    <li className={s.orders__li}>
                      {orderData?.Data.order_time}-Заказ получен в ПБО
                    </li>
                    <li className={s.orders__li}>
                      {orderData?.Data.status}-Заказ подтвержден
                    </li>
                  </ul> */}
                </Box>
              </Box>
              <Box className={s.orders__items}>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Создан</h2>
                  <li className={s.orders__li}>{orderData?.Data.created_at}</li>
                </Box>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>{orderData.Data.order_type}</h2>
                  <li className={s.orders__li}>{orderData?.Data.delivery_time}</li>
                </Box>
              </Box>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Оплата </h2>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={s.orders__li}
                >
                  {" "}
                  {orderData?.Data?.payment_type}
                </p>
              </Box>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Клиент</h2>
                <Box className={s.orders__box}>
                  <Box className={s.orders__ul}>
                    <li className={s.orders__li}>
                      {orderData?.Data?.customer_name}
                    </li>
                    <p className={s.orders__li}>
                      {orderData?.Data?.customer_phone}
                    </p>
                  </Box>
                  <Box className={s.orders__ul}>
                    <li className={s.orders__li}>
                      {orderData?.Data?.customer_name}
                    </li>
                    <p className={s.orders__li}>{orderData?.Data?.phone}</p>
                  </Box>
                </Box>
              </Box>
             
              <Box className={s.orders__items}>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Ресторан</h2>
                  <li
                    style={{ textTransform: "uppercase" }}
                    className={s.orders__li}
                  >
                    {orderData?.Data.BranchData.address}
                  </li>
                </Box>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Тип заказа</h2>
                  <li
                    style={{ textTransform: "uppercase" }}
                    className={s.orders__li}
                  >
                    {orderData?.Data?.order_type}
                  </li>
                </Box>
              </Box>
             
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Позиции </h2>
                {orderData?.Data?.quantity}
              </Box>
            </Box>
          ) : (
            <p>Данные о заказе не найдены</p>
          )}
        </Box>
      </Box>
    </>
  );
};

export default OrdersInfo;
