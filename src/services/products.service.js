import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsService = {
  getProducts: (params) =>
    axios
      .get(`https://food-delivery-api-n6as.onrender.com/v1/products`, { params })
      .then((res) => res?.data.product),
};

export const useGetProductService = (params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => ProductsService.getProducts(params),
  });
};