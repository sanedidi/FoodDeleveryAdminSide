import React, { useRef } from "react";
import s from "./Workers.module.scss";
import {
  Box,
  CustomInput,
  CustomTable,
  Header,
  Link,
  PlusIcon,
  Search2Icon,
  UnderHeader,
  useSearchParams,
} from "public/imports";
import useWorkersProps from "./useWorkersProps";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";
export const Workers = () => {
  const {
    columns,
    categories,
    data,
    fetchCategories,
    handleDeleteCategory,
    isLoading,
    isOpenModal1,
    isOpenModal2,
    onCloseModal1,
    onCloseModal2,
    paginationData,
    setCategories,
    setIsLoading,
    setSearchQuery,
    setSelectedCategoryId,
  } = useWorkersProps();
  const { current, totalPages } = paginationData;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const limit = +searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";
  const categoriesWrapperRef = useRef(null);
  const handlePageChange = (selectedPage) => {
    setSearchParams({ ...searchParams, page: selectedPage });
  };
  return (
    <>
      <Header
        title={"Католог"}
        headerBtn2={
          <>
            <Link to={""} className="header_btn1">
              <PlusIcon /> Добавить
            </Link>
          </>
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
      <div>
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
            forcePage={current - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => handlePageChange(selected + 1)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"activePagination"}
            className={s.products_pag}
            initialPage={current - 1}
          />
        </Box>
      </div>
    </>
  );
};

export default Workers;
