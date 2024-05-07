import cls from './style.module.scss';
import { Container } from 'components/Container';
export const ProfileHeader = () => {
  
  return (
    <header className={cls.header}>
      <Container>
        <h1 className={cls.title}>Профиль</h1>
      </Container>
    </header>
  );
};
