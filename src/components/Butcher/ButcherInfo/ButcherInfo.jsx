import React, { useState, useEffect } from "react";
import s from "./ButcherInfo.module.scss";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
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
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchButcherInfo("добавить");
    fetchButcherInfo("удалить");
  }, []); // Empty dependency array to fetch data once on mount

  const fetchButcherInfo = (status) => {
    request
      .get(
        `/meat_prices?limit=1000&butcher_id=${categoryId}&status=${encodeURIComponent(
          status
        )}`
      )
      .then((response) => {
        console.log(`Response for ${status}:`, response);
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
      })
      .finally(() => {
        setLoading(false); // Update loading state after fetch
      });
  };

  if (error) {
    return (
      <div>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</div>
    );
  }

  if (loading) {
    return <div>Загрузка...</div>;
  }

  const renderStockInfo = (info, title) => {
    if (!info || !info.meat_price || info.meat_price.length === 0) {
      return <div>Нет информации остатков для {title}</div>;
    }

    return (
      <Box className={s.orders}>
        <Box className={s.orders__wrapper}>
          <Box className={clsx(s.orders__items, s.noGrid)}>
            <Box width={"100%"} className={s.orders__item}>
              <h2 className={clsx(s.orders__title, s.noBorder)}>
                Общий остаток:{" "}
                {info.meat_price.reduce(
                  (sum, item) => (item?.ButcherData?.total_sum || 0),
                  0
                )}
              </h2>
            </Box>
          </Box>
          <Box className={s.orders__boxes}>
            <Box className={s.orders__sss}>
              <h2>{title}</h2>
              {info.meat_price.map((meatPrice, index) => (
                <div key={index} className={s.orders__box}>
                  <ul>
                    <li>
                      <span>Дата:</span> {meatPrice?.created_at}
                    </li>
                    <li>
                      <span>Остаток:</span> {meatPrice?.updated_balance}
                    </li>
                    <li>
                      <span>Цена за 1 кг:</span>{" "}
                      {meatPrice?.ButcherData?.price_per_kilo} сум
                    </li>
                  </ul>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Toaster />
      <Header
        title={`Информация о
      ${addStockInfo?.meat_price?.[0]?.ButcherData?.full_name || "not found"}
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
