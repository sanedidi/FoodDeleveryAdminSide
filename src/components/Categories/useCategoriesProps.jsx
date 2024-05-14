import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import CustomBtn from "components/Custom/CustomBtn/CustomBtn";
import MenuComp from "components/MenuComponent/MenuComp";
import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useGetCategoriesService } from "services/categories.service";
import s from "./Categories.module.scss";
import { DetailsOutlined, ShowChart } from "@mui/icons-material";
import { Show } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { CategoryFilterIcon } from "components/SvgComponents/SvgComponents";

const useCategoriesProps = () => {
  const [categories, setCategories] = useState([]);
  const { data: getCat } = useGetCategoriesService();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = getCat?.Data?.category?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      render: (item) => (
        <img
          src={`https://${item?.photo}`}
          alt="sdre"
          width={20}
          height={20}
          
        />
      ),
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
        );
      },
    },
  ];

  return {
    data: filteredData?.map((item, index) => ({
      key: item?.id || index,
      ...item,
    })),
    columns,
    categories,
    setCategories,
    getCat,
    setSearchQuery,
  };
};

export default useCategoriesProps;
