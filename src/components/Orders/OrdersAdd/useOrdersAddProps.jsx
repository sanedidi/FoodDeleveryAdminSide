import React, { useEffect } from "react";
import { useGetCategoriesService } from "services/categories.service";

const useOrdersAddProps = () => {
  const { data: getCat, refetch } = useGetCategoriesService({});

  

  return { getCat };
};

export default useOrdersAddProps;
