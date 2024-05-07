import cls from "./styles.module.scss"
import { Box, FormControl, useDisclosure, } from "@chakra-ui/react"
import { AddModal } from "components/AddModal";
import { BtnAdd } from "components/BtnSubmit";
import { BtnDownload } from "components/BtnDownload";
import { Filter } from "components/Filter";
import { SearchInput } from "components/SearchInput";
import { useBtnsProps } from "./useBtnsProps";
import { CoursesInput } from "../CoursesInput";

export const Btns = ({
    // isOpen, 
    // onOpen = () => {}, 
    // onClose = () => {}, 
    // handleDownload = () => {}, 
    // handleSubmit = () => {}, 
    // handleCreateGroup = () => {},
    // onSubmit = () => {}, 
    // register = () => {},
    activeCourse,
}) => {

    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen, onOpen, onClose, handleDownload, handleSubmit, onSubmit, register } = useBtnsProps(activeCourse)

    return (
        <Box>
            <AddModal size={"lg"} handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
                <FormControl as='form'>
                    <Box mb="24px">
                        <CoursesInput 
                            label="Название потока"
                            id="name"
                            placeholder="Введите Название потока"
                            type="text"
                            register={register}
                            name="name"
                            required
                        />
                    </Box>
                    <Box mb="24px">
                        <CoursesInput
                            label="Дата начало" 
                            id="date"
                            placeholder="Дата начало"
                            type="datetime-local"
                            register={register}
                            name="beginning_date"
                            required
                        />
                    </Box>
                    <Box mb="24px">
                        <CoursesInput
                            label="Дата завершения" 
                            id="end_date"
                            placeholder="Дата завершения"
                            type="datetime-local"
                            register={register}
                            name="end_date"
                            required
                        />
                    </Box>
                </FormControl>
            </AddModal>
            <Box display="flex" alignItems="flex-end" justifyContent="flex-end" marginBottom="10px">
                <BtnDownload
                    // download={handleDownload}
                /> 
                <SearchInput className={cls.searchInput}/>
                <Filter />
                <BtnAdd className={cls.btnAdd} onClick={onOpen} />
            </Box>
        </Box>
    );
}