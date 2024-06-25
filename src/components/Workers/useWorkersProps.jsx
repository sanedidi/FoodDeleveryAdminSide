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
} from "public/imports";
import { useDeleteWorker } from "services/categories.service";
import { useGetAllWorkersService } from "services/workers.service";

const useWorkersProps = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [newState, setNewState] = useState();
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);

  const { data: queryData, refetch } = useGetAllWorkersService(newState);

  const { mutate: deleteCategory } = useDeleteWorker({
    onSuccess: () => refetch(),
  });

  const handleDeleteCategory = async (categoryId) => {
    deleteCategory(categoryId);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, pageSize, searchQuery, newState]);

  useEffect(() => {
    const pageCount = Math.ceil(queryData?.count / 10);
    setTotalPages(pageCount);
  }, [queryData]);

  const skeleton = (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );

  const columns = [
    {
      title: "No",
      key: "number",
      dataIndex: "number",
      width: 0,
    },
    {
      title: "Товар",
      key: "name",
      width: 480,
      dataIndex: "name",
    },
    {
      title: "Дата создания",
      width: 480,
      dataIndex: "created_at",
    },
    {
      title: (
        <div style={{ margin: "0 auto", width: "max-content" }}>
          <CategoryFilterIcon />
        </div>
      ),
      key: "operations",
      width: 20,
      render: (item) => (
        <div>
          <MenuComp
            MenuBtn={
              <div
                boxshadow={"0px 1px 2px rgba(16, 24, 40, 0.05)"}
                padding="0px"
              >
                <AiOutlineEllipsis
                  onClick={() => {
                    onOpenModal1();
                  }}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                className="categories__menu"
                onClick={() => {
                  onOpenModal2();
                  setSelectedCategoryId(item.id);
                }}
              >
                Удалить
                <DeleteIcon color={"#0E73FC"} />
              </div>
            }
            ListMenu1={
              <Link
                to={`/admin/workers/workersEdit/${item.id}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                className="categories__menu"
              >
                Изменить
                <EditIcon color={"#0E73FC"} />
              </Link>
            }
          />
        </div>
      ),
    },
  ];

  return {
    data: isLoading
      ? skeleton
      : (queryData &&
          queryData?.catalogs?.map((item, index) => ({
            key: item?.id || index,
            number: (currentPage - 1) * pageSize + index + 1,
            ...item,
          }))) ||
        [],
    paginationData: {
      current: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
    },
    columns,
    categories,
    setCategories,
    setSearchQuery,
    isOpenModal1,
    isOpenModal2,
    onCloseModal1,
    onCloseModal2,
    handleDeleteCategory,
    setSelectedCategoryId,
    selectedCategoryId,
    isLoading,
    setIsLoading,
    setNewState,
  };
};

export default useWorkersProps;
