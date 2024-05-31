import React, { useState } from "react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  CustomBtn,
  CustomInput,
  CustomModal,
  CustomTable,
  FilterIcon,
  Header,
  Link,
  PlusIcon,
  TrashIcon,
  UnderHeader,
} from "public/imports";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";
import CustomTabs from "components/Custom/CustomTabs/CustomTabs";
import Select from "react-select";

const Orders = () => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
    value: "предзаказ",
    label: "Предзаказ",
  });
  const [showCalendars, setShowCalendars] = useState(false);

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
    isOpenModal2,
    onCloseModal2,
    isOpenModal1,
    onCloseModal1,
    setSelectedOrderType,
  } = useOrdersProps(selectedDeliveryOption);

  const newOrders = data.filter((order) => order.status === "новый");
  const endOrders = data.filter((order) => order.status === "завершен");

  const deliveryOptions = [
    { value: "В зал", label: "В зал" },
    { value: "Доставка", label: "Доставка" },
    { value: "предзаказ", label: "Предзаказ" },
  ];

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
    setSelectedOrderType(option);
  };

  const handleClearInputs = () => {
    setDateTime12h(null);
    setDateTime12h1(null);
  };

  const handleCalendarChange = (value) => {
    setDateTime12h(value);
    setShowCalendars(false);
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
            showCalendars && (
              <Box className={s.orders__select}>
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
              </Box>
            )
          }
          first2Item={
            showCalendars && (
              <Box className={s.orders__select}>
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
                <button onClick={handleClearInputs} className={s.orders__btn}>
                  Очистить
                </button>
              </Box>
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
                  <p>{newOrders.length}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Завершен</h2>
                  <p>{endOrders.length}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Отмененные</h2>
                </Box>,
              ],
              tabContents: [
                <Box className={s.orders__tabs}>
                  <CustomTable columns={columns} data={data} />
                </Box>,
                <Box className={s.orders__new}>
                  <CustomTable columns={columns} data={newOrders} />
                </Box>,
                <Box className={s.orders__new}>
                  <CustomTable columns={columns} data={endOrders} />
                </Box>,
                <Box>
                  <CustomTable columns={columns} data={endOrders} />
                </Box>,
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

      <CustomModal
        isOpenModal={isOpenModal1}
        onCloseModal={onCloseModal1}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            <TrashIcon />
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            ИНФО
          </Box>
        }
        secondaryBtnText={<Box onClick={onCloseModal1}>Закрыть</Box>}
        ModalBtnBgColor={"blue"}
      />
      <CustomModal
        isOpenModal={isOpenModal2}
        onCloseModal={onCloseModal2}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            <TrashIcon />
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            Вы уверены, что хотите отменить этот заказ?
          </Box>
        }
        secondaryBtnText={<Box>Нет</Box>}
        ModalBtnBgColor={"blue"}
        primaryBtnText="Да"
        onPrimaryBtnClick={() => {
          onCloseModal2();
        }}
      />
    </>
  );
};

export default Orders;
