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
  editCategories: (params) =>
    request
      .get(`https://food-delivery-api-n6as.onrender.com/v1/category/${id}`, {
        params,
      })
      .then((res) => res?.data),
  postCategory: (data) =>
    request
      .post("https://food-delivery-api-n6as.onrender.com/v1/category", data)
      .then((res) => res?.data),
  deleteCategory: (categoryId) =>
    request
      .delete(
        `https://food-delivery-api-n6as.onrender.com/v1/category/${categoryId}`
      )
      .then((res) => res?.data),
};

export const useGetCategoriesService = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: () => CategoriesService.getCategories(params),
  });
};
export const useEditCategoriesService = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: () => CategoriesService.editCategories(params),
  });
};

export const usePostCategory = () => {
  return useMutation({
    mutationFn: (data) => CategoriesService.postCategory(data),
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (categoryId) => CategoriesService.deleteCategory(categoryId),
  });
};
