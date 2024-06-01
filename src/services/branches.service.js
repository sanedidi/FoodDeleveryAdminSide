import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest/index";
import { useMutation } from "@tanstack/react-query";
import queryClient from "./queryClient";

const BranchesService = {
  getBranches: (params) =>
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/branches", {
        params,
      })
      .then((res) => res?.data),
};

export const useGetBranchesService = (params) => {
  return useQuery({
    queryKey: ["branch", params],
    queryFn: () => BranchesService.getBranches(params),
  });
};
