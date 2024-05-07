import { Box } from '@chakra-ui/react';
import s from './styles.module.scss';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuChefHat } from 'react-icons/lu';
import { MdEmojiPeople } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';

export const Dashbord = () => {
  return (
    <Box className={s.dashbord__dashbord}>
      <Header title="Дашборд" />
      <ul className={s.dashbord__list}>
        <li className={s.dashbord__item}>
          <Box className={s.dashbord__wrapperText}>
            <div>
              <span className={s.dashbord__count}>40</span>
              <h2 className={s.dashbord__subtitle}>Kuryerlar</h2>
            </div>
            <TbTruckDelivery className={s.dashbord__icons} />
          </Box>
        </li>
        <li className={s.dashbord__item}>
          <Box className={s.dashbord__wrapperText}>
            <div>
              <span className={s.dashbord__count}>10</span>
              <h2 className={s.dashbord__subtitle}>Oshvpazlar</h2>
            </div>
            <LuChefHat className={s.dashbord__icons} />
          </Box>
        </li>
        <li className={s.dashbord__item}>
          <Box className={s.dashbord__wrapperText}>
            <div>
              <span className={s.dashbord__count}>15</span>
              <h2 className={s.dashbord__subtitle}>Afitsantlar</h2>
            </div>
            <MdEmojiPeople className={s.dashbord__icons} />
          </Box>
        </li>
        <li className={s.dashbord__item}>
          <Box className={s.dashbord__wrapperText}>
            <div>
              <span className={s.dashbord__count}>8</span>
              <h2 className={s.dashbord__subtitle}>Adminstratorlar</h2>
            </div>
            <RiAdminFill className={s.dashbord__icons} />
          </Box>
        </li>
      </ul>
    </Box>
  );
};
