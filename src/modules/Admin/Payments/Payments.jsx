import { Box, FormControl, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { usePaymentsProps } from './usePaymentsProps';
import { AddModal } from 'components/AddModal';
import { Input } from 'components/Input';
import { EditModal } from 'components/EditModal';
import { CustomTable } from 'components/CustomTable';

export const Payments = () => {

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
        setActiveUserId
    } = usePaymentsProps()

    return (
        <Box>
            <Header 
                title="Платежи"
                onOpen={handleOpen}
                isOpen={isOpen}
                onClose={handleClose}
                handleAccept={handleSubmit(onsubmit)}
                register={register}
            />
            <Box className={cls.content}>
                <Tabs className={cls.table}>
                    <TabList>
                        <Tab>Все платежи</Tab>
                        <Tab>Успешные</Tab>
                        <Tab>Задолженность</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CustomTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <CustomTable columns={columns} data={data} />
                        </TabPanel>
                        <TabPanel>
                            <CustomTable columns={columns} data={data} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>                                                                 
            </Box>
           

            {/*  Modals  */}
            <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={handleClose} >
                <FormControl as='form'>
                <Box className={cls.wrapper}>
                    <Input
                    type="text"
                    placeholder="Имя"
                    register={register}
                    name="first_name"  
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="text"
                    placeholder="Фамилия"
                    register={register}
                    name="last_name"
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="number"
                    placeholder="Номер телефона"
                    register={register}
                    name="phone_number" 
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email"  
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="password"
                    placeholder="Пароль"
                    register={register}
                    name="password"
                    />
                </Box>
                </FormControl>
            </AddModal>
            <EditModal handleDelete={handleDeleteUser} handleAccept={handleSubmit(handleUpdateUser)} id={activeUserId} isOpen={isOpenEdit} register={register} onClose={() => {
                handleEditClose()
                setActiveUserId("")
            }}>
                <FormControl  as='form'>
                <Box className={cls.wrapper}>
                    <Input
                    type="text"
                    placeholder="Имя"
                    register={register}
                    name="first_name"
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="text"
                    placeholder="Фамилия"
                    register={register}
                    name="last_name"
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="number"
                    placeholder="Номер телефона"
                    name="phone_number"
                    register={register}
                    />
                </Box>
                <Box className={cls.wrapper}>
                    <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email"
                    />
                </Box>
                </FormControl>
            </EditModal>
        </Box>
    )
}