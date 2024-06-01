import React, { useEffect } from "react";
import { useGetBranchesService } from "services/branches.service";
import { useGetCategoriesService } from "services/categories.service";
import { useGetProductService } from "services/products.service";

const useOrdersAddProps = () => {
  const { data: getBranch } = useGetBranchesService({});
  const { data: getProd } = useGetProductService();
  console.log(getProd)
  return { getProd, getBranch };
};

export default useOrdersAddProps;
