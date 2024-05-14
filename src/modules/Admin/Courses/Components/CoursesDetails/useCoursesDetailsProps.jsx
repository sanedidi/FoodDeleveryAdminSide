import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { useDeleteCourseById, useGetCourseById, useGetCourses, useUpdateCourseById } from 'services/courses.service';
import { useNavigate, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import { useToast } from '@chakra-ui/react';
import { useCreateModule, useDeleteModuleById, useGetModuleById, useGetModules, useUpdateModuleById } from 'services/module.service';
import { useCreateLesson, useDeleteLessonById, useGetLessonById, useGetLessons, useUpdateLessonById } from 'services/lessons.service';

export const useCoursesDetailsProps = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const fileInputRef = useRef(null);
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    request.get(`course/${id}`).then((res) => setActiveCourse(res?.data));
  }, [id]);

  const { refetch } = useGetCourses();
  const { data: getCourseById, isSuccess } = useGetCourseById({ courseId: activeCourse?.id });
  const { mutate: updateCourse } = useUpdateCourseById();
  const { mutate: deleteCourse } = useDeleteCourseById();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  useEffect(() => {
    if (isSuccess && activeCourse?.id) {
      reset({
        photo: getCourseById?.photo,
        name: getCourseById?.name,
        description: getCourseById?.description,
        weekly_number: getCourseById?.weekly_number,
        duration: getCourseById?.duration,
        price: getCourseById?.price,
      });
    }
  }, [getCourseById]);

  const handleUpdateCourse = (res) => {
    const data = {
      // photo: res?.photo,
      name: res?.name,
      description: res?.description,
      weekly_number: res?.weekly_number - 0,
      duration: res?.duration,
      price: res?.price - 0,
    };

    updateCourse({ id: activeCourse?.id, ...data }, {
      onSuccess: () => {
        navigate("/admin/courses");
        refetch();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно изменили данные курса",
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
      }
    });
  };

  const handleDeleteCourse = (data) => {
    deleteCourse({ id: activeCourse?.id, ...data }, {
      onSuccess: () => {
        navigate("/admin/courses");
        refetch();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно удалили курс",
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
      }
    });
  };
  

  const handleDragAndDrop = (dropResult) => {
    if (!dropResult.removedIndex) return;
    const newItems = [...items];
    const [removedItem] = newItems.splice(dropResult.removedIndex, 1);
    newItems.splice(dropResult.addedIndex, 0, removedItem);
    setItems(newItems);
  };

  // Moduleeeeeeeesss and Lessons
  const [openItem, setOpenItem] = useState('')
  const [activeModuleId, setActiveModuleId] = useState('')

  // Modules Modal
  const [isOpenModuleAdd, setOpenModuleAdd] = useState(false);
  const handleOpenModuleAdd = () => setOpenModuleAdd(true);
  const handleCloseModuleAdd = () => { setOpenModuleAdd(false)}; // reset();

  const [isOpenModuleEdit, setOpenModuleEdit] = useState(false);
  const handleOpenModuleEdit = () => setOpenModuleEdit(true);
  const handleCloseModuleEdit = () => { setOpenModuleEdit(false)}; // reset();

  // Lessons Modal
  const [isOpenLessonAdd, setOpenLessonAdd] = useState(false);
  const handleOpenLessonAdd = () => setOpenLessonAdd(true);
  const handleCloseLessonAdd = () => { setOpenLessonAdd(false)}; // reset();

  const [isOpenLessonEdit, setOpenLessonEdit] = useState(false);
  const handleOpenLessonEdit = () => setOpenLessonEdit(true);
  const handleCloseLessonEdit = () => { setOpenLessonEdit(false)}; // reset();

  // Modules CRUD
  const { mutate: createModule } = useCreateModule()
  const { data: modules, refetch: refetchModules } = useGetModules({ courseId: activeCourse?.id })
  const { data: getModuleById, isSuccess: isSuccessModules } = useGetModuleById({ moduleId: activeModuleId });
  const { mutate: updateModule } = useUpdateModuleById({ moduleId: activeModuleId });
  const { mutate: deleteModule } = useDeleteModuleById({ moduleId: activeModuleId });

  const handleCreateModule = (data) => {
    createModule({ 
      ...data,  
      course_id: activeCourse?.id,
    }, {
      onSuccess: () => {
        refetchModules();
        handleCloseModuleAdd();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно создали модуль",
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
      }
    });
  };

  useEffect(() => {
    if (isSuccessModules && activeModuleId) {
      reset({
        name: getModuleById?.name,
      });
    }
  }, [getModuleById]);

  const handleUpdateModule = (data) => {
    updateModule({ id: activeModuleId, ...data }, {
      onSuccess: () => {
        handleCloseModuleEdit();
        refetchModules();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно изменили данные модуля",
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
      }
    });
  };

  const handleDeleteModule = (data) => {
    deleteModule({ id: activeModuleId, ...data }, {
      onSuccess: () => {
        handleCloseModuleEdit();
        refetchModules();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно удалили модуль",
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
      }
    });
  };


  // Lessons СRUD
  const [activeLessonId, setActiveLessonId] = useState('')
  const { mutate: createLesson, reset: resetLesson } = useCreateLesson()
  const { data: lessons, refetch: refetchLessons } = useGetLessons({ moduleId: activeModuleId })
  const { data: getLessonById, isSuccess: isSuccessLessons } = useGetLessonById({ lessonId: activeLessonId });
  const { mutate: updateLesson } = useUpdateLessonById({ lessonId: activeLessonId });
  const { mutate: deleteLesson } = useDeleteLessonById({ lessonId: activeLessonId });

  const handleCreateLesson = (data) => {
    createLesson({ 
      ...data,  
      course_id: activeCourse?.id,
      module_id: activeModuleId,
    }, {
      onSuccess: () => {
        resetLesson();
        refetchLessons();
        handleCloseLessonAdd();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно создали урок",
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
      }
    });
  };

  useEffect(() => {
    if (isSuccessLessons && activeLessonId) {
      reset({
        title: getLessonById?.title,
        description: getLessonById?.description,
      });
    }
  }, [getLessonById]);

  const handleUpdateLesson = (data) => {
    updateLesson({ id: activeLessonId, ...data }, {
      onSuccess: () => {
        handleCloseLessonEdit();
        refetchLessons();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно изменили данные урока",
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
      }
    });
  };

  const handleDeleteLesson = (data) => {
    deleteLesson({ id: activeLessonId, ...data }, {
      onSuccess: () => {
        handleCloseLessonEdit();
        refetchLessons();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно удалили урок",
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
      }
    });
  };

  // const handleCreateLesson = async (e) => {
  //   e.preventDefault();

  //   const file = fileInputRef.current.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await fetch(`https://lms-back.nvrbckdown.uz/lms/api/v1/upload/`, {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (response.ok) {
  //       alert('Video uploaded successfully');
  //       onClose();
  //     } else {
  //       alert('Failed to upload video');
  //     }
  //   } catch (error) {
  //     alert('Error uploading video:', error);
  //   }
  // };

  return {
    handleUpdateLesson,
    handleDeleteLesson,
    setActiveLessonId,
    activeModuleId,
    handleDeleteModule,
    handleUpdateModule,
    setActiveModuleId,
    handleSubmit,
    setOpenItem,
    openItem,
    isOpenModuleAdd,
    isOpenModuleEdit,
    isOpenLessonAdd,
    isOpenLessonEdit,
    handleOpenModuleAdd,
    handleCloseModuleAdd,
    handleOpenModuleEdit,
    handleCloseModuleEdit,
    handleOpenLessonAdd,
    handleCloseLessonAdd,
    handleOpenLessonEdit,
    handleCloseLessonEdit,

    modules,
    lessons,
    handleCreateModule,
    handleCreateLesson,


    handleDragAndDrop,
    navigate,
    fileInputRef,
    handleClick: () => fileInputRef.current.click(),
    activeCourse,
    fileInputRef,
    handleClick,
    isOpen,
    register,
    handleSubmit,
    handleDeleteCourse,
    handleUpdateCourse,
  };
};