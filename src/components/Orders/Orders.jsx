import { SearchIcon } from "@chakra-ui/icons";
import { Header } from "components/Header/Header";
import useOrderProps from "modules/Admin/Orders/useOrderProps";
import {
  Box,
  CustomBtn,
  CustomInput,
  FilterIcon,
  Link,
  PlusIcon,
  UnderHeader,
} from "public/imports";
import React, { useState } from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
const Orders = () => {
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime12h1, setDateTime12h1] = useState(null);
  const [datetime24h, setDateTime24h] = useState(null);
  const [time, setTime] = useState(null);

  const { getOrder } = useOrderProps();
  console.log(getOrder);

  return (
    <>
      <Header
        title={"Заказы"}
        headerBtn2={
          <>
            <CustomBtn
              BgColor={"blue"}
              BtnContent={
                <>
                  {" "}
                  <Link
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "20px",
                    }}
                    to={"/"}
                  >
                    {" "}
                    <PlusIcon /> Создать заказ
                  </Link>{" "}
                </>
              }
            />
          </>
        }
      />
      <UnderHeader
        firstItem={
          <>
            {" "}
            <CustomInput
              InputIcon={<SearchIcon color={"blue"} />}
              InputPlaceHolder={"Поиск..."}
            />{" "}
          </>
        }
        first1Item={
          <>
            <Calendar
              className={s.orders__calendar}
              id="calendar-12h"
              value={datetime12h}
              onChange={(e) => setDateTime12h(e.value)}
              showTime
              showIcon
              hourFormat="12"
              placeholder="Выберите дату..."
            />
          </>
        }
        first2Item={
          <>
            <Calendar
              className={s.orders__calendar}
              id="calendar-12h"
              value={datetime12h1}
              onChange={(e) => setDateTime12h1(e.value)}
              showTime
              showIcon
              hourFormat="12"
              placeholder="Выберите дату..."
            />
          </>
        }
        secondItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <FilterIcon />
                <p style={{ color: "#000", fontWeight: "500" }}>Фильтр</p>
              </Box>
            }
          />
        }
      />
    </>
  );
};

export default Orders;
