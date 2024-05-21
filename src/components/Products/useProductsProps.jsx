import { useState, useEffect } from "react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import MenuComp from "components/MenuComponent/MenuComp";
import { CategoryFilterIcon } from "components/SvgComponents/SvgComponents";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import s from "../Categories/Categories.module.scss";

const useProductsProps = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = "https://food-delivery-api-n6as.onrender.com/v1/products";

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data.Data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const CategoryName = filteredProducts?.map((e) => e.CategoryData.name);
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
        const product = filteredProducts.find(
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
              />
            }
            ListMenu={
              <div className={s.categories__menu}>
                Удалить
                <DeleteIcon color={"#0E73FC"} />
              </div>
            }
            ListMenu1={
              <div className={s.categories__menu}>
                Изменить
                <EditIcon color={"#0E73FC"} />
              </div>
            }
          />
        </div>
      ),
    },
  ];

  return {
    data: filteredProducts.map((item, index) => ({
      key: item.id || index,
      number: index + 1,
      ...item,
      CategoryName: item.CategoryData.name,
    })),
    columns,
    setSearchQuery,
  };
};

export default useProductsProps;
