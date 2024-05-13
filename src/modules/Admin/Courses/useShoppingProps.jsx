import { useNavigate } from 'react-router-dom';
import Edit from 'assets/img/icon/edit.svg';
import { Box, Button, useToast } from '@chakra-ui/react';
import { useCreateCourse, useGetCourses, useGetSearchCourse } from 'services/courses.service';
import { useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';
import { useGetCategories } from 'services/category.service';
import { EditIcon } from '@chakra-ui/icons';

export const useShoppingProps = () => {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [state, setState] = useState({
    isOpen: false,
    courseSearch: '',
    currentPage: 1,
    recordsPerPage: 10,
  });

  const { isOpen, courseSearch, currentPage, recordsPerPage } = state;

  const getCourses = useGetSearchCourse({ search: courseSearch });
  const { data: courses, refetch } = useGetCourses();

  // const handleOpen = () => setState((prev) => ({ ...prev, onOpen: true }));
  // const handleClose = () => {
  //   setState((prev) => ({ ...prev, isOpen: false }));
  //   reset();
  // };
  const onChange = (e) => setState((prev) => ({ ...prev, courseSearch: e.target.value }));

  const { mutate: createCourse } = useCreateCourse();

  const onSubmit = (res) => {
    createCourse(
      {
        ...res,
        duration: res?.duration - 0,
        weekly_number: res?.weekly_number - 0,
        price: res?.price - 0,
      },
      {
        onSuccess: () => {
          refetch();
          handleClose();
          reset();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно добавили курс',
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

  const columns = [
    { title: '№', dataIndex: 'number', key: 'number', width: 88 },
    { title: 'Ovaqtlarni nomi', dataIndex: 'name', key: 'name', width: 420 },
    { title: 'Grami', dataIndex: 'description', key: 'description', width: 410 },
    { title: 'Narxi', dataIndex: 'weekly_number', key: 'weekly_number', width: 200 },
    // { title: 'Кол-во документов', dataIndex: 'number_of_materials', key: 'number_of_materials', width: 370 },
    // { title: 'Дата', dataIndex: 'beginning_date_course', key: 'beginning_date_course', width: 324 },
    // { title: 'Оценка', dataIndex: 'grade', key: 'grade', width: 300 },
    {
      title: '',
      key: 'operations',
      render: (item) => (
        <Box>
          <Button
            width="20px"
            height="40px"
            backgroundColor="#eac459"
            onClick={() => navigate(`/admin/courses/${item?.id}`)}
          >
            <EditIcon color="black" />
          </Button>
        </Box>
      ),
    },
  ];

  const currentRecords = React.useMemo(
    () => courses?.courses?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage),
    [courses, currentPage, recordsPerPage],
  );

  const data = React.useMemo(
    () =>
      getCourses?.data?.courses?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [getCourses],
  );

  const { data: categories, refetch: refetchCategories } = useGetCategories();

  return {
    register,
    categories,
    fileInputRef,
    handleClick: () => fileInputRef.current.click(),
    onChange,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    currentPage,
    nPages: Math.ceil(courses?.count / recordsPerPage) || 1,
    isOpen,
    // handleOpen,
    // handleClose,
    register,
    handleSubmit,
    onSubmit,
    columns,
    data,
  };
};
