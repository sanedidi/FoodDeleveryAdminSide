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
  };
};

export default useDashboardProps;
