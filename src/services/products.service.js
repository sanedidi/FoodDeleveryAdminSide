import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest/index";
import { useMutation } from "@tanstack/react-query";

const ProductsService = {
  getProducts: (params) =>
    request
      .get(
        `https://food-delivery-api-n6as.onrender.com/v1/order_product/${id}`,
        {
          params,
        }
      )
      .then((res) => res?.data),
};
export const useGetProductsService = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: () => ProductsService.getProducts(params),
  });
};
