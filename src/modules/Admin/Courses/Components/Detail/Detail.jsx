import { Box, Button, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CoursesInput } from "../CoursesInput";
import DownloadIcon from 'assets/img/icon/download.svg';

export const Detail = ({
    fileInputRef,
    handleClick = () => {},
    handleDeleteCourse = () => {},
    handleUpdate = () => {},
    register = () => {},
}) => {
  
    return (
        <FormControl className={cls.form} as="form">
            <Box className={cls.wrapper}>
                {/* <h1 className={cls.title}>Детали</h1> */}
                <Box className={cls.content}>
                    <Box className={cls.wrapperInput}>
                        <label className={cls.label} htmlFor="file">Загрузить файл</label>
                        <button className={cls.btn} onClick={handleClick} type="button">
                            <img src={DownloadIcon} alt="download" width="24px" height="24px" />
                            Загрузить файл
                        </button>
                        <input
                        className={cls.fileInput}
                        type="file"
                        id="file"
                        ref={fileInputRef}
                        register={register}
                        name="file"
                        />
                    </Box>
                    <CoursesInput
                        label="Название курса"
                        id="name_course"
                        placeholder="Введите Название курса"
                        type="text"
                        register={register}
                        name="name"
                        required
                    />
                    <Box className={cls.wrapperInput}>
                        <label className={cls.label} htmlFor="description">Описание</label>
                        <textarea
                        className={cls.input}
                        {...register("description")}
                        id="description"
                        cols="10"
                        rows="2"
                        placeholder="Введите описание"
                        />
                    </Box>
                    <CoursesInput
                        label="Повторяемость:" 
                        id="weekly_number"
                        placeholder="Введите повторяемость"
                        type="number"
                        register={register}
                        name="weekly_number"
                        required
                    />
                    <CoursesInput
                        label="Длительность урока:" 
                        id="duration"
                        placeholder="Введите длительность урока"
                        type="text"
                        register={register}
                        name="duration"
                        required
                    />
                    <CoursesInput
                        label="Сумма" 
                        id="price"
                        placeholder="Введите сумму"
                        type="number"
                        register={register}
                        name="price"
                        required
                    />
                </Box>
            </Box>
            <Box className={cls.wrapperBottom}>
                <Box>
                    <Button mr={3} onClick={handleDeleteCourse} colorScheme='red' size='md'>
                        Удалить
                    </Button>
                    <Button onClick={handleDeleteCourse} colorScheme='red' variant='outline' size='md'>
                        Заблокировать
                    </Button>
                </Box>
                <Button onClick={handleUpdate}  backgroundColor="teal" color="white">
                    Изменить
                </Button>
            </Box>
        </FormControl>
    )
}