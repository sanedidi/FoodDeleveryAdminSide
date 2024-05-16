import React from "react";

const CategoryImage = ({ item }) => (
  <img src={`https://${item?.photo}`} alt="sdre" width={20} height={20} />
);

export default CategoryImage;
