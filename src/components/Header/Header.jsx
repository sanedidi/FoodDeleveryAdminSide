import { Box } from '@chakra-ui/react';
import s from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const Header = ({
  onOpen,
  isOpen,
  register = () => {},
  title,
  onClose = () => {},
  handleAccept = () => {},
  headerBtn1,
  headerBtn2,
  path1,
  path2,
}) => {
  return (
    <header id="header" className={s.header}>
      <Box className={s.header__wrapper}>
        <h1 className={s.header__title}>{title}</h1>
        <Box gap={10} className={s.header__wrapperLeft}>
          <Link to={path1} className={s.header__link}>
            {headerBtn1}
          </Link>
          <Link to={path2} className={s.header__link} onClick={onOpen}>
            {headerBtn2}
          </Link>
        </Box>
      </Box>
    </header>
  );
};
