import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import request from "./httpRequest";
import { useMutation } from "react-query";
import queryClient from "./queryClient";

const OrdersService = {
  getOrders: (params) =>
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/orders", {
        params,
      })
      .then((res) => res?.data),
  deleteOrders: (orderId) =>
    request(
      `https://food-delivery-api-n6as.onrender.com/v1/order/${orderId}`
    ).then((res) => res?.data),
};

export const useGetOrdersService = (params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => OrdersService.getOrders(params),
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: (orderId) => OrdersService.deleteOrders(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
