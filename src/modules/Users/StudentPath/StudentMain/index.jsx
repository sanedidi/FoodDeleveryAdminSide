import cls from './styles.module.scss';
import imgeOklok from 'assets/img/icon/Huge-icon.svg';
import Search from 'assets/img/icon/search.svg';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StudentMainProps } from './StudentMainProps';
import { Box, Select } from '@chakra-ui/react';
export const StudentMain = () => {
  const { onChange, doubleValue, getCourses } = StudentMainProps();
  return (
    <div>
      <Box className={cls.MyCourse}>
        <div className={cls.headerWrap}>
          <div className={cls.headerPart1}>
            <Link
              to={
                'https://www.google.com/search?client=ubuntu-sn&hs=tvP&sca_esv=5bdde8b43c3acd18&channel=fs&q=what+is+it+%3F&tbm=vid&source=lnms&sa=X&ved=2ahUKEwjmopbx18mEAxXhMhAIHTauA_wQ0pQJegQIDRAB&biw=1366&bih=656&dpr=1#fpstate=ive&vld=cid:7baeb6ee,vid:kbXoSgmrNnU,st:0'
              }
            >
              <div className={cls.haderText}>
                <p className={cls.kindSpheres}>What is IT, and what kind of spheres is in IT?</p>
                <p className={cls.AboutINformation}>Get glimps of information about IT in order to choose sphere</p>
                <button className={cls.btn}>Explore now</button>
              </div>
            </Link>
          </div>
          <div className={cls.headerIcons}>
            {/* <button>
              <img src={notificationIcon} alt="" />
            </button>
            <button>
              <img src={chat_bubblIcon} alt="" />
            </button> */}
          </div>
        </div>

        <p className={cls.nameCourse}>Все курсы</p>
        <div className={cls.getDate}>
          <img className={cls.searIcon} sfrontedrc={Search} alt="" />
          <input onChange={onChange} className={cls.inputNameCourse} placeholder="Название курса" type="text" />
          {/* <input className={cls.inputCooseingCourse} placeholder="Направление" type="text" /> */}
          <Select onChange={onChange} width={400} placeholder="курсы">
            <option value="option1"> go backend</option>
            <option value="option2">Frontend 2</option>
            <option value="option3"> PM</option>
          </Select>
          <button className={cls.btnSearch}>Найти</button>
        </div>
        <Box className={cls.wraperCourse}>
          {doubleValue?.map((item) => (
            <Box key={item.id} className={cls.MyCourseBox}>
              <Box className={cls.myCorsePart1}>
                <Box className={cls.wrapInfo}>
                  <Box className={cls.wrapImeCourse}>
                    <img src={item.photo} alt={item.name} />
                  </Box>
                  <Box>
                    <Box className={cls.titlePart1}>
                      <p className={cls.titleCourse}>{item.name}</p>

                      <Box className={cls.percent}>
                        <Box className={cls.percentLine}> </Box>
                      </Box>
                    </Box>
                    <p className={cls.infoCorse}>{item.description}</p>
                  </Box>
                </Box>
                <Box className={cls.aboutTimeProcess}>
                  <Box className={cls.timePros}>
                    <p> {item.duration} раз</p>
                    <Box className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}> в неделю</p>
                    </Box>
                  </Box>
                  <Box className={cls.timePros}>
                    <p> {item.weekly_number} раз</p>
                    <Box className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}>в неделю</p>
                    </Box>
                  </Box>
                  <Box className={cls.timePros}>
                    <p> {item.price} </p>
                    <Box className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}>каждый месяц</p>
                    </Box>
                  </Box>
                  <Box className={cls.timePros}>
                    <p> {item.duration} </p>
                    <Box className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}> Начала курса</p>
                    </Box>
                  </Box>
                </Box>
                <NavLink className="navbar-item" activeClassName="is-active" to={`${item.id}`}>
                  <button className={cls.dateBtn}>Подробнее</button>
                </NavLink>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={cls.EveryCourse}></Box>
    </div>
  );
};
