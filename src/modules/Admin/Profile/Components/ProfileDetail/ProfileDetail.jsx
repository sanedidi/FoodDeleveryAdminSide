import { Container } from 'components/Container';
import Avatar from 'assets/img/icon/userAvatar.svg';
import cls from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useUpdateUserById } from 'services/users.service';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { Box, FormControl } from '@chakra-ui/react';
import React from 'react';
import { ProfileDetailHeader } from '../ProfileDetailHeader';
import DownloadIcon from 'assets/img/icon/download.svg'


export const ProfileDetail = () => {
  const userData = JSON.parse(localStorage.getItem('auth'));
  const activeUserId = userData?.userData?.id;

  const updateUser = useUpdateUserById();

  const handleEdit = (data) => {
    updateUser.mutate(
      {
        ...data,
        id: activeUserId,
      },
      // {
      //   onSuccess: (res) => {
      //     authStore.updateUserData({
      //       id: res?.id,
      //       role_id: res?.role_id,
      //       first_name: res?.first_name,
      //       last_name: res?.last_name,
      //       email: res?.email,
      //       phone_number: res?.phone_number,
      //       password: res?.password,
      //       user_type: res?.user_type,
      //     });
      //     authStore.login();
      //   },
      // },
    );
  };

  const { register, reset, handleSubmit } = useForm();
  
  useEffect(() => {
    const data = userData?.userData?.data;

    reset({
      first_name: data?.first_name,
      last_name: data?.last_name,
      phone_number: data?.phone_number,
      user_type: data?.user_type,
      email: data?.email,
    });
  }, []);

  const fileInputRef = useRef(null); 

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <Box className={cls.wrapper}>
      <ProfileDetailHeader />
      <Container>
        <Box className={cls.wrapperTop}>
            <img src={Avatar} alt="Avatar" width={200} height={200} />
            <Box className={cls.wrapperRight}>
              <Box>
                <button className={cls.btn} onClick={handleClick} type="button">Загрузить фото</button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className={cls.fileInput} 
                />
                <button className={cls.btnDelete}>Удалить фото</button>
              </Box>
              <p className={cls.desc}>Рекомендуемый размер: максимальный квадрат 1000 пикселей. Тип файла: JPG и PNG</p>
            </Box>
        </Box>
        <FormControl onSubmit={handleSubmit(handleEdit)} as="form">
          <Box className={cls.inputEditerBox}>
            <Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="email">
                  Имя
                </label>

                <Input id="name" type="text" placeholder="Введите e-mail" register={register} name="first_name" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Телефон номера
                </label>

                <Input id="name" type="number" register={register} name="phone_number" />
              </Box>
              <Box className={cls.btnWraper}>
                <button className={cls.cancelBtn}>Отменить</button>
                <button className={cls.saveBtn}>Сохранить изменения</button>
              </Box>
            </Box>
            <Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Фамилия
                </label>

                <Input id="name" type="text" register={register} name="last_name" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Адресс почты
                </label>

                <Input id="name" type="email" placeholder="Введите e-mail" register={register} name="email" />
              </Box>
            </Box>
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};