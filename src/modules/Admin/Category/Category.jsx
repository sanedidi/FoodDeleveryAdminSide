import { useCategoryProps } from './useCategoryProps';
import { Box, Input, Select, TabPanels } from '@chakra-ui/react';
import { Header } from 'components/Header';
import { CustomTable } from 'components/CustomTable';
import s from './style.module.scss';
import { CustomInput } from 'components/Custom/CustomInput';
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import FilterComp from 'components/svgComponents/SvgComponent';
import DownLoadSvg from 'components/svgComponents/DownLoadSvg';
export const Category = () => {
  const { data, isOpen, onClose, onOpen, columns, nPages, currentPage, setCurrentPage, register, onChange } =
    useCategoryProps();

  const [searchTitle, setSearchTitle] = useState('');

  const handleTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const titleFieldValue = item.name_en;
    return titleFieldValue.toLowerCase().includes(searchTitle.toLowerCase());
  });

  return (
    <>
      <Box margin="68px 0">
        <Header
          title="Категория  "
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onChange={onChange}
          register={register}
        />
        <Box className="category">
          <Box className={s.category__top}>
            <Box className={s.category__search}>
              <CustomInput
                width={'220px'}
                InputIcon={<Search2Icon style={{ color: 'blue' }} />}
                value={searchTitle}
                onChange={handleTitleChange}
                InputPlaceHolder={'Поиск...'}
              />
            </Box>
            <Box className={s.category__right}>
              <Box className={s.category__filter}>
                <FilterComp />
                <p>Фильтер</p>
              </Box>
              <Box className={s.category__filter}>
                <DownLoadSvg />
                <p>Скачать</p>
              </Box>
            </Box>
          </Box>
          <Box className={s.category__table}>
            <CustomTable className={s.category__main_table} columns={columns} data={filteredData} />
          </Box>
        </Box>

      </Box>
    </>
  );
};
