import cls from './styles.module.scss';
import { Box, FormControl } from '@chakra-ui/react';
import { CustomTable } from 'components/CustomTable';
import { AddModal } from 'components/AddModal';
import { Header } from 'components/Header';
import { CoursesInput } from './Components/CoursesInput';
import DownloadIcon from 'assets/img/icon/download.svg';
import { useShoppingProps } from './useShoppingProps';
import FileUploadComponent from 'components/UploadFile/UploadFile';

export const Shopping = () => {
  const {
    register,
    categories,
    fileInputRef,
    handleClick,
    currentPage,
    nPages,
    setCurrentPage,
    isOpen,
    handleClose,
    handleOpen,
    columns,
    data,
    handleSubmit,
    onSubmit,
    onChange,
  } = useShoppingProps();

  return (
    <Box className={cls.content}>
      <Header
        title="Товары"
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        onChange={onChange}
        handleAccept={handleSubmit(onSubmit)}
        register={register}
      />
      <Box className={cls.table}>
        <CustomTable columns={columns} data={data} />
      </Box>
      <AddModal
        size="lg"
        handleAccept={handleSubmit(onSubmit)}
        register={register}
        isOpen={isOpen}
        onClose={handleClose}
      >
      </AddModal>
    </Box>
  );
};
