import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest";

const DashboardService = {
  getDash: (params) =>
    request
      .get(`/dashboard`, {
        params,
      })
      .then((res) => res?.data?.Data?.orders),
  getMonthly_orders: (params) =>
    request
      .get(`/monthly_orders`, {
        params,
      })
      .then((res) => res?.data?.Data?.days),
  getSemiannual_orders: (params) =>
    request
      .get(`/semiannual_orders`, {
        params,
      })
      .then((res) => res?.data?.Data?.days),
  getWeekly_orders: (params) =>
    request
      .get(`/weekly_orders`, {
        params,
      })
      .then((res) => res?.data?.Data?.days),
  getYearly_orders: (params) =>
    request
      .get(`/yearly_orders`, {
        params,
      })
      .then((res) => res?.data?.Data?.days),
};

export const useGetAllDashService = (params) => {
  return useQuery({
    queryKey: ["get-all", params],
    queryFn: () => DashboardService.getDash(params),
  });
};
export const useGetMonthly_ordersService = (params) => {
  return useQuery({
    queryKey: ["get-monthly", params],
    queryFn: () => DashboardService.getMonthly_orders(params),
  });
};
export const useGetSemiannual_ordersService = (params) => {
  return useQuery({
    queryKey: ["semiannual_orders", params],
    queryFn: () => DashboardService.getSemiannual_orders(params),
  });
};
export const useGetWeekly_OrdersService = (params) => {
  return useQuery({
    queryKey: ["weekly_orders", params],
    queryFn: () => DashboardService.getWeekly_orders(params),
  });
};
export const useGetYearly_OrdersService = (params) => {
  return useQuery({
    queryKey: ["yearly_orders", params],
    queryFn: () => DashboardService.getYearly_orders(params),
  });
};
