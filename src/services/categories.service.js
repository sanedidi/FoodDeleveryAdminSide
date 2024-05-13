import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest/index";

const CategoriesService = {
  getCategories: (data) =>
    request.get("https://food-delivery-api-n6as.onrender.com/v1/categories", data),
};

export const useTimeService = () => {
    return useMutation({ mutationFn: (data) => TimeServices.getTime(data) });
  };
  
