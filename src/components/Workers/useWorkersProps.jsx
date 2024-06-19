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
  useDeleteCategory,
  Link,
} from "public/imports";
import request from "services/httpRequest";

const useWorkersProps = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(10);

  const handleDeleteCategory = async (categoryId) => {
    deleteCategory(categoryId);
  };

  const { mutate: deleteCategory } = useDeleteCategory({
    onSuccess: () => fetchCategories(currentPage, pageSize, searchQuery),
  });

  const fetchCategories = async (page, limit, search) => {
    setIsLoading(true);
    try {
      const response = await request.get(`/catalogs`, {
        params: {
          page: page,
          limit: limit,
          search,
        },
      });
      if (response.data && response.data.Data.catalogs) {
        setCategories(response.data.Data.catalogs);
        setTotalPages(Math.ceil(response.data.Data.count / limit));
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(currentPage, pageSize, searchQuery);
  }, [currentPage, pageSize, searchQuery]);

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
      render: (item) => {
        return (
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
                  to={`/admin/categories/edit/${item.id}`}
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
        );
      },
    },
  ];

  return {
    data: isLoading
      ? skeleton
      : categories.map((item, index) => ({
          key: item?.id || index,
          number: (currentPage - 1) * pageSize + index + 1,
          ...item,
        })),
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
    isLoading,
    setIsLoading,
    fetchCategories,
  };
};

export default useWorkersProps;
