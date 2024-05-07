import cls from "./styles.module.scss";

export const SendAgain = () => {
    return(
        <button className={cls.btn} type="submit">Отправить код еще раз</button>
    )
}