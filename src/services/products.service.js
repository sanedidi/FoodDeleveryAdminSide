import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsService = {
  getProducts: (params) =>
    axios
      .get(`/api/v1/product/`, { params })
      .then((res) => res?.data),
};

export const useGetProductService = (params) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => ProductsService.getProducts(params),
  });
};