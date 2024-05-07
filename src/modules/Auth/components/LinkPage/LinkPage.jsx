import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

export const LinkPage = ({to, text}) => {
    return (
        <Link className={cls.link} to={to}>{text}</Link> 
    );
}