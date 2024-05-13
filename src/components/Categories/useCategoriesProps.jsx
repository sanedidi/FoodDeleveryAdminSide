import React, { useState } from "react";
import { useGetCategoriesService } from "services/categories.service";

const useCategoriesProps = () => {
  const [categories, setCategories] = useState([]);

  const { data: getCat } = useGetCategoriesService();
  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "count",
      width: 88,
    },
    {
      title: "Товар",
      key: "name",
      width: 480,
      dataIndex: "name",
    },
    {
      title: "Артикул",
      key: "name",
      width: 480,
      dataIndex: "name",
    },
    {
      title: "Фото",
      width: 120,
      render: (item) => (
        <img src={item?.photo} alt="" width={20} height={20} />
      ),
    },
  ];

  return {
    data: getCat?.Data?.category?.map((item, index) => ({
      key: item?.id || index,
      ...item,
    })),
    columns,
    categories,
    setCategories,
    getCat,
  };
};

export default useCategoriesProps;
