import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest/index";

const CategoriesService = {
  getCategories: (params) =>
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/categories", {
        params,
      })
      .then((res) => res?.data),
};
export const useGetCategoriesService = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: () => CategoriesService.getCategories(params),
  });
};
