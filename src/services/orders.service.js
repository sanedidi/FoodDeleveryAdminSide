import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest";
import { useMutation } from "@tanstack/react-query";
import queryClient from "./queryClient";

const OrdersService = {
  getOrders: (params) =>
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/orders", {
        params,
      })
      .then((res) => res?.data),
  deleteOrder: (orderId) =>
    request
      .delete(`https://food-delivery-api-n6as.onrender.com/v1/order/${orderId}`)
      .then((res) => res?.data),
};
export const useGetOrdersService = (params) => {
  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => OrdersService.getOrders(params),
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: (orderId) => OrdersService.deleteOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
