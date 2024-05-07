import { Header } from 'components/Header';
import cls from './style.module.scss';
import { Box } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
export const Exam = () => {
  return (
    <Box>
      <header className={cls.header}>
        <h1>Exam: 12 Left </h1>
      </header>
      <main className={cls.LockIcon}>
        <LockIcon />
      </main>
    </Box>
  );
};
