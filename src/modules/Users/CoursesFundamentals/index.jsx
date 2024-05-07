import { HeaderFundamentals } from './HeaderFundamental/header';
import { MainFundamental } from './MainFundamental/main';
import { SaidbarFundamental } from './SaidbarFundamental/Saidbar';
import cls from './style.module.scss';
// import { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import request from 'services/httpRequest';

export const CoursesFundamentals = () => {
  // const { postId } = useParams();

  // let { pathname } = useLocation();
  // pathname = pathname.substring(1);

  // const [post, setPost] = useState({});
  // useEffect(() => {
  //   request.get(`/lms/api/course/${postId}`).then((res) => {
  //     setPost(res);
  //   });
  // }, []);

  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   if (post?.userId) {
  //     request.get(`/lms/api/course/${post?.userId}`).then((res) => {
  //       setUser(res);
  //     });
  //   }
  // }, [post?.userId]);
  // console.log(post);

  return (
    <div>
      <div>
        <HeaderFundamentals />
      </div>
      <SaidbarFundamental />
      <div className={cls.main}>
        <MainFundamental />
      </div>
    </div>
  );
};
