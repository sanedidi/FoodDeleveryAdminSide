import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useCoursesDetailsProps } from "./useCoursesDetailsProps";
import { Detail } from "../Detail";
import { Header } from "../Header";
import { Lessons } from "../Lessons";

export const CoursesDetails = () => {

  const {
    handleUpdateLesson,
    handleDeleteLesson,
    setActiveLessonId,
    activeModuleId,
    handleDeleteModule,
    handleUpdateModule,
    setActiveModuleId,
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

    lessons, 
    modules,

    handleCreateModule,
    handleCreateLesson,
    
    navigate,
    fileInputRef,
    handleClick,
    handleDragAndDrop,
    register,
    handleSubmit,
    handleDeleteCourse,
    handleUpdateCourse,
    activeCourse,
  } = useCoursesDetailsProps();

  return(
    <Box>
      <Header title={activeCourse?.name} />
        <Box background="#fff" borderRadius="8px" margin="68px  0">
          <Tabs>
            <TabList>
              <Tab>Детали</Tab>
              <Tab>Уроки</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Detail 
                  fileInputRef={fileInputRef}
                  handleClick={handleClick}
                  handleDeleteCourse={handleDeleteCourse}
                  handleUpdate={handleSubmit(handleUpdateCourse)}
                  register={register}
                  handleSubmit={handleSubmit}
                />
              </TabPanel>
              <TabPanel>
                <Lessons
                  handleUpdateLesson={handleUpdateLesson}
                  handleDeleteLesson={handleDeleteLesson}
                  setActiveLessonId={setActiveLessonId}
                  activeModuleId={activeModuleId}
                  handleDeleteModule={handleDeleteModule}
                  handleUpdateModule={handleUpdateModule}
                  setActiveModuleId={setActiveModuleId}
                  setOpenItem={setOpenItem}
                  openItem={openItem}
                  isOpenModuleAdd={isOpenModuleAdd}
                  isOpenModuleEdit={isOpenModuleEdit}
                  isOpenLessonAdd={isOpenLessonAdd}
                  isOpenLessonEdit={isOpenLessonEdit}
                  handleOpenModuleAdd={handleOpenModuleAdd}
                  handleCloseModuleAdd={handleCloseModuleAdd}
                  handleOpenModuleEdit={handleOpenModuleEdit}
                  handleCloseModuleEdit={handleCloseModuleEdit}
                  handleOpenLessonAdd={handleOpenLessonAdd}
                  handleCloseLessonAdd={handleCloseLessonAdd}
                  handleOpenLessonEdit={handleOpenLessonEdit}
                  handleCloseLessonEdit={handleCloseLessonEdit}


                  handleCreateLesson={handleCreateLesson}
                  handleCreateModule={handleCreateModule}
                  lessons={lessons}
                  modules={modules}
                  handleSubmit={handleSubmit}

                  navigate={navigate}
                  fileInputRef={fileInputRef}
                  register={register}
                  handleClick={handleClick}
                  handleDragAndDrop={handleDragAndDrop} 
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
    </Box>
  ) 
}
