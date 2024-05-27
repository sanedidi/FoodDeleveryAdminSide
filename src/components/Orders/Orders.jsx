import { SearchIcon } from "@chakra-ui/icons";
import { Header } from "components/Header/Header";
import useOrderProps from "modules/Admin/Orders/useOrderProps";
import { Calendar } from "primereact/calendar";
import dayjs from 'dayjs';

import {
  CustomBtn,
  CustomInput,
  Link,
  PlusIcon,
  UnderHeader,
} from "public/imports";
import React, { useState } from "react";

const Orders = () => {
  const { getOrder } = useOrderProps();
  console.log(getOrder);
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime24h, setDateTime24h] = useState(null);
  const [time, setTime] = useState(null);

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
     
          </>
        }
      />
   
    </>
  );
};

export default Orders;
