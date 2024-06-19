import {
  AiOutlineEllipsis,
  CategoryFilterIcon,
  CustomModal,
  Link,
  MenuComp,
  useState,
  useEffect,
  Box,
  Skeleton,
  Stack,
} from "public/imports";
import {
  CLickIcon,
  CancelIcon,
  CashIcon,
  PaymeIcon,
} from "components/SvgComponents/SvgComponents";
import cash from "assets/img/cash.png";
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import request from "services/httpRequest";

export const useButcherProps = () => {
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

  const [orderStatus, setOrderStatus] = useState("");
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const onOpenModal4 = () => setIsOpenModal4(true);
  const onCloseModal4 = () => setIsOpenModal4(false);

  const getOrders = async (page = 1, limit = 10, search = "") => {
    setIsLoading(true);

    try {
      const response = await request.get("/butchers", {
        params: {
          page,
          limit: limit,
          search: search,
        },
      });
      const fetchedProducts = response.data?.Data?.butchers;

      if (fetchedProducts === null) {
      }
      setTotalPages(Math.ceil(response.data?.Data?.count / limit));
      setProducts(fetchedProducts);
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
      title: "Сотруник",
      key: "full_name",
      dataIndex: "full_name",
      width: 60,
    },
    {
      title: "Каталог",
      key: "catalog_id",
      dataIndex: "catalog_id",
      width: 120,
    },
    {
      title: "Цена продажи",
      key: "price_per_kilo",
      dataIndex: "price_per_kilo",
      width: 0,
    },
    {
      title: "Остаток",
      key: "total_sum",
      dataIndex: "total_sum",
      width: 120,
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
                <Link
                  to={""}
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
                  Добавить Остаток
                </Link>
              }
              ListMenu1={
                <Link
                  to={""}
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
                  Удалить Остаток
                </Link>
              }
              ListMenu3={
                <Link
                  to={`${item.id}`} //mlovmnksvlksdnvlksdnvlksdlvksnd
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
                  Инфо Остаток
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
    orderStatus,
  };
};

export default useButcherProps;
