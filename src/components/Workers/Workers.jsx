import React, { useEffect } from "react";
import s from "./Workers.module.scss";
import {
  Box,
  CustomInput,
  CustomModal,
  CustomTable,
  Header,
  Link,
  PlusIcon,
  Search2Icon,
  TrashIcon,
  UnderHeader,
  useSearchParams,
} from "public/imports";
import useWorkersProps from "./useWorkersProps";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";

export const Workers = () => {
  const {
    columns,
    data,
    handleDeleteCategory,
    isOpenModal2,
    onCloseModal2,
    paginationData,
    selectedCategoryId,
    fetchCategories,
  } = useWorkersProps();

  const { current, totalPages } = paginationData;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";

  const handlePageChange = (selectedPage) => {
    setSearchParams({ ...searchParams, page: selectedPage });
  };

  useEffect(() => {
    fetchCategories(page, limit, search);
  }, [page, limit, search]);

  return (
    <>
      <Header
        title={"Каталог"}
        headerBtn2={
          <Link to={"/admin/workers/add/"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
      />
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
      />
      <Box className={s.orders__tabs}>
        <Box className={s.orders__tabs_wrapper}>
          <Box className={s.orders__tabs_table}>
            <CustomTable columns={columns} data={data} />
          </Box>
        </Box>
      </Box>
        <Box className={s.orders__tabs_pag}>
          <ReactPaginate
            previousLabel={<ChevronLeftIcon />}
            nextLabel={<ChevronRightIcon />}
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
      <CustomModal
        isOpenModal={isOpenModal2}
        onCloseModal={onCloseModal2}
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
          handleDeleteCategory(selectedCategoryId);
          onCloseModal2();
        }}
      />
    </>
  );
};

export default Workers;
