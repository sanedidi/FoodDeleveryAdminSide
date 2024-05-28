import React, { useState, useEffect } from "react";
import { Skeleton, Stack } from "@chakra-ui/react";
import { useGetOrdersService } from "services/orders.service";

const useOrdersProps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: getOrder, refetch } = useGetOrdersService({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    if (getOrder) {
      console.log("Fetched orders:", getOrder);
    }
  }, [getOrder]);

  const filteredData = getOrder?.Data?.orders?.filter((item) =>
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
  };
};

export default useOrdersProps;
