import { Box, Skeleton, Stack } from "@chakra-ui/react";
import {
  AiOutlineEllipsis,
  CategoryFilterIcon,
  CustomModal,
  Link,
  MenuComp,
  axios,
} from "public/imports";
import { useState, useEffect } from "react";
import { useGetOrdersService } from "services/orders.service";
import s from "./Orders.module.scss";
import {
  CLickIcon,
  CancelIcon,
  CashIcon,
  PaymeIcon,
} from "components/SvgComponents/SvgComponents";
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
export const useOrdersProps = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState(null);
  const [products, setProducts] = useState([]);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const onCloseModal3 = () => setIsOpenModal3(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime12h1, setDateTime12h1] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://food-delivery-api-n6as.onrender.com/v1/orders'


  const getOrders = async (page = 1, limit = 10, search = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          page: !!search.length ? null : page,
          limit:  !!search.length ? null : limit,
          search: !!search.length ? null : search
        },
      });
      const fetchedProducts = response.data.Data.orders;
      if (fetchedProducts.length === 0) {
        console.log("Ничего не найдено по вашему запросу");
      }
      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(response.data.Data.count / limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrders(currentPage, pageSize);
  }, [currentPage, pageSize]);






  const filterByDate = (order) => {
    if (!datetime12h || !datetime12h1) return true;
    const orderDate = new Date(order.created_at);
    const startTime = datetime12h.getTime();
    const endTime = datetime12h1.getTime();
    return orderDate >= startTime && orderDate <= endTime;
  };

  const filterByOrderType = (item) => {
    if (!selectedOrderType) return true;
    return item.order_type === selectedOrderType.value.toLowerCase();
  };



  const totalOrders = getOrders?.length || 0;

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
                  boxshadow={"0px 1px 2px rgba(16, 24, 40, 0.05)"}
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
    data:
      products?.map((item, index) => ({
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
    setSearchQuery,
    currentPage,
    pageSize,
    setPageSize,
    setCurrentPage,
    datetime12h,
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
    setSelectedOrderType,
  };
};

export default useOrdersProps;
