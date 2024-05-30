import React, { useState, useEffect } from "react";
import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useGetOrdersService } from "services/orders.service";
import { CheckIcon } from "@chakra-ui/icons";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MenuComp } from "components/MenuComponent";
import { CategoryFilterIcon, CustomModal, Link } from "public/imports";
import {
  CLickIcon,
  CancelIcon,
  CashIcon,
  InfoIcon,
  PaymeIcon,
} from "components/SvgComponents/SvgComponents";
import { CountDown } from "components/CountDOwn";

export const useOrdersProps = (item) => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
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
  const { data: getOrder, refetch } = useGetOrdersService({});
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    if (getOrder) {
      // console.log("Fetched orders:", getOrder);
    }
  }, [getOrder]);
  const filterByDate = (item) => {
    console.log(item.id);
    if (!datetime12h || !datetime12h1) return true;
    const orderDate = new Date(item.order_time);
    return orderDate >= datetime12h && orderDate <= datetime12h1;
  };
  const filteredData = getOrder?.Data?.orders?.filter((order) => {
    const customerFullName = order.CustomerData.full_name.toLowerCase();
    return (
      customerFullName.includes(searchQuery.toLowerCase()) &&
      filterByDate(order)
    );
  });

  const totalOrders = filteredData?.length || 0;

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
      title: "Время доставки",
      key: "delivery_time",
      dataIndex: "delivery_time",
      width: 120,
      render: (item) => {
        // console.log("Рендеринг элемента заказаacas:", item);
        return <CountDown deliveryTime={item.delivery_time} />;
      },
    },
    {
      title: "Дата заказа",
      key: "order_time",
      dataIndex: "order_time",
      width: 0,
    },
    {
      title: "Имя клиента",
      width: 120,
      render: (item) => <p>{item?.CustomerData.full_name}</p>,
    },
    {
      title: "Филиал",
      width: 120,
      render: (item) => <p>{item?.BranchData.address}</p>,
    },
    {
      title: "Тип Заказа",
      key: "order_type",
      dataIndex: "order_type",
      width: 120,
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
                  <InfoIcon />
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
      filteredData?.map((item, index) => ({
        key: item?.id || index,
        number: (currentPage - 1) * pageSize + index + 1,
        ...item,
      })) || [],
    paginationData: {
      current: currentPage,
      pageSize: pageSize,
      // totalPages: totalPages,
    },
    columns,
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
  };
};

export default useOrdersProps;
