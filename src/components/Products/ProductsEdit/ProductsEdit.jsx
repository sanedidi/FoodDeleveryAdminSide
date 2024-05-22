import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from 'components/Header/Header';
import { CustomBtn, Box, CustomInput, Lang, Textarea } from 'public/imports';
import s from './ProductsEdit.module.scss';

export const ProductsEdit = () => {
  const { productId } = useParams();
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
    status: false
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://food-delivery-api-n6as.onrender.com/v1/product/${productId}`, productData);
      // Handle successful update (e.g., redirect or show a message)
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <>
      <Header title="Edit" headerBtn1={<CustomBtn BgColor="blue" BtnContent="Save" onClick={handleSubmit} />} />
      <Box>
        <Box>
          <form className={s.edit} onSubmit={handleSubmit}>
            <Box className={s.edit__left}>
              <Box className={s.edit__top}>
                <h2 className={s.edit__title}>Продукт</h2>
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
                    placeholder="Enter Description"
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                  />
                </Box>
                {/* Repeat similar structure for other fields */}
              </Box>
            </Box>
            <Box className={s.edit__right}>
              <Box className={s.edit__info}>
                <h2 className={s.edit__info_title}>Информация</h2>
                <Box className={s.edit__bottom}>
                  <Box className={s.edit__info_items}>
                    <CustomInput
                      InputPlaceHolder="Категория"
                      name="category_id"
                      value={productData.category_id}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      InputPlaceHolder="Филиал"
                      name="branch_id"
                      value={productData.branch_id}
                      onChange={handleInputChange}
                    />
                    <CustomInput
                      InputPlaceHolder="Артикул"
                      name="articul"
                      value={productData.articul}
                      onChange={handleInputChange}
                    />
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
          </form>
        </Box>
      </Box>
    </>
  );
};
export default ProductsEdit