import React, { useState, useEffect } from "react";
import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useGetOrdersService } from "services/orders.service";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MenuComp } from "components/MenuComponent";
import { CategoryFilterIcon } from "public/imports";
import { CancelIcon, InfoIcon } from "components/SvgComponents/SvgComponents";

const useOrdersProps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [datetime12h, setDateTime12h] = useState(null);
  const [datetime12h1, setDateTime12h1] = useState(null);
  const { data: getOrder, refetch } = useGetOrdersService({});
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (getOrder) {
      console.log("Fetched orders:", getOrder);
    }
  }, [getOrder]);

  const filteredData = getOrder?.Data?.orders?.filter((item) =>
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
      key: "id",
      dataIndex: "id",
      width: 0,
    },
    {
      title: "Дата заказа",
      key: "order_time",
      dataIndex: "order_time",
      width: 0,
    },
    {
      title: " Имя клиента",
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
                    onClick={() => {
                      onOpenModal1();
                    }}
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
                    height:"30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight:"600",
                    fontSize:"12px",
                    width: "100%",
                    gap: "10px",
                  }}
                  className="categories__menu"
                  onClick={() => {
                    onOpenModal2();
                    setSelectedCategoryId(item.id);
                  }}
                >
                  <CheckIcon color={"green"} />
                  Закрыть
                </Box>
              }
              ListMenu1={
                <Box
                  style={{
                    height:"30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight:"600",
                    fontSize:"12px",
                    width: "100%",
                    gap: "10px",
                  }}
                >
                  <CancelIcon />
                  Отменить
                </Box>
              }
              ListMenu3={
                <Box
                  style={{
                    height:"30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight:"600",
                    fontSize:"12px",
                    width: "100%",
                    gap: "10px",
                  }}
                >
                  <InfoIcon />
                  Инфо
                </Box>
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
  };
};

export default useOrdersProps;
