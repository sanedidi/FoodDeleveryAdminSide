import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
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
  Toaster,
  TrashIcon,
  UnderHeader,
  toast,
  useSearchParams,
} from "public/imports";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";
import CustomTabs from "components/Custom/CustomTabs/CustomTabs";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon } from "components/SvgComponents/SvgComponents";
import request from "services/httpRequest";

const Orders = () => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
    value: "предзаказ",
    label: "Предзаказ",
  });
  const [showCalendars, setShowCalendars] = useState(false);

  const {
    data,
    columns,
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
    paginationData,
    currentPage,
    getOrders,
    pageSize,
    onCloseModal1,
    cancelOrderId,
    selectedOrderType,
    setSelectedOrderType,
  } = useOrdersProps();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";

  const { current, totalPages } = paginationData;

  useEffect(() => {
    getOrders(page, limit, search, selectedOrderType);
  }, [page, limit, search, selectedOrderType]); //pagination

  const handlePageChange = (event) => {
    setSearchParams({ page: event.selected + 1, limit, search });
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await request.put('order_status', {
        id: orderId, status 
      });
  
      if (response.status === 200) {
        toast.success('Order status successfully updated');
        getOrders(page, limit, search); 
      } else {
        toast.error('Failed to update order status');
      }
    } catch (error) {
      toast.error('An error occurred while updating the order status');
    }
  };
  const orderTypeOptions = [
    { value: 'предзаказ', label: 'Предзаказ' },
    { value: 'в зал', label: 'в зал' },
  ];
  

  const handleCancelOrder = async () => {
    if (cancelOrderId) {
       updateOrderStatus(cancelOrderId, "отменен");
      onCloseModal2();
    }
  };

  return (
    <>
   <Toaster />
      <Header
        title={"Заказы"}
        headerBtn2={
          <Link to={"/admin/orders/add"} className="header_btn1">
            <PlusIcon /> Создать заказ
          </Link>
        }
      />
      <Box className={s.orders}>
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
                  <p></p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Новые</h2>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Завершен</h2>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Отмененные</h2>
                </Box>,
              ],
              tabContents: [
                <Box className={s.orders__tabs}>
                  <CustomTable columns={columns} data={data} />
                </Box>,
                <Box className={s.orders__new}>gg</Box>,
                <Box className={s.orders__new}>gg</Box>,
                <Box>gg</Box>,
              ],
            }}
            ExtraItem={
              <Select
              options={orderTypeOptions}
              value={orderTypeOptions.find(option => option.value === selectedOrderType)}
              onChange={(selectedOption) => {
                setSelectedOrderType(selectedOption.value);
                setSearchParams({ order_type: selectedOption.value });
              }}
              placeholder="Тип заказа"
            />
            }
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <ReactPaginate
            previousLabel={<ChevronLeftIcon />}
            nextLabel={<ChevronRightIcon />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            current={current}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"activePagination"}
            className={s.products_pag}
            initialPage={page - 1}
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
        onPrimaryBtnClick={handleCancelOrder}
      />
    </>
  );
};

export default Orders;
