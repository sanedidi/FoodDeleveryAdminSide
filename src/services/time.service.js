import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest/index";

const TimeServices = {
  getTime: (data) =>
    request.get("http://worldtimeapi.org/api/timezone/Asia/Tashkent", data),
};

export const useTimeService = () => {
  return useMutation({ mutationFn: (data) => TimeServices.getTime(data) });
};
