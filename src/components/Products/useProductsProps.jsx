import { useEffect } from "react";
import {
  Box,
  Link,
  DeleteIcon,
  EditIcon,
  CategoryFilterIcon,
  AiOutlineEllipsis,
  MenuComp,
  useState,
} from "public/imports";
import s from "../Categories/Categories.module.scss";
import request from "services/httpRequest";

const useProductsProps = () => {
  const [products, setProducts] = useState([]);
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const onOpenModal1 = () => setIsOpenModal1(true);
  const onCloseModal1 = () => setIsOpenModal1(false);
  const onOpenModal2 = () => setIsOpenModal2(true);
  const onCloseModal2 = () => setIsOpenModal2(false);

  const getProducts = async (page = 1, limit = 10, search = "") => {
    setIsLoading(true);
    try {
      const response = await request.get("/products", {
        params: {
          page: !!search.length ? null : page,
          limit: !!search.length ? null : limit,
          search,
        },
      });
      const fetchedProducts = response.data.Data.products;
      if (fetchedProducts.length === 0) {
        console.log("Ничего не найдено по вашему запросу");
      }
      setProducts(fetchedProducts);
      setTotalPages(Math.ceil(response.data.Data.count / limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "No",
      key: "number",
      dataIndex: "number",
      width: 0,
    },
    {
      title: "Продукт",
      dataIndex: "name",
      key: "name",
      width: 120,
    },
    {
      title: "Категория",
      dataIndex: "category_id",
      key: "category_id",
      width: 120,
      render: (categoryId) => {
        const product = products.find(
          (prod) => prod.category_id === categoryId
        );
        return product ? product.CategoryData.name : "";
      },
    },
    {
      title: "Цена Продажи",
      dataIndex: "sale_price",
      key: "sale_price",
      width: 120,
    },
    {
      title: "Дата создания",
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
      width: 20,
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
                to={`/admin/categories/products/edit/${item.id}`}
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
    data: products.map((item, index) => ({
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
    getProducts,
    setIsOpenModal2,
  };
};

export default useProductsProps;
