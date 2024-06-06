import React, { useEffect, useRef } from "react";
import {
  Link,
  CustomBtn,
  CustomInput,
  Box,
  Stack,
  CustomModal,
  Header,
  PlusIcon,
  TrashIcon,
  UnderHeader,
  DownloadIcon,
  useSearchParams,
} from "public/imports";
import { ChevronLeftIcon, ChevronRightIcon, Search2Icon } from "@chakra-ui/icons";
import { CustomTable } from "components/Custom/CustomTable/CustomTable";
import html2canvas from "html2canvas";
import { Skeleton } from "antd";
import useCategoriesProps from "./useCategoriesProps";
import s from './Categories.module.scss'
import ReactPaginate from "react-paginate";

export const Categories = () => {
  const {
    isOpenModal2,
    onCloseModal2,
    setSearchQuery, 
    columns,
    data,
    selectedCategoryId,
    handleDeleteCategory,
    isLoading,
    setIsLoading,
    paginationData,
    fetchCategories
  } = useCategoriesProps();
  const { current, totalPages } = paginationData;
  const [searchParams, setSearchParams] = useSearchParams();

  const categoriesWrapperRef = useRef(null);

  const handleDownload = () => {
    if (categoriesWrapperRef.current) {
      html2canvas(categoriesWrapperRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "categories.png";
          link.click();
        }, "image/png");
      });
    }
  };

  const handlePageChange = (selectedPage) => {
    setSearchParams({ ...searchParams, page: selectedPage });
  };

  useEffect(() => {
    fetchCategories(searchParams.page, searchParams.limit, searchParams.search);
  }, [searchParams]); 

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header
        headerBtn2={
          <Link to={"/admin/categories/add"} className="header_btn1">
            <PlusIcon /> Добавить
          </Link>
        }
        title={"Категории"}
      />
      <Box className={s.categories}>
        <UnderHeader
          firstItem={
            <CustomInput
              InputIcon={<Search2Icon color={"blue"} />}
              InputPlaceHolder={"Поиск..."}
              onChange={(e) => setSearchQuery(e.target.value)} // Set search query
            />
          }
          thirdItem={
            <CustomBtn
              onClick={handleDownload} // Corrected onClick function
              BtnContent={
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <DownloadIcon color={"blue"} />
                  <p style={{ color: "#000", fontWeight: "500" }}>Скачать</p>
                </Box>
              }
              BgColor={"white"}
              BtnBorder={"1px solid #E5E9EB"}
            />
          }
        />
        <Box className={s.categories__wrapper} ref={categoriesWrapperRef}>
          {isLoading ? (
            <Stack>
              <Skeleton height="40px" />
            </Stack>
          ) : (
            <CustomTable key={isLoading} columns={columns} data={data} />
          )}
        </Box>
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

export default Categories;
