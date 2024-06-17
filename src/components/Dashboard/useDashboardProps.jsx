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
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState([]);

  const getStats = async (from_date = "", to_date = "") => {
    setIsLoading(true);
    try {
      const { data } = await request.get("/dashboard", {
        params: { from_date, to_date },
      });
      setOrders(data?.Data?.orders || []);
      setStats(data?.Data?.totalOrders || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  const stat = [
    { id: 1, status: "Завершенные", quant: "123,000", icon: <DashIcon1 /> },
    { id: 2, status: "Общая сумма", quant: "60,458,000", icon: <DashIcon2 /> },
    { id: 3, status: "Отмененные", quant: "23,000", icon: <DashIcon3 /> },
    { id: 4, status: "Все заказы", quant: "2,000,000", icon: <DashIcon4 /> },
  ];

  return { getStats, orders, isLoading, stats, stat };
};

export default useDashboardProps;
