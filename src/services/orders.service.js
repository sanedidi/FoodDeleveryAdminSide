import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const OrdersService = {
  getOrders: (params) =>
    axios
      .get(
        `https://food-delivery-api-n6as.onrender.com/v1/orders
      `,
        { params }
      )
      .then((res) => res?.data.product),
};

export const useGetOrdersService = (params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => OrdersService.getOrders(params),
  });
};
