import { Box, FormControl } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { CustomTable } from 'components/CustomTable';
import { EditModal } from 'components/EditModal';
import { Input } from 'components/Input';
import { useMentorsProps } from './useMentorsProps';
import { AddModal } from 'components/AddModal';
import { Header } from 'components/Header';

export const Mentors = () => {
  const {
    nPages,
    currentPage,
    setCurrentPage,
    isOpen,
    isOpenEdit,
    handleEditClose,
    handleOpen,
    handleClose,
    columns,
    data,
    handleSubmit,
    onSubmit,
    handleUpdateUser,
    handleDeleteUser,
    activeUserId,
    register,
    setActiveUserId,
  } = useMentorsProps();

  return (
    <Box className={cls.content}>
      <Header
        title="Менторы"
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        handleAccept={handleSubmit(onsubmit)}
        register={register}
      />
      <Box className={cls.table}>
        <CustomTable columns={columns} data={data} />
      </Box>

      {/* Modal */}
      <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={handleClose}>
        <FormControl as="form">
          <Box className={cls.wrapper}>
            <Input type="text" placeholder="Имя" register={register} name="first_name" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="text" placeholder="Фамилия" register={register} name="last_name" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="number" placeholder="Номер телефона" register={register} name="phone_number" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="email" placeholder="Email" register={register} name="email" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="password" placeholder="Пароль" register={register} name="password" />
          </Box>
        </FormControl>
      </AddModal>
      <EditModal
        handleDelete={handleDeleteUser}
        handleAccept={handleSubmit(handleUpdateUser)}
        id={activeUserId}
        isOpen={isOpenEdit}
        register={register}
        onClose={() => {
          handleEditClose();
          setActiveUserId('');
        }}
      >
        <FormControl as="form">
          <Box className={cls.wrapper}>
            <Input type="text" placeholder="Имя" register={register} name="first_name" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="text" placeholder="Фамилия" register={register} name="last_name" />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="number" placeholder="Номер телефона" name="phone_number" register={register} />
          </Box>
          <Box className={cls.wrapper}>
            <Input type="email" placeholder="Email" register={register} name="email" />
          </Box>
        </FormControl>
      </EditModal>
    </Box>
  );
};
