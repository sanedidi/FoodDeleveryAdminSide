import {
  CustomModal,
  React,
  useEffect,
  Header,
  Box,
  DownloadIcon,
  Search2Icon,
  Link,
  useSearchParams,
  PlusIcon,
  TrashIcon,
  CustomBtn,
  UnderHeader,
  CustomInput,
  CustomTable,
  axios,
  ReactPaginate,
  toast,
  Toaster,
} from "public/imports";

import useProductsProps from "./useProductsProps";
import s from "./Products.module.scss";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "components/SvgComponents/SvgComponents";

export const Products = () => {
  const {
    data,
    columns,
    isOpenModal2,
    setIsOpenModal2,
    selectedProductId,
    paginationData,
    isLoading,
    setIsLoading,
    getProducts,
    onCloseModal2,
  } = useProductsProps();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";

  const { current, totalPages } = paginationData;

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(
        `https://food-delivery-api-n6as.onrender.com/v1/product/${selectedProductId}`
      );
      toast.success("Продукт удален успешно");
      setIsOpenModal2(false);
      getProducts(page, limit, search);
    } catch (error) {
      toast.error("Что-то пошло не так, повторите попытку!");
    }
  };

  const handlePageChange = (event) => {
    setSearchParams({ ...searchParams, page: event.selected + 1 });
  };

  useEffect(() => {
    getProducts(page, limit, search);
  }, [page, limit, search]);

  return (
    <>
      <Header
        title={"Продукты "}
        headerBtn2={
          <Link to={"/admin/categories/products/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
      />
      <Toaster />
      <UnderHeader
        firstItem={
          <CustomInput
            InputPlaceHolder={"Поиск..."}
            onChange={(e) => {
              setSearchParams({ search: e.target.value });
            }}
            InputIcon={<Search2Icon color={"blue"} />}
          />
        }
        thirdItem={
          <CustomBtn
            BgColor={"white"}
            type={"button"}
            BtnBorder={"1px solid #E5E9EB"}
            BtnContent={
              <Box
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <DownloadIcon color={"blue"} />
                <p style={{ color: "#000", fontWeight: "500" }}>Скачать</p>
              </Box>
            }
          />
        }
      />
      <Box className={s.products__wrapper}>
        <CustomTable key={isLoading} columns={columns} data={data} />
        <Box className={s.products__pagination}>
          <ReactPaginate
            previousLabel={
              <>
                <ChevronLeftIcon />
              </>
            }
            nextLabel={
              <>
                <ChevronRightIcon />
              </>
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            current={current}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"activePagination"}
            className={s.products_pag}
            initialPage={page - 1}
          />
        </Box>
      </Box>
      <>
        <CustomModal
          isOpenModal={isOpenModal2}
          onCloseModal={() => setIsOpenModal2(false)}
          modalTitle={
            <Box margin={"0 auto"} textAlign={"center"} width={"max-content"}>
              <TrashIcon />
            </Box>
          }
          modalContent={
            <Box fontWeight={"600"} fontSize={"20px"} textAlign={"center"}>
              Вы уверены, что хотите удалить этот товар?
            </Box>
          }
          secondaryBtnText={<Box>Нет</Box>}
          ModalBtnBgColor={"blue"}
          primaryBtnText="Да"
          onPrimaryBtnClick={() => {
            deleteProduct();
          }}
        />
      </>
    </>
  );
};

export default Products;
