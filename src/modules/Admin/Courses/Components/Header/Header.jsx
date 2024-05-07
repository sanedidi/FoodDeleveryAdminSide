import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { Container } from 'components/Container';
import BackArrow from 'assets/img/icon/backArrow.svg';
import Eye from 'assets/img/icon/EyeView.svg';
import Folder from 'assets/img/icon/folder.svg';
import { useNavigate } from 'react-router-dom';

export const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header id="headerDetail" className={cls.header}>
      <Box className={cls.wrapper}>
        <Box className={cls.wrapperLeft}>
          <button onClick={() => navigate(-1)} className={cls.btnBack}>
            <img src={BackArrow} alt="back arrow" />
          </button>
          <Box ml="8px" display="flex" alignItems="center">
            <img src={Folder} alt="folder" width={24} height={24} />
            <h1 className={cls.title}>{title}</h1>
          </Box>
        </Box>
        <button className={cls.btn}>
          <img src={Eye} alt="eye" width={24} height={24} />
        </button>
      </Box>
    </header>
  );
};
