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
                  <ul>
                    <li className={s.orders__li}>
                      {orderData?.Data.created_at}-Заказ начат
                    </li>
                    <li className={s.orders__li}>
                      {orderData?.Data.order_time}-Заказ получен в Вендор
                    </li>
                    <li className={s.orders__li}>
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
                  </ul>
                </Box>
              </Box>
              <Box className={s.orders__items}>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Создан</h2>
                  <li className={s.orders__li}>{orderData?.Data.created_at}</li>
                </Box>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Самовывоз</h2>
                  <li className={s.orders__li}>{orderData?.Data.created_at}</li>
                </Box>
              </Box>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Клиент</h2>
                <Box className={s.orders__box}>
                  <Box className={s.orders__ul}>
                    <li className={s.orders__li}>
                      {orderData?.Data?.CustomerData?.full_name}
                    </li>
                    <p className={s.orders__li}>
                      {orderData?.Data?.CustomerData?.phone}
                    </p>
                  </Box>
                  <Box className={s.orders__ul}>
                    <li className={s.orders__li}>
                      {orderData?.Data?.CustomerData?.full_name}
                    </li>
                    <p className={s.orders__li}>
                      {orderData?.Data?.CustomerData?.phone}
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className={s.orders__items}>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Ресторан</h2>
                  <li className={s.orders__li}>
                    {orderData?.Data.BranchData.address}
                  </li>
                </Box>
                <Box className={s.orders__item}>
                  <h2 className={s.orders__title}>Источник</h2>
                  <li className={s.orders__li}>{orderData?.Data.order_type}</li>
                </Box>
              </Box>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Оплата </h2>
                <p>????????????</p>
              </Box>
              <Box className={s.orders__status}>
                <h2 className={s.orders__title}> Позиции </h2>
                <p>????????????</p>
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
