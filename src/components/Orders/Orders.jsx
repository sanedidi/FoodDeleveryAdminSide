import { SearchIcon } from "@chakra-ui/icons";
import { Header } from "components/Header/Header";
import {
  Box,
  CustomBtn,
  CustomInput,
  CustomTable,
  FilterIcon,
  Link,
  PlusIcon,
  UnderHeader,
} from "public/imports";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";

const Orders = () => {
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime12h1, setDateTime12h1] = useState(null);

  const { data, columns, setSearchQuery } = useOrdersProps();

  return (
    <>
      <Header
        title={"Заказы"}
        headerBtn2={
          <CustomBtn
            BgColor={"blue"}
            BtnContent={
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "20px",
                }}
                to={"/"}
              >
                <PlusIcon /> Создать заказ
              </Link>
            }
          />
        }
      />
      <UnderHeader
        firstItem={
          <CustomInput
            InputIcon={<SearchIcon color={"blue"} />}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputPlaceHolder={"Поиск..."}
          />
        }
        first1Item={
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
        }
        first2Item={
          <Calendar
            className={s.orders__calendar}
            id="calendar-12h1"
            value={datetime12h1}
            onChange={(e) => setDateTime12h1(e.value)}
            showTime
            showIcon
            hourFormat="12"
            placeholder="Выберите дату..."
          />
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
      <Box className={s.orders__wrapper}>
        <CustomTable columns={columns} data={data} />
      </Box>
    </>
  );
};

export default Orders;
