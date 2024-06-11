import { format } from "date-fns";
import { useEffect, useState } from "react";
import request from "services/httpRequest";

const useDashboardProps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const [pageSize, setPageSize] = useState(10); // pagination
  const [totalPages, setTotalPages] = useState(10); // pagination
  const [orders, setOrders] = useState([]); // Store orders data

  const getStats = async (
    page = 1,
    limit = null, 
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

  const filterOrdersByMonth = async (month) => {
    const currentDate = new Date();
    const from_date = format(new Date(currentDate.getFullYear(), month - 1, 1), 'yyyy-MM-dd');
    const to_date = format(new Date(currentDate.getFullYear(), month, 0), 'yyyy-MM-dd');
    getStats(1, null, "", from_date, to_date);
  };

  const filterOrdersByPeriod = async (period) => {
    let from_date, to_date;
    const currentDate = new Date();
    to_date = format(currentDate, 'yyyy-MM-dd');

    switch (period) {
      case "12m":
        from_date = format(subMonths(currentDate, 12), 'yyyy-MM-dd');
        break;
      case "6m":
        from_date = format(subMonths(currentDate, 6), 'yyyy-MM-dd');
        break;
      case "30d":
        from_date = format(subDays(currentDate, 30), 'yyyy-MM-dd');
        break;
      default:
        from_date = format(subMonths(currentDate, 12), 'yyyy-MM-dd');
        break;
    }

    getStats(1, null, "", from_date, to_date);
  };

  const filterOrdersByValue = async (value) => {
  };

  useEffect(() => {
    getStats(currentPage, pageSize);
  }, [currentPage, pageSize]);

  return {
    getStats,
    orders,
    isLoading,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    filterOrdersByMonth,
    filterOrdersByPeriod,
    filterOrdersByValue,
  };
};

export default useDashboardProps;
