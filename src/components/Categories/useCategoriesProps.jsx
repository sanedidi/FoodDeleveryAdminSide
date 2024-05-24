import {
  useState,
  CategoryImage,
  CategoryFilterIcon,
  CustomBtn,
  AiOutlineEllipsis,
  DeleteIcon,
  EditIcon,
  MenuComp,
  Skeleton,
  Stack,
  React,
  useDeleteCategory,
  useGetCategoriesService,
  axios,
} from "./imports";

export const useCategoriesProps = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const { data: getCat, refetch } = useGetCategoriesService();
  const handleDeleteCategory = async (categoryId) => {
    deleteCategory(categoryId);
    refetch();
  };

  const { mutate: deleteCategory } = useDeleteCategory({
    onSuccess: () => refetch(),
  });

  const updateCategory = async ({ id, name, photo }) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("photo", photo);

      const response = await axios.put(
        `https://food-delivery-api-n6as.onrender.com/v1/category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Update Successful");
      return response.data;
    } catch (error) {
      console.log("Update Failed", error);
      throw error;
    }
  };

  const handleEditCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    onOpenModal1();
  };
  const filteredData = getCat?.Data?.category?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      title: "Фото",
      width: 480,
      render: (item) => <CategoryImage item={item} />,
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
                <CustomBtn
                  boxShadow={"0px 1px 2px rgba(16, 24, 40, 0.05)"}
                  padding="0px"
                  BgColor={"transparent"}
                  BtnContent={
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
                  }
                  onClick={() => {
                    onOpenModal1();
                  }}
                />
              }
              ListMenu={
                <button
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
                </button>
              }
              ListMenu1={
                <button
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                  onClick={() => {
                    onOpenModal1();
                    setSelectedCategoryId(item.id);
                  }}
                  className="categories__menu"
                >
                  Изменить
                  <EditIcon color={"#0E73FC"} />
                </button>
              }
            />
          </div>
        );
      },
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return {
    data: getCat
      ? filteredData?.map((item, index) => ({
          key: item?.id || index,
          number: (currentPage - 1) * pageSize + index + 1,
          ...item,
        }))
      : skeleton,
    columns,
    categories,
    setCategories,
    getCat,
    setSearchQuery,
    isOpenModal1,
    isOpenModal2,
    onCloseModal1,
    onCloseModal2,
    updateCategory,
    selectedCategoryId,
    handleDeleteCategory,
    setSelectedCategoryId,
  };
};
export default useCategoriesProps;
