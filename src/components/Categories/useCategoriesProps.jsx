import { TrashIcon } from "components/SvgComponents/SvgComponents";
import {
  AiOutlineEllipsis,
  CategoryFilterIcon,
  CategoryImage,
  CustomBtn,
  DeleteIcon,
  EditIcon,
  IoEye,
  MenuComp,
  React,
  Skeleton,
  Stack,
  s,
  useDeleteCategory,
  useDisclosure,
  useGetCategoriesService,
  useState,
  CustomModal,
} from "./imports";
import { Box } from "@chakra-ui/react";
const useCategoriesProps = () => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const [categories, setCategories] = useState([]);
  const { data: getCat, refetch } = useGetCategoriesService();
  const [searchQuery, setSearchQuery] = useState("");
  const { mutate: deleteCategory } = useDeleteCategory({
    onSuccess: () => refetch(),
  });

  const filteredData = getCat?.Data?.category?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleDeleteCategory = async (categoryId) => {
    await deleteCategory(categoryId);
    refetch();
  };

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
                    setActiveGroupId(item?.id);
                    onOpenModal();
                  }}
                />
              }
              ListMenu={
                <button
                  className={s.categories__menu}
                  onClick={() => {
                    // handleDeleteCategory(item.id);
                    onOpenModal();
                  }}
                >
                  Удалить
                  <DeleteIcon color={"#0E73FC"} />
                </button>
              }
              ListMenu1={
                <div className={s.categories__menu}>
                  Изменить
                  <EditIcon color={"#0E73FC"} />
                  <CustomModal
                    isOpenModal={isOpenModal}
                    onCloseModal={onCloseModal}
                    modalTitle={
                      <Box
                        margin={"0 auto"}
                        textAlign={"center"}
                        width={"max-content"}
                      >
                        <TrashIcon />
                      </Box>
                    }
                    modalContent={
                      <Box
                        fontWeight={"600"}
                        fontSize={"20px"}
                        textAlign={"center"}
                      >
                        Вы уверены, что хотите удалить этот товар?
                      </Box>
                    }
                    secondaryBtnText={<Box>Нет</Box>}
                    ModalBtnBgColor={"blue"}
                    primaryBtnText="Да"
                    onPrimaryBtnClick={() => {
                      handleDeleteCategory(item.id);
                      onCloseModal();
                    }}
                  />
                </div>
              }
              ListMenu3={
                <div className={s.categories__menu}>
                  Показать
                  <IoEye color={"#0E73FC"} />
                </div>
              }
            />
          </div>
        );
      },
    },
  ];

  return {
    data: getCat
      ? filteredData?.map((item, index) => ({
          key: item?.id || index,
          ...item,
        }))
      : skeleton,
    columns,
    categories,
    setCategories,
    getCat,
    setSearchQuery,
  };
};

export default useCategoriesProps;
