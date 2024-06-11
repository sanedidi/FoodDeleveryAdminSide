import {
  AiOutlineEllipsis,
  CategoryFilterIcon,
  CustomModal,
  Link,
  MenuComp,
  useState,
  useEffect,
  axios,
  Box,
  Skeleton, Stack
} from "public/imports";
import s from "./Orders.module.scss";
import {
  CLickIcon,
  CancelIcon,
  CashIcon,
  PaymeIcon,
} from "components/SvgComponents/SvgComponents";
import cash from 'assets/img/cash.png'
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import request from "services/httpRequest";

export const useOrdersProps = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false); //modal
  const [isOpenModal2, setIsOpenModal2] = useState(false); //modal
  const [isOpenModal4, setIsOpenModal4] = useState(false); //modal
  const [products, setProducts] = useState([]); //get`
  const [totalPages, setTotalPages] = useState(10); //pagination
  const [currentPage, setCurrentPage] = useState(1); //pagination
  const [pageSize, setPageSize] = useState(10); //pagination
  const [activeTab, setActiveTab] = useState(0); // tabs
  const [isLoading, setIsLoading] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState(null); //update status
  const [closeOrderId, setCloseOrderId] = useState(null); //update status
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrderType, setSelectedOrderType] = useState(""); // order_type
  const [count, setCount] = useState("")
  const [orderStatus, setOrderStatus] = useState("");
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const onOpenModal4 = () => setIsOpenModal4(true);
  const onCloseModal4 = () => setIsOpenModal4(false);

  const getOrders = async (
    page = 1,
    limit = 10,
    search = "",
    order_type = selectedOrderType,
    from_date = "",
    to_date = ""
  ) => {
    setIsLoading(true);

    try {
      const response = await request.get("/orders", {
        params: {
          page,
          limit: limit,
          search: search,
          order_type: selectedOrderType,
          from_date: from_date,
          to_date: to_date,
          status: orderStatus,
        },
      });
      const fetchedProducts = response.data?.Data?.orders;
      
      
      if (fetchedProducts === null) {
      }
      setCount(response.data.Data.count)
      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(response.data?.Data?.count / limit));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    getOrders(currentPage, pageSize);
  }, [currentPage, pageSize]); //????????????

  

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
      key: "delivery_time",
      dataIndex: "delivery_time",
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
          case "наличные":
            paymentLabel = <img src={cash} alt="" />;
            break;
          case "click":
            paymentLabel = <CLickIcon />;
            break;
          case "free":
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
                    setCloseOrderId(item.id);
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
    activeTab,
    setActiveTab,
    onCloseModal2,
    isOpenModal1,
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
    orderStatus
  };
};

export default useOrdersProps;
