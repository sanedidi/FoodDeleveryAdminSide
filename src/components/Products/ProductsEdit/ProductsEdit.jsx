import {
  CustomBtn,
  Box,
  CustomInput,
  Lang,
  Textarea,
  Select,
  toast,
  Toaster,
  Header,
  axios,
  React,
  useEffect,
  useNavigate,
  useParams,
  PLusCIrcleIcon,
  Link,
} from "public/imports";
import s from "./ProductsEdit.module.scss";
import useProductsEditProps from "./useProductsEditProps";
import { CloseIcon } from "@chakra-ui/icons";

const generateArticul = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const ProductsEdit = () => {
  const {
    branches,
    setBranches,
    categories,
    setCategories,
    productData,
    setProductData,
    newPhoto,
    setNewPhoto,
  } = useProductsEditProps();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`
        );
        const product = response.data.Data;
        setProductData({
          ...product,
          image_url: product.image_url || "",
        });
      } catch (error) {
        console.error("Ошибка при получении данных продукта:", error);
      }
    };

    const fetchCategoriesAndBranches = async () => {
      try {
        const categoriesResponse = await axios.get(
          `https://food-delivery-api-n6as.onrender.com/v1/categories`
        );
        const branchesResponse = await axios.get(
          `https://food-delivery-api-n6as.onrender.com/v1/branches`
        );
        setCategories(categoriesResponse.data.Data.category);
        setBranches(branchesResponse.data.Data.branches);
      } catch (error) {
        console.error("Ошибка при получении категорий или филиалов:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
    fetchCategoriesAndBranches();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setProductData({
        ...productData,
        [name]: files[0],
      });
      setNewPhoto(URL.createObjectURL(files[0]));
    } else {
      setProductData({
        ...productData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    try {
      await axios.put(
        `https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Продукт успешно обновлен!");
      setTimeout(() => {
        navigate("/admin/categories/products/");
      }, 1000);
      setProductData({ ...productData, photo: null });
    } catch (error) {
      toast.error("Что то пошло не так попробуйте еще раз!");
    }
  };
  return (
    <>
      <Header
        title="Редактировать"
        headerBtn1={
          <Link
            to={"/admin/categories/products?page=1"}
            style={{
              display: "flex",
              alignItems: "center",
              color: "red",
              gap: "10px",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "16px",
              border: "1px solid red",
            }}
          >
            Отменить
          </Link>
        }
      />
      <Toaster />
      <Box className={s.edit__wrapper}>
        <form className={s.edit} onSubmit={handleSubmit}>
          <Box className={s.edit__left}>
            <Box className={s.edit__top}>
              <h2 className={s.edit__title}>Товар</h2>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                Статус:
                <input
                  type="checkbox"
                  id="status"
                  name="status"
                  checked={productData.status}
                  onChange={handleInputChange}
                  className={s.checkbox}
                />
                <label htmlFor="status" className={s.switch}></label>
              </Box>
            </Box>
            <Box className={s.edit__lang}>
              <Lang />
            </Box>
            <Box className={s.edit__bottom}>
              <Box className={s.edit__name}>
                <h2 className={s.edit__bottom_title}>Название</h2>
                <CustomInput
                  InputPlaceHolder="Введите название"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  className={s.edit__we}
                />
              </Box>
              <Box className={s.edit__name}>
                <h2 className={s.edit__bottom_title}>Описание</h2>
                <Textarea
                  placeholder="Введите описание"
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                />
              </Box>

              <Box className={s.edit__info}>
                <Box className={s.edit__info_items}>
                  <Box className={s.edit__cat}>
                    <h2 className={s.edit__bottom_title}>Категории</h2>
                    <Select
                      placeholder={productData.name}
                      options={
                        Array.isArray(categories)
                          ? categories.map((category) => ({
                              value: category.id,
                              label: `${category.name}`,
                            }))
                          : []
                      }
                      name="category_id"
                      onChange={(selectedOption) =>
                        setProductData({
                          ...productData,
                          category_id: selectedOption.value,
                        })
                      }
                    />
                  </Box>
                  <Box className={s.edit__price}>
                    <Box className={s.edit__input}>
                      <h2 className={s.edit__bottom_title}>Цена прихода</h2>
                      <CustomInput
                        InputPlaceHolder="income_price"
                        name="income_price"
                        value={productData.income_price}
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Box className={s.edit__input}>
                      <h2 className={s.edit__bottom_title}>Цена продаж</h2>
                      <CustomInput
                        InputPlaceHolder="sale_price"
                        name="sale_price"
                        value={productData.sale_price}
                        onChange={handleInputChange}
                      />
                    </Box>
                  </Box>
                  <Box className={s.edit__art}>
                    <h2 className={s.edit__bottom_title}>Артикул</h2>
                    <Box className={s.edit__gen}>
                      <CustomInput
                        disabled={true}
                        className={s.edit__gen_input}
                        InputPlaceHolder="Артикул"
                        name="articul"
                        value={productData.articul}
                        onChange={handleInputChange}
                      />
                    </Box>
                  </Box>
                  <Box className={s.edit__cat}>
                    <h2 className={s.edit__bottom_title}>Филлиал</h2>
                    <Select
                      placeholder="Выберите Филлиал"
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
                        setProductData({
                          ...productData,
                          branch_id: selectedOption.value,
                        })
                      }
                    />
                  </Box>
                  <Box className={s.edit__inputs}>
                    <Box className={s.edit__input}>
                      <h2 className={s.edit__bottom_title}>
                        *Код единицы измерения
                      </h2>
                      <CustomInput
                        InputPlaceHolder="Введите код"
                        name="storage_code"
                        value={productData.storage_code}
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Box className={s.edit__input}>
                      <h2 className={s.edit__bottom_title}>Код ИКПУ</h2>
                      <CustomInput
                        InputPlaceHolder="Введите код"
                        name="tax_code"
                        value={productData.tax_code}
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Box className={s.edit__input}>
                      <h2 className={s.edit__bottom_title}>Код упаковки</h2>
                      <CustomInput
                        InputPlaceHolder="Введите код"
                        name="packaging_code"
                        value={productData.packaging_code}
                        onChange={handleInputChange}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={s.edit__right}>
            <Box className={s.edit__image}>
              <Box className={s.edit__top}>
                <h2 className={s.edit__title}>Фото</h2>
              </Box>
              <Box className={s.edit__images_container}>
                <Box className={s.edit__new_image}>
                  <label className={s.edit__photo}>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                    <span>
                      <PLusCIrcleIcon />
                    </span>
                  </label>
                </Box>
                <Box
                  className={`${s.edit__current_image} ${
                    newPhoto ? s.none : ""
                  }`}
                >
                  {productData.photo && (
                    <img
                      src={`${productData.photo}`}
                      alt="Текущий продукт"
                      className={s.edit__image_preview}
                    />
                  )}
                </Box>
                {newPhoto && (
                  <img
                    src={newPhoto}
                    alt="Новое фото"
                    className={s.edit__image_preview}
                  />
                )}
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
    </>
  );
};

export default ProductsEdit;
