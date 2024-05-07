import cls from './Saidbar.module.scss';
import VdiyoIcon from 'assets/img/icon/play_circle.svg';
import LockiyoIcon from 'assets/img/icon/lock.svg';
import BookIcon from 'assets/img/icon/book.svg';
import QuizIcon from 'assets/img/icon/quiz.svg';
import Chevron from 'assets/img/icon/expand_more.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import request from 'services/httpRequest';
export const SaidbarFundamental = () => {
  const { postId } = useParams();

  let { pathname } = useLocation();
  pathname = pathname.substring(1);

  const [post, setPost] = useState([]);
  useEffect(() => {
    request.get(`/course/${postId}`).then((res) => {
      setPost(res.data.lesson_names);
    });
  }, []);
  // console.log(post);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className={cls.saidbarFundamentals}>
      <div className={cls.aboutCourse}>
        <div className={cls.mainlyCorse}>
          <p className={cls.mainlyTitle}>Основы биологии</p>
          <button>
            <img src={Chevron} alt="Chevron" />
          </button>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={VdiyoIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={QuizIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={BookIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
      </div>
      <div className={cls.aboutVidyoCourse}>
        <div className={cls.mainlyCorse}>
          <p className={cls.mainlyTitle}> Клеточное дыхание</p>
          <button onClick={handleSubmit}>
            <img src={Chevron} alt="Chevron" />
          </button>
        </div>
        <div>
          <div className="App">
            {post?.map((person) => (
              <div className={cls.wrapVD}>
                <div className={cls.aboutVD}>
                  <img src={LockiyoIcon} alt="" />
                  <p>{person.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
