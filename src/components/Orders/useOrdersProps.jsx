import { Box, Skeleton, Stack } from "@chakra-ui/react";
import {
  AiOutlineEllipsis,
  CategoryFilterIcon,
  CustomModal,
  Link,
  MenuComp,
  toast,
} from "public/imports";
import { useState, useEffect } from "react";
import { useGetOrdersService } from "services/orders.service";
import axios from "axios";
import s from "./Orders.module.scss";
import {
  CLickIcon,
  CancelIcon,
  CashIcon,
  PaymeIcon,
} from "components/SvgComponents/SvgComponents";
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import request from "services/httpRequest";

export const useOrdersProps = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false); //modal
  const [isOpenModal2, setIsOpenModal2] = useState(false); //modal
  const [isOpenModal3, setIsOpenModal3] = useState(false); //modal
  const [isOpenModal4, setIsOpenModal4] = useState(false); //modal
  const [products, setProducts] = useState([]); //get`
  const [totalPages, setTotalPages] = useState(10); //pagination
  const [currentPage, setCurrentPage] = useState(1); //pagination
  const [pageSize, setPageSize] = useState(10); //pagination
  const [datetime12h, setDateTime12h] = useState(null); // calendar
  const [datetime12h1, setDateTime12h1] = useState(null); // calendar
  const [activeTab, setActiveTab] = useState(0); // tabs
  const [isLoading, setIsLoading] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState(null); //update status
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrderType, setSelectedOrderType] = useState(""); // order_type

  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const onCloseModal3 = () => setIsOpenModal3(false);
  const onOpenModal4 = () => setIsOpenModal4(true);
  const onCloseModal4 = () => setIsOpenModal4(false);

  const getOrders = async (
    page = 1,
    limit = 10,
    search = "",
    order_type = ""
  ) => {
    setIsLoading(true);

    try {
      const response = await request.get("/orders", {
        params: {
          page,
          limit: search ? null : limit,
          search: search || null,
          order_type: order_type || null,
        },
      });

      const fetchedProducts = response.data?.Data?.orders;
      if (fetchedProducts === null) {
        console.log("по вашему запросу ничего не найдено");
      }
      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(response.data?.Data?.count / limit));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const CANCEL_ORDER_URL =
    "https://food-delivery-api-n6as.onrender.com/v1/order_status";

  const cancelOrder = async (orderId) => {
    try {
      await axios.patch(`${CANCEL_ORDER_URL}/${orderId}/cancel`);
      getOrders(currentPage, pageSize, searchQuery);
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  useEffect(() => {
    getOrders(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const totalOrders = () => {
    if (products.length === 0) {
      console.log("sd");
    } else {
      console.log("dc");
    }
  };

  const columns = [
    {
      title: "No",
      key: "number",
      dataIndex: "number",
      width: 0,
    },
    {
      title: "ID заказа",
      key: "order_number",
      dataIndex: "order_number",
      width: 0,
    },
    {
      title: "ID заказа",
      key: "status",
      dataIndex: "status",
      width: 0,
    },
    {
      title: "Время создания",
      key: "created_at",
      dataIndex: "created_at",
      width: 120,
      render: (createdAt) => {
        const formattedDateTime = new Date(createdAt).toLocaleString("ru-RU", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "numeric",
          minute: "numeric",
        });
        return <p>{formattedDateTime}</p>;
      },
    },
    {
      title: "Время самовывоза",
      key: "order_time",
      dataIndex: "order_time",
      width: 0,
    },
    {
      title: "Имя клиента",
      width: 120,
      render: (item) => (
        <Box>
          <p>{item?.customer_name}</p>
          <p className={s.orders__customer_num}>{item?.customer_phone}</p>
        </Box>
      ),
    },
    {
      title: "Филиал",
      width: 120,
      render: (item) => <p>{item?.BranchData.name}</p>,
    },
    {
      title: "Тип Заказа",
      key: "order_type",
      width: 120,
      render: (item) => (
        <p className={s.orders__customer_num}>{item?.order_type}</p>
      ),
    },
    {
      title: "Цена",
      key: "total_price",
      dataIndex: "total_price",
      width: 120,
    },
    {
      title: "Тип оплаты",
      key: "payment_type",
      dataIndex: "payment_type",
      width: 120,
      render: (paymentType) => {
        let paymentLabel;
        switch (paymentType) {
          case "payme":
            paymentLabel = <PaymeIcon />;
            break;
          case "click":
            paymentLabel = <CLickIcon />;
            break;
          case "cash":
            paymentLabel = <CashIcon />;
            break;
          default:
            paymentLabel = paymentType;
        }
        return (
          <p
            style={{
              textAlign: "center",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              border: "1px solid #EEEEEE",
              height: "40px",
              borderRadius: "50px",
              padding: "5px",
            }}
          >
            {paymentLabel}
          </p>
        );
      },
    },
    {
      title: (
        <Box style={{ margin: "0 auto", width: "max-content" }}>
          <CategoryFilterIcon />
        </Box>
      ),
      key: "operations",
      width: 20,
      render: (item) => {
        return (
          <Box>
            <MenuComp
              MenuBtn={
                <Box
                  boxShadow={"0px 1px 2px rgba(16, 24, 40, 0.05)"}
                  padding="0px"
                >
                  <AiOutlineEllipsis
                    style={{
                      fontWeight: "900",
                      fontSize: "30px",
                      border: "1px solid rgba(231, 231, 231, 1)",
                      borderRadius: "5px",
                      background: "#fff",
                    }}
                    color="#0E73FC"
                  />
                </Box>
              }
              ListMenu={
                <Box
                  style={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "12px",
                    width: "100%",
                    gap: "10px",
                  }}
                  className="categories__menu"
                  onClick={() => {
                    onOpenModal1();
                    // setSelectedCategoryId(item.id);
                  }}
                >
                  <CheckIcon color={"green"} />
                  Закрыть
                </Box>
              }
              ListMenu1={
                <Box
                  style={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "12px",
                    width: "100%",
                    gap: "10px",
                  }}
                  onClick={() => {
                    onOpenModal2();
                    setCancelOrderId(item.id);
                    // setSelectedCategoryId(item.id);
                  }}
                >
                  <CancelIcon />
                  Отменить
                </Box>
              }
              ListMenu3={
                <Link
                  to={`/admin/orders/info/${item.id}`}
                  style={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "600",
                    fontSize: "12px",
                    width: "100%",
                    gap: "10px",
                  }}
                >
                  <CustomModal />
                  <InfoIcon color={"green"} />
                  Инфо
                </Link>
              }
            />
          </Box>
        );
      },
    },
  ];

  const skeleton = (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );

  return {
    data: products?.map((item, index) => ({
      key: item?.id || index,
      number: (currentPage - 1) * pageSize + index + 1,
      ...item,
    })),
    paginationData: {
      current: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
    },
    columns,

    getOrders,
    skeleton,
    searchQuery,
    currentPage,
    pageSize,
    setPageSize,
    setCurrentPage,
    // datetime12h,
    setDateTime12h,
    datetime12h1,
    setDateTime12h1,
    activeTab,
    setActiveTab,
    totalOrders,
    onCloseModal1,
    onOpenModal1,
    onCloseModal2,
    isOpenModal2,
    isOpenModal1,
    isOpenModal3,
    onCloseModal3,
    // setSelectedOrderType,
    cancelOrder,
    cancelOrderId,
    selectedOrderType,
    setSelectedOrderType,
    onOpenModal4,
    onCloseModal4,
    isOpenModal4, setIsOpenModal4
  };
};

export default useOrdersProps;
