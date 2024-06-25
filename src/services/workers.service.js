import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest";

const DashboardService = {
  //   getDash: (params) =>
  //     request
  //       .get(`/catalogs`, {
  //         params,
  //       })
  //       .then((res) => res?.data?.Data),
  getDash: (params) => {
    console.log("getDash", params);
    return request
      .get("/catalogs", {
        ...params,
      })
      .then((res) => res?.data?.Data);
  },
};

export const useGetAllWorkersService = (params) => {
  return useQuery({
    queryKey: ["get-all", params],
    queryFn: () => DashboardService.getDash(params),
  });
};
