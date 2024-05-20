import axios from "axios";
import {
  Box,
  Lang,
  Select,
  makeAnimated,
  s,
  useState,
  useEffect,
  CustomInput,
  Textarea,
} from "./imports";
import useMainProdProps from "./useMainProdProps";

const animatedComponents = makeAnimated();

export const MainProd = () => {
  const {
    branches,
    setBranches,
    selectedFile,
    setSelectedFile,
    formData,
    setFormData,
    categories,
    setCategories,
    handleFileChange,
    handleCheckboxChange,
  } = useMainProdProps();

  useEffect(() => {
    axios
      .get("https://food-delivery-api-n6as.onrender.com/v1/branches")
      .then((response) => {
        setBranches(response.data.Data.branches);
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });

    axios
      .get("https://food-delivery-api-n6as.onrender.com/v1/categories")
      .then((response) => {
        setCategories(response.data.Data.category);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category_id ||
      !formData.branch_id ||
      !selectedFile
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (
      isNaN(formData.income_price) ||
      isNaN(formData.sale_price) ||
      isNaN(formData.quantity)
    ) {
      alert("Please enter valid numeric values for price and quantity.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append("photo", selectedFile);

    console.log("Submitting form data:", Object.fromEntries(data.entries()));

    try {
      const response = await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(`Updated formData:`, { ...formData, [name]: value });
  };

  return (
    <Box className={s.prod}>
      <Box className={s.prod__left}>
        <Box className={s.prod__top}>
          <h2 className={s.prod__title}>Продукт </h2>
          <Box>
            <input
              type="checkbox"
              id="status"
              className={s.checkbox}
              onChange={handleCheckboxChange}
              checked={formData.status}
            />
            <label htmlFor="status" className={s.switch}></label>
          </Box>
        </Box>
        <Box className={s.prod__lang}>
          <Lang />
        </Box>
        <Box className={s.prod__bottom}>
          <form onSubmit={handleSubmit}>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}> Название</h2>
              <CustomInput
                InputPlaceHolder={"Введите название"}
                name="name"
                className={s.prod__we}
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Описание</h2>
              <Textarea
                placeholder="Enter Description"
                name="description"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Категория</h2>
              <Select
                placeholder="Выберите Категорию"
                options={
                  Array.isArray(categories)
                    ? categories.map((category) => ({
                        value: category.id,
                        label: category.name,
                      }))
                    : []
                }
                name="category_id"
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    category_id: selectedOption.value,
                  })
                }
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Филлиалы</h2>
              <Select
                placeholder="Выбирите Филлиал"
                options={
                  Array.isArray(branches)
                    ? branches.map((branch) => ({
                        value: branch.id,
                        label: `${branch.address}`,
                      }))
                    : []
                }
                name="branch_id"
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    branch_id: selectedOption.value,
                  })
                }
              />
            </Box>
            <Box className={s.prod__price}>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Income Price</h2>
                <CustomInput
                  InputPlaceHolder="Enter income price"
                  name="income_price"
                  type="number"
                  onChange={handleInputChange}
                />
                <CustomInput
                  InputPlaceHolder="Enter articul"
                  name="articul"
                  type="number"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Sale Price</h2>
                <CustomInput
                  InputPlaceHolder="Enter sale price"
                  name="sale_price"
                  type="number"
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Box className={s.prod__price_input}>
              <h2 className={s.prod__bottom_title}>Packing Code</h2>
              <CustomInput
                InputPlaceHolder="packaging_code"
                name="packaging_code"
                type="number"
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <h2 className={s.prod__bottom_title}>*Количество</h2>
              <CustomInput
                style={{ backgroundColor: "transparent" }}
                placeholder="quantity"
                name="quantity"
                type="number"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Storage Code</h2>
              <input
                placeholder="Enter storage code"
                name="storage_code"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Tax Code</h2>
              <input
                style={{ backgroundColor: "transparent" }}
                placeholder="Enter tax code"
                name="tax_code"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Photo</h2>
              <input type="file" name="photo" onChange={handleFileChange} />
            </Box>
            <Box className={s.prod__name}>
              <button type="submit">Submit</button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className={s.prod__right}></Box>
    </Box>
  );
};

export default MainProd;
