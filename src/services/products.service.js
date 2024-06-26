import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest";

const ProductsService = {
  getProducts: (params) =>
    request
      .get(`https://food-delivery-api-n6as.onrender.com/v1/products`, { params })
      .then((res) => res?.data.product),
      postProduct: (data) =>
        request
          .post("https://food-delivery-api-n6as.onrender.com/v1/product", data)
          .then((res) => res?.data),
};

export const useGetProductService = (params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => ProductsService.getProducts(params),
  });
};