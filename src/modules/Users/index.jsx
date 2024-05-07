import React from 'react';
import { StudentMain } from './StudentPath/StudentMain/index';
import { StudentSaidbar } from './StudentPath/StudentSaidbar/studentSaidbar';
import cls from './style.module.scss';
import { Route, Routes } from 'react-router-dom';
import { CoursesFundamentals } from './CoursesFundamentals';
export const StudentPath = () => {
  return (
    <div>
      <div className={cls.studentWraper}>
        <div>
          <StudentSaidbar />
        </div>
        <div className={cls.mainBody}>
          <div>
            <StudentMain />
          </div>
        </div>
      </div>
    </div>
  );
};
