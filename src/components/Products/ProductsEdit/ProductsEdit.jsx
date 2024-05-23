import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from 'components/Header/Header';
import { CustomBtn, Box, CustomInput, Lang, Textarea, Select, toast, Toaster } from 'public/imports';
import s from './ProductsEdit.module.scss';

export const ProductsEdit = () => {
  const { productId } = useParams();
  const [branches, setBranches] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category_id: '',
    branch_id: '',
    income_price: '',
    sale_price: '',
    articul: '',
    storage_code: '',
    tax_code: '',
    packaging_code: '',
    status: false,
    photo: null,
    image_url: '',
  });

  const [newPhoto, setNewPhoto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`);
        const product = response.data.Data;
        setProductData({
          ...product,
          image_url: product.image_url || '',
        });
      } catch (error) {
        console.error('Ошибка при получении данных продукта:', error);
      }
    };

    const fetchCategoriesAndBranches = async () => {
      try {
        const categoriesResponse = await axios.get(`https://food-delivery-api-n6as.onrender.com/v1/categories`);
        const branchesResponse = await axios.get(`https://food-delivery-api-n6as.onrender.com/v1/branches`);
        setCategories(categoriesResponse.data.Data.category);
        setBranches(branchesResponse.data.Data.branches);
      } catch (error) {
        console.error('Ошибка при получении категорий или филиалов:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
    fetchCategoriesAndBranches();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setProductData({
        ...productData,
        [name]: files[0]
      });
      setNewPhoto(URL.createObjectURL(files[0]));
    } else {
      setProductData({
        ...productData,
        [name]: type === 'checkbox' ? checked : value
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
      await axios.put(`https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Продукт успешно обновлен!")
      setTimeout(() => {
        navigate("/admin/categories/products/")
      }, 1000)
      setProductData({ ...productData, photo: null });
    } catch (error) {
      toast.error("Что то пошло не так попробуйте еще раз!")

    }
  };

  return (
    <>
      <Header title="Редактировать" headerBtn1={<CustomBtn BgColor="blue" BtnContent="Сохранить" onClick={handleSubmit} />} />
      <Toaster />
      <Box className={s.edit__wrapper}>
        <form className={s.edit} onSubmit={handleSubmit}>
          <Box className={s.edit__left}>
            <Box className={s.edit__top}>
              <h2 className={s.edit__title}>Товар</h2>
              <Box>
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
                    <Select
                      placeholder="Выберите Категорию"
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
                    <CustomInput
                      InputPlaceHolder="income_price"
                      name="income_price"
                      value={productData.income_price}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      InputPlaceHolder="sale_price"
                      name="sale_price"
                      value={productData.sale_price}
                      onChange={handleInputChange}
                    />
                  </Box>
                  <Box className={s.edit__art}>
                    <CustomInput
                      InputPlaceHolder="Артикул"
                      name="articul"
                      value={productData.articul}
                      onChange={handleInputChange}
                    />
                  </Box>
                  <Select
                    placeholder="Выберите Филиал"
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
                  <Box className={s.edit__inputs}>
                    <CustomInput
                      InputPlaceHolder="Код хранилища"
                      name="storage_code"
                      value={productData.storage_code}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      InputPlaceHolder="Код налога"
                      name="tax_code"
                      value={productData.tax_code}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      InputPlaceHolder="Код упаковки"
                      name="packaging_code"
                      value={productData.packaging_code}
                      onChange={handleInputChange}
                    />
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
                <Box className={s.edit__current_image}>
                  {productData.photo && (
                    <img src={`https://${productData.photo}`} alt="Текущий продукт" className={s.edit__image_preview} />
                  )}
                </Box>
                <Box className={s.edit__new_image}>
                  <label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                  </label>
                  {newPhoto && (
                    <img src={newPhoto} alt="Новое фото" className={s.edit__image_preview} />
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
    </>
  );
};

export default ProductsEdit;