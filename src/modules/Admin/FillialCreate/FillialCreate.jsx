import React from 'react';
import s from './FillialCreate.module.scss';
import { Container } from 'react-bootstrap';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { Header } from '../../../components/Header/Header';
import { TiDelete } from 'react-icons/ti';
export const FillialCreate = () => {
  return (
    <>
      <Header
        headerBtn1={
          <div className={s.header__btn_del}>
            <TiDelete className={s.header__del_svg} />
            <span>Отменить</span>
          </div>
        }
        headerBtn2={
          <div className={s.header__btn_create}>
            <MdOutlineCreateNewFolder />
            <span>Создать</span>
          </div>
        }
        title={'Филлиалы'}
        path1={'/admin/fillials'}
      />
      <section className={s.create}>
        <Container>
          <div className={s.create__wrapper}>
            <div className={s.create__top}>
              <h2 className={s.create__top_title}>Общие сведения</h2>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FillialCreate;
