import { Link } from 'react-router-dom';
import cls from './style.module.scss';
export const HeaderFundamentals = () => {
  return (
    <div className={cls.headerContiner}>
      <p>LMS</p>
      <Link>
        <button>Exam:12 left</button>
      </Link>
    </div>
  );
};
