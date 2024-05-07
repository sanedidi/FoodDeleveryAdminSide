import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import cls from './style.module.scss';
import { Container } from 'components/Container';
import CourseImg from 'assets/img/CourseImg.jpg';

export const Homework = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    request.get(`/course/${postId}`).then((res) => {
      setPost(res.data);
    });
  }, []);
  return (
    <Container>
      <div className={cls.mainWraper}>
        <p className={cls.linkCourse}>
          <Link className={cls.Link} to={'/'}>
            course
          </Link>{' '}
          / Homework
        </p>
        <div className={cls.inofoCourse}>
          <p className={cls.titleCourse}>Электроотрицательность и химическая связь</p>
          <div className={cls.abouteCourse}>
            <div className={cls.aboutRoulse}>
              <img src={CourseImg} alt="" />
            </div>
            <div className={cls.homworkBox}>
              <p>HOMEWORK обсуждаются значения электроотрицательности в химических связях по шкале Полинга.</p>
              <p className={cls.homework}>
                классификация связей: ковалентных неполярных, ковалентных полярных или ионных. В видео обсуждаются
                значения электроотрицательности в химических связях по шкале Полинга. Дана классификация связей:
                ковалентных неполярных, ковалентных полярных или ионных. Дана классификация связей: ковалентных
                неполярных, ковалентных полярных или ионных. В видео обсуждаются значения электроотрицательности в
                химических связях по шкале Полинга. Дана классификация связей: ковалентных неполярных, ковалентных
                полярных или ионных. Дана классификация связей: ковалентных неполярных, ковалентных полярных или ионных.
                В видео обсуждаются значения электроотрицательности в химических связях по шкале Полинга. Дана
                классификация связей: ковалентных неполярных, ковалентных полярных или ионных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
