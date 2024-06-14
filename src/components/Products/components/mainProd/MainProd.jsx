import {
  Box,
  Lang,
  Select,
  makeAnimated,
  useState,
  useEffect,
  CustomInput,
  Textarea,
  CustomBtn,
  toast,
  Toaster,
  useNavigate,
  PLusCIrcleIcon,
} from "public/imports";
import s from "./MainPros.module.scss";
import useMainProdProps from "./useMainProdProps";
import request from "services/httpRequest";

const animatedComponents = makeAnimated();

export const MainProd = () => {
  const navigate = useNavigate();
  const {
    branches,
    setBranches,
    selectedFile,
    setSelectedFile,
    formData,
    setFormData,
    categories,
    setCategories,
    handleFileChange: handleFileChangeProps,
    handleCheckboxChange,
  } = useMainProdProps();

  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/branches")
      .then((response) => {
        setBranches(response.data.Data.branches);
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });

    request
      .get("https://food-delivery-api-n6as.onrender.com/v1/categories")
      .then((response) => {
        setCategories(response.data.Data.category);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
    handleFileChangeProps(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category_id ||
      !formData.branch_id ||
      !selectedFile
    ) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    if (isNaN(formData.income_price) || isNaN(formData.sale_price)) {
      toast.error("Please enter valid numeric values for price.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append("photo", selectedFile);

    try {
      const response = await request.post(
        "https://food-delivery-api-n6as.onrender.com/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Продукт успешно сохранен!");
      setTimeout(() => {
        navigate("/admin/categories/products");
      }, 1000);
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
  };

  return (
    <Box>
      <Toaster />
      <form className={s.prod} onSubmit={handleSubmit}>
        <Box className={s.prod__left}>
          <Box className={s.prod__top}>
            <h2 className={s.prod__title}>Продукт </h2>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              Статус:
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
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Название</h2>
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
              <h2 className={s.prod__bottom_title}>Категории</h2>
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
            <Box className={s.prod__price}>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Цена прихода</h2>
                <CustomInput
                  InputPlaceHolder="Введите цену прихода"
                  name="income_price"
                  type="number"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Цена продаж</h2>
                <CustomInput
                  InputPlaceHolder="Введите цену продаж"
                  name="sale_price"
                  type="number"
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Артикул</h2>
              <CustomInput
                InputPlaceHolder="Введите артикул "
                name="articul"
                type="number"
                onChange={handleInputChange}
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
            <Box className={s.prod__inputs}>
              <Box className={s.prod__input}>
                <h2 className={s.prod__bottom_title}>
                  *Код единицы измерения{" "}
                </h2>
                <CustomInput
                  InputPlaceHolder="Введите код"
                  name="storage_code"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__input}>
                <h2 className={s.prod__bottom_title}>*Код ИКПУ</h2>
                <CustomInput
                  InputPlaceHolder="Введите код"
                  name="tax_code"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__input}>
                <h2 className={s.prod__bottom_title}>*Код упаковки</h2>
                <CustomInput
                  InputPlaceHolder="Введите код"
                  name="packaging_code"
                  type="number"
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={s.prod__right}>
          <Box className={s.prod__name}>
            <Box className={s.prod__preview}>
              <label className={s.prod__photo}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                />
                <span>
                  <PLusCIrcleIcon />{" "}
                </span>
              </label>
              <Box className={s.prod__tws}>
                {previewURL && (
                  <img
                    src={previewURL}
                    alt="Selected file preview"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                )}
              </Box>
            </Box>

            <CustomBtn
              BtnContent={
                <>
                  <p style={{ color: "#fff" }}>Сохранить</p>
                </>
              }
              BgColor={"blue"}
              type="submit"
              BtnBorder={"1px solid #e7e7e7"}
            />
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default MainProd;
