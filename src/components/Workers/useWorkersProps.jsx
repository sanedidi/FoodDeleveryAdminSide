import {
  useState,
  useEffect,
  CategoryFilterIcon,
  AiOutlineEllipsis,
  DeleteIcon,
  EditIcon,
  MenuComp,
  Skeleton,
  Stack,
  React,
  Link,
  Box,
} from "public/imports";
import { useQuery, useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";
import s from "components/Categories/Categories.module.scss";

const useWorkersProps = () => {
  const [catalogs, setCatalogs] = useState([]);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);

  const fetchProducts = async (page = 1, limit = 10, search = "") => {
    setIsLoading(true);
    const response = await request.get("/catalogs", {
      params: {
        page: search.length ? null : page,
        limit: search.length ? null : limit,
        search,
      },
    });
    const fetchedProducts = response.data.Data.catalogs;
    setCatalogs(fetchedProducts);
    setTotalPages(Math.ceil(response.data.Data.count / limit));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts(currentPage, pageSize);
  }, [currentPage, pageSize]);
  const deleteCategoryMutation = (querParams) => {
    return useMutation({
      mutationFn: (id) => request.delete(`/catalog/${id}`),
      ...querParams,
    });
  };
  const { mutate: deleteMutate } = deleteCategoryMutation({
    onSuccess: () => fetchProducts(),
  });

  const columns = [
    {
      title: "No",
      key: "number",
      dataIndex: "number",
      width: 50,
    },
    {
      title: "Каталог",
      dataIndex: "name",
      key: "name",
      width: 120,
    },
    {
      title: "Время создания",
      dataIndex: "created_at",
      key: "created_at",
      width: 120,
    },
    {
      title: (
        <Box style={{ margin: "0 auto", width: "max-content" }}>
          <CategoryFilterIcon />
        </Box>
      ),
      key: "operations",
      width: 50,
      render: (item) => (
        <Box>
          <MenuComp
            MenuBtn={
              <div
                style={{
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  padding: "0px",
                  background: "transparent",
                }}
              >
                <AiOutlineEllipsis
                  style={{
                    fontWeight: "900",
                    fontSize: "30px",
                    border: "1px solid rgba(231, 231, 231, 1)",
                    borderRadius: "5px",
                    background: "#fff",
                  }}
                  color="#0E73FC"
                />
              </div>
            }
            ListMenu={
              <Box className={s.categories__menu}>
                <Box
                  onClick={() => {
                    onOpenModal2();
                    setSelectedProductId(item.id);
                  }}
                  className={s.categories__menu}
                >
                  Удалить
                  <DeleteIcon color={"#0E73FC"} />
                </Box>
              </Box>
            }
            ListMenu1={
              <Link
                to={`/admin/workers/workersEdit/${item.id}`}
                className={s.categories__menu}
              >
                Изменить
                <EditIcon color={"#0E73FC"} />
              </Link>
            }
          />
        </Box>
      ),
    },
  ];

  return {
    columns,
    data: catalogs.map((item, index) => ({
      key: item.id || index,
      number: (currentPage - 1) * pageSize + index + 1,
      ...item,
    })),
    paginationData: {
      current: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
    },
    isLoading,
    isOpenModal1,
    onCloseModal1,
    isOpenModal2,
    onCloseModal2,
    setSelectedProductId,
    selectedProductId,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    setNewState: ({ page, limit, search }) => {
      setCurrentPage(page);
      setPageSize(limit);
      fetchProducts(page, limit, search);
    },
    handleDeleteCategory: (id) => {
      deleteMutate(id);
    },
  };
};
export default useWorkersProps;
