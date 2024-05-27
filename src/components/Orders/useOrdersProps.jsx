import { useGetOrdersService } from "services/orders.service";

const useOrdersProps = () => {
  const { data: getOrder, refetch } = useGetOrdersService();
  
  return {
    getOrder
  };
};

export default useOrdersProps;
