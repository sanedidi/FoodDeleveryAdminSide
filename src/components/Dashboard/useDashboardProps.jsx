import { useEffect, useState } from "react";
import request from "services/httpRequest";
import {
  DashIcon1,
  DashIcon2,
  DashIcon3,
  DashIcon4,
} from "components/SvgComponents/SvgComponents";

const useDashboardProps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const [pageSize, setPageSize] = useState(10); // pagination
  const [totalPages, setTotalPages] = useState(100); // pagination
  const [orders, setOrders] = useState([]); // Store orders data
  const [stats, setStats] = useState([]);
  const [fil, setfil] = useState([]);

  const getStats = async (from_date = "", to_date = "") => {
    setIsLoading(true);

    try {
      const response = await request.get("/dashboard", {
        params: {
          from_date,
          to_date,
        },
      });

      const fetchedOrders = response.data?.Data?.orders;
      setOrders(fetchedOrders);

      const fetchedStats = response.data?.Data?.totalOrders;
      setStats(fetchedStats);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStats(currentPage, pageSize)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
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
