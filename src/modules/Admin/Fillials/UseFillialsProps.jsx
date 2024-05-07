import s from './Fillials.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useEffect, useState } from 'react';
import fillialsService from 'services/fillials.service';
import { IoIosApps } from 'react-icons/io';
import MenuComp from 'components/MenuComponent/MenuComp';
import { IoIosMore } from 'react-icons/io';
const UseFillialsProps = () => {
  const [fillialsData, setFillialsData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const column = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      width: '5px',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '5px',
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      width: '20px',
    },
    {
      title: 'Расположение',
      dataIndex: 'long-lat',
      key: 'long-lat',
      width: '20px',
      render: (text, record) => (
        <>
          <span>{`${record.latitude},-${record.longitude}`}</span>
        </>
      ),
    },
    {
      title: 'Рабочие часы',
      dataIndex: 'working_hours',
      key: 'working_hours',
      width: '20px',
      render: (text, record) => (
        <>
          <span>{`${record.start_time}-${record.end_time}`}</span>
        </>
      ),
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
      width: '20px',
    },
    {
      title: <IoIosApps className="ioicon" style={{ fontSize: '23px', color: '0E73FC' }} />,
      dataIndex: 'additional',
      key: 'additional',
      width: '20px',
      render: (text, record) => (
        <>
          <MenuComp
            MenuBtn={
              <IoIosMore className="menuIcon" style={{ color: '#0E73FC', fontSize: '25px', fontWeight: '900' }} />
            }
            ListMenu={
              <div className={s.UseFillialsProps__menu}>
                <MdOutlineRemoveRedEye />
                <p>Вид</p>
              </div>
            }
            ListMenu1={
              <div className={s.UseFillialsProps__menu}>
                <GoPencil />
                <p>Редактировать</p>
              </div>
            }
            ListMenu3={
              <div className={s.UseFillialsProps__menu}>
                <AiOutlineDelete />
                <p>Удалить</p>
              </div>
            }
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchFillials = async () => {
      try {
        setIsLoading(true);
        const data = await fillialsService.getFillials();
        setFillialsData(data);
        if (data.length > 0) {
          const cols = Object.keys(data[0]);
          setColumns(cols);
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchFillials();
  }, []);
  return {
    data: fillialsData.map((el) => ({
      ...el,
    })),
    columns,
    isLoading,
    isError,
    error,
    column,
  };
};

export default UseFillialsProps;
