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
  toast,
  useSearchParams,
} from "public/imports";
import { Calendar } from "primereact/calendar";
import s from "./Orders.module.scss";
import useOrdersProps from "./useOrdersProps";
import CustomTabs from "components/Custom/CustomTabs/CustomTabs";
import ReactPaginate from "react-paginate";
import { PreOrderIcon, ZalIcon } from "components/SvgComponents/SvgComponents";
import request from "services/httpRequest";

export const Orders = () => {
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
    count,
    orderStatus,
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
    let orderType = "";
    switch (newActiveTab) {
      case 0:
        status = "";
        break;
      case 1:
        orderType = "Самовывоз";
        break;
      case 2:
        orderType = "зал";
        break;
      case 3:
        status = "новый";
        break;
      case 4:
        status = "завершен";
        break;
      case 5:
        status = "отменен";
        break;
      default:
        break;
    }
    setSearchParams({ status, order_type: orderType });
    setOrderStatus(status);
    setSelectedOrderType(orderType);
    getOrders(
      page,
      limit,
      search,
      orderType,
      selectedFromDate,
      selectedToDate,
      status
    );
  };

  const handlePageChange = (event) => {
    setSearchParams({
      page: event.selected + 1,
      limit,
      search,
    });
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
          secondItem={
            <Box className={s.orders__select}>
              <Calendar
                value={selectedFromDate}
                onChange={(e) => setSelectedFromDate(e.value)}
                showIcon={true}
                dateFormat="dd.mm.yy"
                placeholder="Выберите дату"
                className={s.orders__underHeader_input}
              />
            </Box>
          }
          thirdItem={
            <Box className={s.orders__select}>
              <Calendar
                value={selectedToDate}
                onChange={(e) => setSelectedToDate(e.value)}
                showIcon={true}
                dateFormat="dd.mm.yy"
                placeholder="Выберите дату"
                className={s.orders__underHeader_input}
              />
              <button onClick={handleInputClear} className={s.orders__btn}>
                Очистить
              </button>
            </Box>
          }
        />
        <Box className={s.orders__wrapper}>
          <CustomTabs
            tabs={{
              tabLabels: [
                <Box className={s.orders__title}>
                  <h2>Все заказы</h2>
                  <p> {count.count_of_all_orders} </p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2
                    style={{ fontWeight: "500" }}
                    onClick={() => handleTabChange(4)}
                  >
                    Самовывоз
                  </h2>
                  <p>{count.count_of_pre_order}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2
                    style={{ fontWeight: "500" }}
                    onClick={() => handleTabChange(5)}
                  >
                    В зал
                  </h2>
                  <p>{count.count_for_hall}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2 onClick={() => setOrderStatus("новый")}>Новые</h2>
                  <p>{count.count_of_new_status}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2>Завершен</h2>
                  <p>{count.count_of_completed_status}</p>
                </Box>,
                <Box className={s.orders__title}>
                  <h2 onClick={() => setOrderStatus("отменен")}>Отмененные</h2>
                  <p>{count.count_of_canceled_status}</p>
                </Box>,
              ],
              tabContents: [
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
                <Box className={s.orders__tabs}>
                  <Box className={s.orders__tabs_wrapper}>
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
                </Box>,
              ],
            }}
            activeTab={activeTab}
            onTabChange={(newActiveTab) => {
              setActiveTab(newActiveTab);
              handleTabChange(newActiveTab);
            }}
          />
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
      <CustomModal
        isOpenModal={isOpenModal2}
        onCloseModal={onCloseModal2}
        modalTitle={
          <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
            <CloseIcon fontSize={"45px"} color={"blue"} />
          </Box>
        }
        modalContent={
          <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
            Вы уверены, что хотите <br /> отменить этот заказ?
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
          <Box
            margin={"0 auto"}
            flexWrap={"500"}
            textAlign={"center"}
            width={"max-content"}
          >
            Выберите тип заказа
          </Box>
        }
        modalContent={
          <Box className={s.orders__modal_box}>
            <Link className={s.orders__modal_btn} to={"/admin/orders/AddHall"}>
              <ZalIcon />В зал
            </Link>
            <Link className={s.orders__modal_btn} to={"/admin/orders/add"}>
              <PreOrderIcon />
              Самовывоз
            </Link>
          </Box>
        }
        ModalBtnBgColor={"blue"}
      />
    </>
  );
};

export default Orders;
