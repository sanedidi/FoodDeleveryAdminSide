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
import { BarChart } from "@mui/x-charts/BarChart";
import { subDays, subMonths, format } from "date-fns";
import useDashboardProps from "./useDashboardProps";

const Dashboard = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [searchParams, setSearchParams] = useState({ search: "" });
  const [orderValues, setOrderValues] = useState([]);
  const [orderNumbers, setOrderNumbers] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const [period, setPeriod] = useState("12m"); 

  const { getStats, orders, isLoading, error, filterOrdersByMonth, filterOrdersByPeriod, filterOrdersByValue } = useDashboardProps();

  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
  };

  const handleMonthFilter = (month) => {
    filterOrdersByMonth(month);
  };

  const handlePeriodChange = (period) => {
    filterOrdersByPeriod(period);
  };

  const handleValueFilter = (value) => {
    filterOrdersByValue(value);
  };

  useEffect(() => {
    if (orders.length > 0) {
      const orderValues = orders.map((order) => order.total_price || 0);
      const orderNumbers = orders.map((order) => order.order_number || 0);
      const xLabels = orders.map((order, index) => `Месяц ${index + 1}`);

      setOrderValues(orderValues);
      setOrderNumbers(orderNumbers);
      setXLabels(xLabels);
    }
  }, [orders]);

  const totalOrders = orderNumbers.length;
  const totalRevenue = orderValues.reduce((acc, curr) => acc + curr, 0);

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
      <Box className={s.month__selector}>
        {Array.from({ length: 12 }, (_, index) => (
          <button key={index} onClick={() => handleMonthFilter(index + 1)}>
            Месяц {index + 1}
          </button>
        ))}
      </Box>
      <Box className={s.period__selector}>
        <button onClick={() => handlePeriodChange("12m")}>12 Месяцев</button>
        <button onClick={() => handlePeriodChange("6m")}>6 Месяцев</button>
        <button onClick={() => handlePeriodChange("30d")}>30 Дней</button>
      </Box>
      <Box className={s.value__selector}>
        {Array.from({ length: 5 }, (_, index) => (
          <button key={index} onClick={() => handleValueFilter((index + 1) * 50000)}>
            {(index + 1) * 50000}
          </button>
        ))}
      </Box>
      <Box className={s.dash__wrapper}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <BarChart
            width={500}
            height={300}
            series={[
              {
                data: orderValues,
                label: "Значения заказов",
                id: "orderValuesId",
                yAxisKey: "leftAxisId",
              },
              {
                data: orderNumbers,
                label: "Номера заказов",
                id: "orderNumbersId",
                yAxisKey: "rightAxisId",
              },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
            rightAxis="rightAxisId"
          />
        )}
      </Box>
      <Box className={s.summary}>
        <p>Общее количество заказов: {totalOrders}</p>
        <p>Общая прибыль: {totalRevenue}</p>
      </Box>
    </>
  );
};

export default Dashboard;
