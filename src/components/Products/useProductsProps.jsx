import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import MenuComp from "components/MenuComponent/MenuComp";
import { CategoryFilterIcon } from "components/SvgComponents/SvgComponents";
import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { useGetProductsService } from "services/products.service";
import s from '../Categories/Categories.module.scss'
const useProductsProps = () => {
  const { data: gg } = useGetProductsService();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = gg?.Data?.category?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(gg)
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
      dataIndex: "category_name",
      key: "category_name",
      width: 120,
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
                Onclick={() => {
                  onOpenE();
                  setActiveGroupId(item?.id);
                }}
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
            ListMenu3={
              <div className={s.categories__menu}>
                Показать
                <IoEye color={"#0E73FC"} />
              </div>
            }
          />
        </div>
      ),
    },
  ];

  return {
    data: filteredData?.map((item, index) => ({
      key: item?.id || index,
      number: index + 1,
      ...item,
    })),
    columns,
    setSearchQuery,
  };
};

export default useProductsProps;
