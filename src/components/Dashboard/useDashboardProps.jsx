import { useEffect, useState } from "react";
import request from "services/httpRequest";
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
  const stat = [
    { id: 1, status: "Завершенные", quant: "123,000", icon: <DashIcon1 /> },
    { id: 2, status: "Общая сумма", quant: "60,458,000", icon: <DashIcon2 /> },
    { id: 3, status: "Отмененные", quant: "23,000", icon: <DashIcon3 /> },
    { id: 4, status: "Все заказы", quant: "2,000,000", icon: <DashIcon4 /> },
  ];

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
