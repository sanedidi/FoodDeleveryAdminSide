import { Button, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetCategories } from 'services/category.service';
import { AiOutlineEllipsis } from 'react-icons/ai';
import MenuComp from 'components/MenuComponent/MenuComp';
import CustomBtn from 'components/Custom/CustomBtn/CustomBtn';
export const useCategoryProps = () => {
  const [activeGroupId, setActiveGroupId] = useState('');
  const [courseSearch, setCourseSearch] = useState('');
  const onChange = (e) => setCourseSearch(e.target.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const { data: categories, refetch } = useGetCategories();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(categories?.length / recordsPerPage) || 1;
  const currentRecords = categories?.categories?.slice(indexOfFirstRecord, indexOfLastRecord);

  const [isOpenE, setIsOpen] = useState(false);
  const onCloseE = () => setIsOpen(false);
  const onOpenE = () => setIsOpen(true);

  const columns = [
    {
      title: 'No',
      key: 'number',
      dataIndex: 'number',
      width: 0,
    },
    {
      title: 'Название еда',
      dataIndex: 'name_en',
      key: 'name_en',
      width: 800,
    },
    {
      title: ' дата начала',
      dataIndex: 'data',
      key: 'data',
      width: 1000,
      render: (item) => {
        return (
          <div>
            <p>22.03.2023</p>
          </div>
        );
      },
    },
    {
      title: '',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <MenuComp
              MenuBtn={
                <CustomBtn
                  BtnBorder={'1px solid red'}
                  boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
                  padding="0px"
                  BgColor={'transparent'}
                  BtnContent={
                    <AiOutlineEllipsis
                      style={{
                        fontWeight: '900',
                        fontSize: '30px',
                        border: '1px solid rgba(231, 231, 231, 1)',
                        borderRadius: '5px',
                        background: '#fff',
                      }}
                      color="#0E73FC"
                    />
                  }
                  Onclick={() => {
                    onOpenE();
                    setActiveGroupId(item?.id);
                  }}
                />
              }
              ListMenu={'????'}
              ListMenu1={'????'}
            />
          </div>
        );
      },
    },
  ];

  const data =
    categories?.map((item, index) => {
      return {
        ...item,
        number: index + 1,
      };
    }) || [];

  return {
    data,
    currentRecords,
    isOpen,
    onClose,
    onOpen,
    columns,
    nPages,
    currentPage,
    setCurrentPage,
    register,
    handleSubmit,
    onChange,
  };
};
