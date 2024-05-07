import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import BackArrow from "assets/img/icon/backArrow.svg";
import Folder from "assets/img/icon/folder.svg";
import { useNavigate } from "react-router-dom";

export const ProfileDetailHeader = () => {

  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <Container >
        <Box className={cls.wrapper}> 
          <button onClick={() => navigate(-1)} className={cls.btnBack}>
              <img src={BackArrow} alt="back arrow" width="30px" height="30px"/>
          </button>
          <h1 className={cls.title}>Изменить профиль</h1>
        </Box>
      </Container>
    </header>
  ) 

};

