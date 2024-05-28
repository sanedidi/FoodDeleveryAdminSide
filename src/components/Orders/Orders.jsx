import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  CustomBtn,
  CustomInput,
  CustomTable,
  FilterIcon,
  Link,
  PlusIcon,
  UnderHeader,
  React,
  Header,
} from "public/imports";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";
import CustomTabs from "components/Custom/CustomTabs/CustomTabs";

const Orders = () => {
  const {
    data,
    columns,
    setSearchQuery,
    activeTab,
    currentPage,
    datetime12h,
    datetime12h1,
    pageSize,
    paginationData,
    setActiveTab,
    setCurrentPage,
    setDateTime12h,
    setDateTime12h1,
    setPageSize,
    skeleton,
    totalOrders,
  } = useOrdersProps();

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
      <Box className={s.orders}>
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
          <CustomTabs
            tabs={{
              tabLabels: [
                <Box className={s.orders__title}>
                  <h2>Все заказы</h2>
                  <p>{totalOrders}</p>
                </Box>,
                <>Новыe</>,
              ],
              tabContents: [
                <Box className={s.orders__tabs}>
                  <CustomTable columns={columns} data={data} />
                </Box>,
                <Box>skdml;,</Box>,
              ],
            }}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </Box>
      </Box>
    </>
  );
};

export default Orders;
