import { Box, Button, useToast } from '@chakra-ui/react';
import Edit from 'assets/img/icon/edit.svg';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import {
  useDeleteUserById,
  useGetUserById,
  useUpdateUserById,
  useCreateUser,
  useGetStudents,
} from 'services/users.service';
import { EditIcon } from '@chakra-ui/icons';

export const useStudentsProps = () => {
  const [state, setState] = useState({
    isOpen: false,
    isOpenEdit: false,
    currentPage: 1,
    recordsPerPage: 10,
  });
  const [activeUserId, setActiveUserId] = useState('');
  const { isOpen, isOpenEdit, currentPage, recordsPerPage } = state;

  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleOpenEdit = () => setState((prev) => ({ ...prev, isOpenEdit: true }));
  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
    reset();
  };
  const handleEditClose = () => {
    setState((prev) => ({ ...prev, isOpenEdit: false }));
    reset();
  };

  const { data: students, refetch } = useGetStudents();

  const nPages = Math.ceil(students?.count / recordsPerPage) || 1;
  const currentRecords = students?.users?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const { data: getUserById, isSuccess } = useGetUserById({ userId: activeUserId });

  const { mutate: createUser } = useCreateUser();

  const onSubmit = (data) => {
    createUser(
      {
        user_type: 'Student',
        ...data,
      },
      {
        onSuccess: () => {
          handleClose();
          reset();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно добавили пользователя',
            status: 'success',
          });
        },
        onError: (error) => {
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: error?.response?.data,
            status: 'error',
          });
        },
      },
    );
  };

  const { mutate: updateUser } = useUpdateUserById();

  const handleUpdateUser = (data) => {
    updateUser(
      {
        id: activeUserId,
        ...data,
      },
      {
        onSuccess: () => {
          refetch();
          handleEditClose();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно изменили данные пользователя',
            status: 'success',
          });
        },
        onError: (error) => {
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: error?.response?.data,
            status: 'error',
          });
        },
      },
    );
  };

  const { mutate: deleteUser } = useDeleteUserById();

  const handleDeleteUser = (data) => {
    deleteUser(
      {
        id: activeUserId,
        ...data,
      },
      {
        onSuccess: () => {
          handleEditClose();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно удалили пользователя',
            status: 'success',
          });
        },
        onError: (error) => {
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: error?.response?.data,
            status: 'error',
          });
        },
      },
    );
  };

  useEffect(() => {
    if (isSuccess && activeUserId) {
      const userData = getUserById.data;

      reset({
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        phone_number: userData?.phone_number,
        email: userData?.email,
      });
    }
  }, [getUserById]);

  const columns = [
    { title: '№', dataIndex: 'number', key: 'number', width: 88 },
    { title: 'Номер телефона', dataIndex: 'phone_number', key: 'phone_number', width: 480 },
    { title: 'Имя', dataIndex: 'first_name', key: 'first_name', width: 480 },
    { title: 'Фамилия', dataIndex: 'last_name', key: 'last_name', width: 480 },
    { title: 'Mail', dataIndex: 'email', key: 'email', width: 864 },
    {
      title: '',
      key: 'operations',
      render: (item) => (
        <Box>
          <Button
            width="20px"
            height="40px"
            backgroundColor="#eac459"
            onClick={() => {
              handleOpenEdit();
              setActiveUserId(item?.id);
            }}
          >
            <EditIcon color="black" />
          </Button>
        </Box>
      ),
    },
  ];

  const data = React.useMemo(
    () =>
      students?.users?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [students],
  );

  return {
    nPages,
    currentPage,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    isOpen,
    isOpenEdit,
    handleEditClose,
    handleOpen,
    handleClose,
    columns,
    data,
    register,
    handleSubmit,
    onSubmit,
    handleDeleteUser,
    handleUpdateUser,
    activeUserId,
    setActiveUserId,
  };
};
