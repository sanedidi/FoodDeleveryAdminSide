import { useState } from "react";

export const useMainProdProps = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [branches, setBranches] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    articul: "",
    branch_id: "",
    category_id: "",
    description: "",
    income_price: "",
    name: "",
    packaging_code: "",
    sale_price: "",
    storage_code: "",
    tax_code: "",
    status: false,
  });

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, status: checked }));
  };

  return {
    selectedFile,
    setSelectedFile,
    formData,
    setFormData,
    branches,
    setBranches,
    categories,
    setCategories,
    handleFileChange,
    handleCheckboxChange,
  };
};

export default useMainProdProps;
