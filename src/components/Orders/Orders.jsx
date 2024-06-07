import React, { useEffect, useState } from "react";
import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
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
import {
  ChevronLeftIcon,
  PreOrderIcon,
  ZalIcon,
} from "components/SvgComponents/SvgComponents";
import request from "services/httpRequest";

const Orders = () => {
  const [showCalendars, setShowCalendars] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const {
    data,
    columns,
    activeTab,
    setActiveTab,
    onCloseModal2,
    isOpenModal1,
    paginationData,
    getOrders,
    onCloseModal1,
    cancelOrderId,
    closeOrderId,
    selectedOrderType,
    setSelectedOrderType,
    onOpenModal4,
    setOrderStatus,
    isOpenModal2,
    isOpenModal4,
    onCloseModal4,
  } = useOrdersProps();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";

  const { current, totalPages } = paginationData;
  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
  };

  useEffect(() => {
    getOrders(
      page,
      limit,
      search,
      selectedOrderType,
      selectedFromDate,
      selectedToDate
    );
  }, [
    page,
    limit,
    search,
    selectedOrderType,
    selectedFromDate,
    selectedToDate,
  ]);

  const handleTabChange = (newActiveTab) => {
    setActiveTab(newActiveTab);
    let status = "";
    switch (newActiveTab) {
      case 0:
        status = ""; 
        break;
      case 1:
        status = "новый"; 
        break;
      case 2:
        status = "завершен"; 
        break;
      case 3:
        status = "отменен"; 
        break;
      default:
        break;
    }
    setSearchParams({ status }); 
    setOrderStatus(status); // 
    getOrders(page, limit, search, selectedOrderType, selectedFromDate, selectedToDate, status); // Вызываем функцию для получения заказов с новым статусом
  };

  const handlePageChange = (event) => {
    setSearchParams({ page: event.selected + 1, limit, search, status: selectedOrderType }); // Обновляем параметры поиска
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await request.put("order_status", {
        id: orderId,
        status,
      });

      if (response.status === 200) {
        toast.success("Order status successfully updated");
        getOrders(page, limit, search);
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      toast.error("An error occurred while updating the order status");
    }
  };
  const orderTypeOptions = [
    { value: "предзаказ", label: "Предзаказ" },
    { value: "зал", label: "В зал" },
  ];

  const handleCancelOrder = async () => {
    if (cancelOrderId) {
      updateOrderStatus(cancelOrderId, "отменен");
      onCloseModal2();
    }
  };

  const handleEndOrder = async () => {
    if (closeOrderId) {
      updateOrderStatus(closeOrderId, "завершен");
      onCloseModal2();
    }
  };

  return (
    <>
      <Toaster />
      <Header
        title={"Заказы"}
        headerBtn2={
          <>
            <Link onClick={onOpenModal4} className="header_btn1">
              <PlusIcon /> Создать заказ
            </Link>
          </>
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
                  value={selectedFromDate}
                  onChange={(e) => setSelectedFromDate(e.value)}
                  showIcon={true}
                  dateFormat="dd.mm.yy"
                  placeholder="Выберите дату"
                />
              </Box>
            )
          }
          first2Item={
            showCalendars && (
              <Box className={s.orders__select}>
                <Calendar
                  value={selectedToDate}
                  onChange={(e) => setSelectedToDate(e.value)}
                  showIcon={true}
                  dateFormat="dd.mm.yy"
                  placeholder="Выберите дату"
                />
                <button onClick={handleInputClear} className={s.orders__btn}>
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
        <h2 onClick={() => setOrderStatus("новый")}>Новые</h2>
      </Box>,
      <Box className={s.orders__title}>
        <h2>Завершен</h2>
      </Box>,
      <Box className={s.orders__title}>
        <h2 onClick={() => setOrderStatus("отменен")}>Отмененные</h2>
      </Box>,
    ],
    tabContents: [
      <Box className={s.orders__tabs}>
        <CustomTable columns={columns} data={data} />
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
      </Box>,
      <Box className={s.orders__tabs}>
        <CustomTable columns={columns} data={data} />
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
      </Box>,
       <Box className={s.orders__tabs}>
       <CustomTable columns={columns} data={data} />
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
     </Box>,
      <Box className={s.orders__tabs}>
      <CustomTable columns={columns} data={data} />
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
    </Box>,
    ],
  }}
  ExtraItem={
    <Select
      options={orderTypeOptions}
      value={orderTypeOptions.find(
        (option) => option.value === selectedOrderType
      )}
      onChange={(selectedOption) => {
        setSelectedOrderType(selectedOption.value);
        setSearchParams({ order_type: selectedOption.value });
      }}
      placeholder="Тип заказа"
    />
  }
  activeTab={activeTab}
  onTabChange={(newActiveTab) => {
    setActiveTab(newActiveTab);
    handleTabChange(newActiveTab);
  }
  }
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
        secondaryBtnText={
          <Box
            onClick={() => {
              onCloseModal1();
            }}
          >
            Закрыть
          </Box>
        }
        primaryBtnText={"we"}
        onPrimaryBtnClick={() => {
          handleEndOrder();
          onCloseModal1();
        }}
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
      <CustomModal
        isOpenModal={isOpenModal4}
        onCloseModal={onCloseModal4}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            Выберите тип заказа
          </Box>
        }
        modalContent={
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"75px"}
            width={"max-content"}
            fontWeight={"600"}
            fontSize={"20px"}
            textAlign={"center"}
          >
            <Link
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to={"/admin/orders/AddHall"}
            >
              <ZalIcon />В зал
            </Link>
            <Link
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to={"/admin/orders/add"}
            >
              <PreOrderIcon />
              Предзаказ
            </Link>
          </Box>
        }
        ModalBtnBgColor={"blue"}
      />
    </>
  );
};
export default Orders;
