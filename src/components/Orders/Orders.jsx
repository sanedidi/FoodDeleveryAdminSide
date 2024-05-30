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
import { useState } from "react";
import Select from "react-select";

const Orders = () => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
    value: "Предзаказ",
    label: "Предзаказ",
  });
  const [showCalendars, setShowCalendars] = useState(false);
  const handleClearInputs = () => {
    setDateTime12h(null);
    setDateTime12h1(null);
  };

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
    isOpenModal3,
    onCloseModal3,
    onOpenModal1,
    isOpenModal1,
    onCloseModal1,
    setSelectedDeliveryOptionInHook,
  } = useOrdersProps(selectedDeliveryOption);

  const deliveryOptions = [
    { value: "В зал", label: "В зал" },
    { value: "Доставка", label: "Доставка" },
    { value: "Предзаказ", label: "Предзаказ" },
  ];

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
    setSelectedDeliveryOptionInHook(option);
  };
  const handleCalendarChange = (value) => {
    setDateTime12h(value);
    setShowCalendars(false);

    setSelectedOrderType(null);
  };
  const filterByDate = (order) => {
    if (!datetime12h || !datetime12h1) return true; // Если даты не выбраны, пропустить фильтрацию
    const orderDate = new Date(order.order_time);
    return orderDate >= datetime12h && orderDate <= datetime12h1;
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

      {/* #############################################MODALS################################################# */}
      <CustomModal
        isOpenModal={isOpenModal1}
        onCloseModal={onCloseModal1}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            {/* <TrashIcon /> */}????????????
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            ИНФО
          </Box>
        }
        secondaryBtnText={<Box onClick={onCloseModal1}>Закрыть</Box>}
        ModalBtnBgColor={"blue"}
        // primaryBtnText="Да"
        onPrimaryBtnClick={() => {
          // handleDeleteCategory(selectedCategoryId);
        }}
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
          // handleDeleteCategory(selectedCategoryId);
          onCloseModal2();
        }}
      />
      <CustomModal
        isOpenModal={isOpenModal3}
        onCloseModal={onCloseModal3}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            {/* <TrashIcon /> */}????????????
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            ИНФО
          </Box>
        }
        secondaryBtnText={<Box onClick={onCloseModal3}>Закрыть</Box>}
        ModalBtnBgColor={"blue"}
        // primaryBtnText="Да"
        onPrimaryBtnClick={() => {
          // handleDeleteCategory(selectedCategoryId);
        }}
      />
    </>
  );
};

export default Orders;
