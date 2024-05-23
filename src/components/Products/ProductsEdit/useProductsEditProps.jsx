import { useState, React } from "public/imports";
const useProductsEditProps = () => {
  const [branches, setBranches] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newPhoto, setNewPhoto] = useState(null);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category_id: "",
    branch_id: "",
    income_price: "",
    sale_price: "",
    articul: "",
    storage_code: "",
    tax_code: "",
    packaging_code: "",
    status: false,
    photo: null,
    image_url: "",
  });
  return {
    branches,
    setBranches,
    categories,
    setCategories,
    productData,
    setProductData,
    newPhoto,
    setNewPhoto,
  };
};

export default useProductsEditProps;
