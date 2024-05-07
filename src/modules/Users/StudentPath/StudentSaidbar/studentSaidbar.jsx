import coursImg from 'assets/img/icon/local_library.svg';
import clockLOder from 'assets/img/icon/clock_loader_10.svg';
import cls from './style.module.scss';
import { authStore } from 'store/auth.store';
import { CiLogout } from 'react-icons/ci';
// import { SaidbarFooter } from '../SaidbarFooter';
import { Link, NavLink } from 'react-router-dom';
import UserNameImg from 'assets/img/icon/userAvatar.svg';
import ErroIcon from 'assets/img/icon/arrow_drop_down.svg';
import { Box } from '@chakra-ui/react';
import { Button } from 'react-bootstrap';
import { Exam } from 'modules/Users/Exam/Exam';
export const StudentSaidbar = () => {
  const handleLogOut = () => {
    authStore.userData = {};
    authStore.logout();
  };
  return (
    <div className={cls.sidbarWrap}>
      <div className={cls.sidbarTop}>
        <div className={cls.sidbrTop}>
          <div className={cls.LMS}>
            <p>LMS</p>
          </div>
          <div className={cls.sidbarCours}>
            <img src={coursImg} alt="" />
            <Link>
              {' '}
              <p>Курсы</p>
            </Link>
          </div>
          <div className={cls.sidbarExzam}>
            <img src={clockLOder} alt="" />
            <Link to={'/Exam'}>
              <p>Экзамен</p>
            </Link>
          </div>
          <div className={cls.logOut}>
            <div className={cls.IconLogOut}>
              <CiLogout />
            </div>
            <div className={cls.btnLog}>
              <Box>
                <Button background={'red'} font-size={14} color={'white'} onClick={handleLogOut}>
                  Выйти
                </Button>
              </Box>
            </div>
          </div>
        </div>
        <div className={cls.line}></div>
        <div className={cls.SaidbarFooterWrap}>
          <div className={cls.FooterWraper}>
            <div className={cls.userImgWrap}>
              <img src={UserNameImg} alt="" />
            </div>
            <p className={cls.userName}>UserSourName</p>
            <button className={cls.btn}>
              <img src={ErroIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
