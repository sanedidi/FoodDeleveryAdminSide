import React, { useState, useEffect } from "react";
import s from "./Dashboard.module.scss";
import {
  Box,
  CustomBtn,
  CustomInput,
  FilterIcon,
  Header,
  UnderHeader,
} from "public/imports";
import { SearchIcon } from "@chakra-ui/icons";
import { Calendar } from "primereact/calendar";
import useDashboardProps from "./useDashboardProps";

const Dashboard = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [searchParams, setSearchParams] = useState({ search: "" });
  const [orderNumbers, setOrderNumbers] = useState([]);

  const { stats } = useDashboardProps();
  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
  };

  // Filtering orders
  const canceledOrders = stats.filter(order => order.status === "отменен");
  const completedOrders = stats.filter(order => order.status === "завершен");
  const allOrders = stats; // Assuming stats contains all orders

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn2={
          <CustomBtn
            BtnContent={
              <p className={s.dash__btn}>
                {" "}
                <FilterIcon /> Фильтр{" "}
              </p>
            }
            BgColor={"white"}
            BtnBorder={"1px solid #e7e7e7"}
          />
        }
      />
      <UnderHeader
        firstItem={
          <CustomInput
            InputIcon={<SearchIcon color={"blue"} />}
            onChange={(e) => {
              setSearchParams({ search: e.target.value });
            }}
            InputPlaceHolder={"Поиск по имени клиента"}
          />
        }
        secondItem={
          <Box className={s.orders__select}>
            <Calendar
              value={selectedFromDate}
              onChange={(e) => setSelectedFromDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
          </Box>
        }
        thirdItem={
          <Box className={s.dash__select}>
            <Calendar
              value={selectedToDate}
              onChange={(e) => setSelectedToDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
            <button onClick={handleInputClear} className={s.orders__btn}>
              Очистить
            </button>
          </Box>
        }
      />

      <Box className={s.wrapper}>
        <h2>Отмененные заказы:</h2>
        {canceledOrders.map(order => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Created At: {order.created_at}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}

        <h2>Завершенные заказы:</h2>
        {completedOrders.map(order => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Created At: {order.created_at}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}

        <h2>Все заказы:</h2>
        {allOrders.map(order => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Created At: {order.created_at}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
