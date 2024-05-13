import React, { useState } from 'react';
import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import s from './style.module.scss';
import { Header } from 'components/Header';

export const CategoryDetail = ({ title }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.categoryDetail}>
      <Header title={'Общие сведения'} />
      <Box padding={20} className={s.categoryDetail__Allwrapper}>
        <div className={s.categoryDetail__wrapper}>
          <p className={s.categoryDetail__title}>Общие настройки</p>
          <hr />
          <form className={s.categoryDetail__form} onSubmit={handleSubmit}>
            <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px' }}>
              <Button
                as="label"
                htmlFor="imageInput"
                width={'100%'}
                height={150}
                background="white"
                border={'1px solid black'}
                cursor="pointer"
              >
                Макс размер 4 МБ
              </Button>
              <Box display={'flex'} flexDirection={'column'} gap={'20px'} alignItems={'start'}>
                <Input
                  width={300}
                  id="nameInput"
                  type="text"
                  placeholder="Введите название"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={s.categoryDetail__input}
                />
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />

                <Button className={s.categoryDetail__btn} type="submit" colorScheme="blue">
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </div>
      </Box>
    </div>
  );
};
