import {
  DashIcon1,
  DashIcon2,
  DashIcon3,
  DashIcon4,
} from "components/SvgComponents/SvgComponents";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import request from "services/httpRequest";

const useDashboardProps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const [pageSize, setPageSize] = useState(10); // pagination
  const [totalPages, setTotalPages] = useState(10); // pagination
  const [orders, setOrders] = useState([]); // Store orders data
  const [stats, setStats] = useState([]);
  const [fil, setfil] = useState([]);
  const getStats = async (
    page = 1,
    limit,
    search = "",
    from_date = "",
    to_date = ""
  ) => {
    setIsLoading(true);

    try {
      const response = await request.get("/dashboard", {
        params: {
          page,
          limit,
          search,
          from_date,
          to_date,
        },
      });
      const fetchedStats = response.data?.Data?.orders;
      setStats(fetchedStats);
      if (fetchedStats) {
        setOrders(fetchedStats);
        setTotalPages(Math.ceil(response.data?.Data?.count / limit));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStats(currentPage, pageSize);
  }, [currentPage, pageSize]);
  const stat = [
    { id: 1, status: "Завершенные", quant: "123,000", icon: <DashIcon1 /> },
    { id: 2, status: "Общяя сумма", quant: "60,458,000", icon: <DashIcon2 /> },
    { id: 3, status: "Отмененные", quant: "23,000", icon: <DashIcon3 /> },
    { id: 4, status: "Все заказы", quant: "2,000,000", icon: <DashIcon4 /> },
  ];
  return {
    getStats,
    orders,
    isLoading,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    stats,
    stat,
  };
};

export default useDashboardProps;
