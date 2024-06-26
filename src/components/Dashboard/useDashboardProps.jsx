import { useEffect, useState } from "react";
import {
  DashIcon1,
  DashIcon2,
  DashIcon3,
  DashIcon4,
} from "components/SvgComponents/SvgComponents";
import {
  useGetAllDashService,
  useGetMonthly_ordersService,
  useGetSemiannual_ordersService,
  useGetWeekly_OrdersService,
  useGetYearly_OrdersService,
} from "services/dashboard.service";

const useDashboardProps = () => {
  const { data: DashAll } = useGetAllDashService();
  const { data: monthly_orders } = useGetMonthly_ordersService();
  const { data: semiannual_orders } = useGetSemiannual_ordersService();
  const { data: weekly_orders } = useGetWeekly_OrdersService();
  const { data: yearly_orders } = useGetYearly_OrdersService();
  const filter = (sum) => sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const [stat, setStat] = useState([
    { id: 1, status: "Завершенные", quant: "0", icon: <DashIcon1 /> },
    { id: 2, status: "Общая сумма", quant: "0", icon: <DashIcon2 /> },
    { id: 3, status: "Отмененные", quant: "0", icon: <DashIcon3 /> },
    { id: 4, status: "Все заказы", quant: "0", icon: <DashIcon4 /> },
  ]);
  useEffect(() => {
    if (DashAll) {
      setStat([
        {
          id: 1,
          status: "Завершенные",
          quant: DashAll?.count_of_orders?.count_of_completed_status,
          icon: <DashIcon1 />,
        },
        {
          id: 2,
          status: "Общая сумма",
          quant: filter(DashAll?.total_price),
          icon: <DashIcon2 />,
        },
        {
          id: 3,
          status: "Отмененные",
          quant: DashAll?.count_of_orders?.count_of_canceled_status,
          icon: <DashIcon3 />,
        },
        {
          id: 4,
          status: "Все заказы",
          quant: DashAll?.count_of_orders?.count_of_all_orders,
          icon: <DashIcon4 />,
        },
      ]);
    }
  }, [DashAll]);

  return {
    stat,
    DashAll,
    monthly_orders,
    semiannual_orders,
    weekly_orders,
    yearly_orders,
  };
};

export default useDashboardProps;
