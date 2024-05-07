import { Button, useToast } from '@chakra-ui/react';
import Edit from 'assets/img/icon/edit.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  useDeleteUserById,
  useGetUserById,
  useUpdateUserById,
  useGetStudents,
  useCreateUser,
} from 'services/users.service';

export const usePaymentsProps = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [activeUserId, setActiveUserId] = useState('');

  const toast = useToast();

  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setOpen(true);
  const handleOpenEdit = () => setIsOpenEdit(true);

  const handleEditClose = () => {
    setIsOpenEdit(false);
    reset();
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { data: students, refetch } = useGetStudents();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(students?.count / recordsPerPage) || 1;
  const currentRecords = students?.users?.slice(indexOfFirstRecord, indexOfLastRecord);

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
          refetch();
          reset();
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
    {
      title: 'Номер телефона',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: 400,
    },
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      width: 400,
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
      width: 400,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      width: 240,
    },
    {
      title: 'Количество $',
      dataIndex: 'status',
      key: 'status',
      width: 400,
    },
    {
      title: 'Способ оплаты',
      dataIndex: 'status',
      key: 'status',
      width: 400,
    },
    {
      title: 'Дата',
      dataIndex: 'data',
      key: 'data',
      width: 360,
    },
    {
      title: '',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button
              padding="4px"
              colorScheme="transparent"
              onClick={() => {
                handleOpenEdit();
                setActiveUserId(item?.id);
              }}
            >
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
          </div>
        );
      },
    },
  ];

  const data = currentRecords;

  return {
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
    register,
    handleSubmit,
    onSubmit,
    handleDeleteUser,
    handleUpdateUser,
    activeUserId,
    setActiveUserId,
  };
};
