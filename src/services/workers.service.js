import { useQuery } from "@tanstack/react-query";
import request from "./httpRequest";

const DashboardService = {
  //   getDash: (params) =>
  //     request
  //       .get(`/catalogs`, {
  //         params,
  //       })
  //       .then((res) => res?.data?.Data),
  getDash: (params) =>
    request
      .get("/catalogs", {
        params,
      })
      .then((res) => res?.data.Data.catalogs),
};

export const useGetAllWorkersService = (params) => {
  return useQuery({
    queryKey: ["get-all", params],
    queryFn: () => DashboardService.getDash(params),
  });
};
