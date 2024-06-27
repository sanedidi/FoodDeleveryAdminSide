import React, { useState, useEffect } from "react";
import s from "./ButcherReminded.module.scss";
import toast, { Toaster } from "react-hot-toast";
import {
  CustomBtn,
  CustomInput,
  Header,
  Link,
  useParams,
} from "public/imports";
import request from "services/httpRequest";

const ButcherReminded = () => {
  const { categoryId } = useParams();
  const [butcherInfo, setButcherInfo] = useState(null);
  const [error, setError] = useState(false);
  const [newButcher, setNewButcher] = useState({
    amount_in_kilo: "",
    butcher_id: categoryId,
    calculated_price_per_kilo: 0,
    restaurant_id: "",
  });
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    const fetchButcherInfo = async () => {
      try {
        const response = await request.get(`/butcher/${categoryId}`);
        setButcherInfo(response.data.Data);
      } catch (error) {
        console.error("Error fetching butcher info:", error);
        setError(true);
        toast.error("Failed to fetch butcher information");
      }
    };

    fetchButcherInfo();
  }, [categoryId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount_in_kilo") {
      const amountInKilo = parseFloat(value);

      // Validation logic
      if (isNaN(amountInKilo) || amountInKilo <= 0) {
        setInputError(
          "Введите положительное число для количества в килограммах"
        );
      } else {
        setInputError("");
      }

      const pricePerKilo = parseFloat(butcherInfo.price_per_kilo);
      const calculatedPrice =
        amountInKilo * pricePerKilo + parseFloat(butcherInfo?.total_sum);
      setNewButcher((prevButcher) => ({
        ...prevButcher,
        amount_in_kilo: value,
        calculated_price_per_kilo: calculatedPrice,
      }));
    } else {
      setNewButcher((prevButcher) => ({
        ...prevButcher,
        [name]: value,
      }));
    }
  };

  const filter = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputError) {
      toast.error("Пожалуйста, исправьте ошибку ввода");
      return;
    }

    request
      .post("meat_price", {
        amount_in_kilo: parseFloat(newButcher.amount_in_kilo),
        butcher_id: newButcher.butcher_id,
        calculated_price_per_kilo: parseFloat(
          newButcher.calculated_price_per_kilo
        ),
      })
      .then((response) => {
        toast.success("Мясник успешно добавлен!");
      })
      .catch((error) => {
        console.error("Error creating butcher:", error);
        toast.error("Не удалось создать мясника");
      });
  };

  if (error) {
    return (
      <div>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</div>
    );
  }

  if (!butcherInfo) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <Toaster />
      <Header
        title={"Добавить остаток "}
        headerBtn1={
          <Link
            to={"/admin/workers/butcher"}
            style={{
              display: "flex",
              alignItems: "center",
              color: "red",
              gap: "10px",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "16px",
              border: "1px solid red",
            }}
          >
            Отменить
          </Link>
        }
      />
      <div className={s.add}>
        <h2 className={s.add__title}>Сотрудник</h2>
        <div className={s.add__item}>
          <h2>Имя сотрудника</h2>
          <CustomInput
            value={butcherInfo.full_name}
            name="fullName"
            disabled={true}
            InputPlaceHolder={"Имя сотрудника"}
          />
        </div>
        <div className={s.add__item}>
          <h2>Каталог</h2>
          <CustomInput
            value={butcherInfo?.CatalogData?.name}
            name="fullName"
            disabled={true}
            InputPlaceHolder={"Каталог"}
          />
        </div>
        <div className={s.add__items}>
          <div className={s.add__item}>
            <h2>Цена товар 1КГ</h2>
            <CustomInput
              value={butcherInfo.price_per_kilo}
              name="fullName"
              disabled={true}
              InputPlaceHolder={"Цена товар 1КГ"}
            />
          </div>
          <div className={s.add__item}>
            <h2>Остаток</h2>
            <CustomInput
              value={filter(butcherInfo?.total_sum)}
              name="fullName"
              disabled={true}
              InputPlaceHolder={"Остаток"}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={s.add__item}>
            <h2> Добавить товар КГ</h2>
            <CustomInput
              type="number"
              name="amount_in_kilo"
              value={newButcher.amount_in_kilo}
              onChange={handleInputChange}
              InputPlaceHolder="Добавить товар КГ"
              required
            />
            {inputError && <span className={s.error}>{inputError}</span>}
          </div>

          <div className={s.add__item}>
            <h2>Общий остаток</h2>
            <CustomInput
              type="text"
              name="calculated_price_per_kilo"
              value={filter(newButcher.calculated_price_per_kilo)}
              onChange={handleInputChange}
              InputPlaceHolder="Общий остаток"
              required
              disabled={true}
            />
          </div>
          <CustomBtn
            type={"submit"}
            BtnContent={"Сохранить"}
            BgColor={"blue"}
          />
        </form>
      </div>
    </>
  );
};

export default ButcherReminded;
