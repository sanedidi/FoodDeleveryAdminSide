import React, { useEffect, useState } from "react";
import {
  ChevronRightIcon,
  SearchIcon,
  ChevronLeftIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Box,
  CustomInput,
  CustomModal,
  CustomTable,
  Header,
  Link,
  PlusIcon,
  Toaster,
  UnderHeader,
  useSearchParams,
} from "public/imports";
import s from "components/Orders/Orders.module.scss";
import ReactPaginate from "react-paginate";
import useButcherProps from "./useButcherProps";

export const Butcher = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const {
    data,
    columns,
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
  } = useButcherProps();

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

  const handlePageChange = (event) => {
    setSearchParams({
      page: event.selected + 1,
      limit,
      search,
    });
  };

  return (
    <>
      <Toaster />
      <Header
        title={"Мясник"}
        headerBtn2={
          <>
            <Link
              to={"/admin/workers/butcher/butcherAdd"}
              className="header_btn1"
            >
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
        />
        <Box className={s.orders__wrapper}>
          <Box className={s.orders__tabs}>
            <Box  className={s.orders__tabs_wrapper_but}>
              <Box className={s.orders__tabs_table}>
                <CustomTable columns={columns} data={data} />
              </Box>
              <Box className={s.orders__tabs_pag}>
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
          </Box>
        </Box>
      </Box>
      <CustomModal
        isOpenModal={isOpenModal1}
        onCloseModal={onCloseModal1}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            <CloseIcon color={"blue"} fontSize={"45px"} />
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            Вы точно хотите завершить заказ?
          </Box>
        }
        secondaryBtnText={
          <Box
            onClick={() => {
              onCloseModal1();
            }}
          >
            Нет
          </Box>
        }
        primaryBtnText={"Да"}
        onPrimaryBtnClick={() => {
          handleEndOrder();
          onCloseModal1();
        }}
        ModalBtnBgColor={"blue"}
      />
    </>
  );
};

export default Butcher;
