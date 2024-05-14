import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest/index";
import { useMutation } from "@tanstack/react-query";

const CategoriesService = {
  getCategories: (params) =>
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/categories", {
        params,
      })
      .then((res) => res?.data),
  PostCategory: () =>
    request
      .post(
        "https://food-delivery-api-n6as.onrender.com/swagger/index.html#/category/post_v1_category"
      )
      .then((res) => res?.data),
};
export const useGetCategoriesService = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: () => CategoriesService.getCategories(params),
  });
};

export const usePostCategory = () => {
  return useMutation({
    mutationFn: (data) => CategoriesService.PostCategory(data), // Здесь должны быть переданы данные для отправки
  });
};
