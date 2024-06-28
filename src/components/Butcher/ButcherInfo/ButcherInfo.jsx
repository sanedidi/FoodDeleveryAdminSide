import React, { useState, useEffect } from "react";
import s from "./ButcherInfo.module.scss";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  CustomBtn,
  CustomInput,
  Header,
  Link,
  useParams,
} from "public/imports";
import request from "services/httpRequest";
import clsx from "clsx";

const ButcherInfo = () => {
  const { categoryId } = useParams();
  const [addStockInfo, setAddStockInfo] = useState(null);
  const [deleteStockInfo, setDeleteStockInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchButcherInfo("добавить");
    fetchButcherInfo("удалить");
  }, [categoryId]);

  const fetchButcherInfo = (status) => {
    request
      .get(
        `/meat_prices?butcher_id=${categoryId}&status=${encodeURIComponent(
          status
        )}`
      )
      .then((response) => {
        if (status === "добавить") {
          setAddStockInfo(response.data.Data);
        } else if (status === "удалить") {
          setDeleteStockInfo(response.data.Data);
        }
      })
      .catch((error) => {
        console.error(`Error fetching ${status} butcher info:`, error);
        setError(true);
        toast.error(`Failed to fetch ${status} butcher information`);
      });
  };

  if (error) {
    return (
      <div>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</div>
    );
  }

  if (!addStockInfo || !deleteStockInfo) {
    return <div>Загрузка...</div>;
  }

  const renderStockInfo = (info, title) => {
    const meatPrice = info?.meat_price[0];
    if (!meatPrice) {
      return <div>Нет информации остатков для {title}</div>;
    }

    return (
      <Box className={s.orders}>
        <Box className={s.orders__wrapper}>
          <Box className={s.orders__status}>
            <h2 className={clsx(s.orders__title, s.noBorder)}>
              Каталог:{" "}
              {meatPrice?.ButcherData?.CatalogData?.name || "not found"}
            </h2>
          </Box>
          <Box className={clsx(s.orders__items, s.noGrid)}>
            <Box width={"100%"} className={s.orders__item}>
              <h2 className={clsx(s.orders__title, s.noBorder)}>
                Общий остаток: {meatPrice?.remaining_balance}
              </h2>
            </Box>
          </Box>
          <Box className={s.orders__boxes}>
            <Box>
              <h2>{title}</h2>
              <div className={s.orders__box}>
                <ul>
                  <li>
                    <span>Дата:</span> {meatPrice?.created_at}
                  </li>
                  <li>
                    <span>Остаток:</span> {meatPrice?.remaining_balance}
                  </li>
                  <li>
                    <span>Общий остаток:</span>{" "}
                    {meatPrice?.ButcherData?.total_sum}
                  </li>
                  <li>
                    <span>Цена за 1 кг:</span>{" "}
                    {meatPrice?.ButcherData?.price_per_kilo}
                  </li>
                </ul>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  console.log(addStockInfo)
  return (
    <>
      <Toaster />
      <Header
       title={`Информация о
      ${  addStockInfo?.meat_price[0]?.ButcherData?.full_name || "not found"}
      `}
        headerBtn1={
          <Link
            to={"/admin/workers/butcher"}
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
      <div className={s.aa}>
        {renderStockInfo(addStockInfo, "Добавить остаток")}
        {renderStockInfo(deleteStockInfo, "Удалить остаток")}
      </div>
    </>
  );
};

export default ButcherInfo;
