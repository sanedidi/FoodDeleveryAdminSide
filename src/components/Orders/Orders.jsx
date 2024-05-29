import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  CustomBtn,
  CustomInput,
  CustomTable,
  FilterIcon,
  Header,
  Link,
  PlusIcon,
  UnderHeader,
} from "public/imports";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";
import CustomTabs from "components/Custom/CustomTabs/CustomTabs";
import { useState } from "react";
import Select from "react-select";

const Orders = () => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
    value: "В зал",
    label: "В зал",
  });
  const [showCalendars, setShowCalendars] = useState(false); // Добавлено состояние для управления видимостью календарей

  const {
    data,
    columns,
    setSearchQuery,
    activeTab,
    setActiveTab,
    datetime12h,
    datetime12h1,
    setDateTime12h,
    setDateTime12h1,
    totalOrders,
  } = useOrdersProps();

  const deliveryOptions = [
    { value: "В зал", label: "В зал" },
    { value: "Доставка", label: "Доставка" },
    { value: "Предзаказ", label: "Предзаказ" },
  ];

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };

  return (
    <>
      <Header
        title={"Заказы"}
        headerBtn2={
          <Link to={"/"} className="header_btn1">
            <PlusIcon /> Создать заказ
          </Link>
        }
      />
      <Box className={s.orders}>
        <UnderHeader
          firstItem={
            <CustomInput
              InputIcon={<SearchIcon color={"blue"} />}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputPlaceHolder={"Поиск по имени клиента"}
            />
          }
          first1Item={
            showCalendars && ( // Показывать календарь только если showCalendars === true
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
            )
          }
          first2Item={
            showCalendars && ( // Показывать календарь только если showCalendars === true
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
            )
          }
          secondItem={
            <CustomBtn
              BgColor={"white"}
              type={"button"}
              BtnBorder={"1px solid #E5E9EB"}
              Onclick={() => setShowCalendars(!showCalendars)}
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
          <CustomTabs
            tabs={{
              tabLabels: [
                <Box className={s.orders__title}>
                  <h2>Все заказы</h2>
                  <p>{totalOrders}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Новые</h2>
                  <p>{totalOrders}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Завершен</h2>
                  <p>{totalOrders}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Отменен</h2>
                </Box>,
              ],
              tabContents: [
                <Box className={s.orders__tabs}>
                  <CustomTable columns={columns} data={data} />
                </Box>,
                <Box>skdml;,</Box>,
              ],
            }}
            ExtraItem={
              <Select
                className={s.orders__main}
                value={selectedDeliveryOption}
                onChange={handleDeliveryOptionChange}
                options={deliveryOptions}
              />
            }
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </Box>
      </Box>
    </>
  );
};

export default Orders;
