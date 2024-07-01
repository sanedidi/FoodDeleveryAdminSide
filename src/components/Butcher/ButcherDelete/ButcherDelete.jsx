import React, { useState, useEffect } from "react";
import {
  CustomBtn,
  CustomInput,
  FolderIcon,
  Header,
  HeaderBox,
  Link,
  Toaster,
  toast,
  useParams,
} from "public/imports";
import request from "services/httpRequest";
import s from "./ButcherDelete.module.scss";

const ButcherDelete = () => {
  const { categoryId } = useParams();
  const [data, setData] = useState(null);
  const [totalRemainingBalance, setTotalRemainingBalance] = useState(0);
  const [reductionAmount, setReductionAmount] = useState(0);

  useEffect(() => {
    const fetchButcherInfo = async () => {
      try {
        const response = await request.get(`/butcher/${categoryId}`);
        const fetchedData = response?.data?.Data;
        if (fetchedData) {
          setData(fetchedData);
          setTotalRemainingBalance(fetchedData?.total_sum || 0);
        }
      } catch (error) {
        console.error("Error fetching butcher info:", error);
      }
    };

    fetchButcherInfo();
  }, [categoryId]);

  const handleBalanceReduction = async () => {
    try {
      await request.post(`/delete_balance`, {
        updated_balance: reductionAmount,
        butcher_id: categoryId,
      });
      toast.success("Остаток удален!");
    } catch (error) {
      toast.error("Повторите попытку!");
    }
  };

  const handleInputChange = (event) => {
    const reductionAmount = parseFloat(event.target.value);
    setReductionAmount(reductionAmount);
    const remainingBalance = data?.total_sum || 0;
    setTotalRemainingBalance(remainingBalance - reductionAmount);
  };

  return (
    <div>
      <Toaster />
      <Header
        title={
          <HeaderBox
            path={"/admin/workers/butcher"}
            gg={"Мясник"}
            hh={"Удалить"}
            icon={<FolderIcon />}
          />
        }
        headerBtn2={
          <Link
            to={"/admin/workers/butcher"}
            style={{
              display: "flex",
              alignItems: "center",
              color: "red",
              gap: "10px",
              border: "1px solid red",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Отменить
          </Link>
        }
      />
      <div className={s.del}>
        <h2 className={s.del__title}>Сотрудник</h2>
        <div className={s.del__cards}>
          {data && (
            <div className={s.del__card}>
              <div className={s.del__item}>
                <h2>Имя сотрудника</h2>
                <CustomInput disabled={true} value={data.full_name} />
              </div>
              <div className={s.del__item}>
                <h2>Каталог</h2>
                <CustomInput
                  disabled={true}
                  value={data.CatalogData?.name || ""}
                />
              </div>
              <div className={s.del__items}>
                <div className={s.del__item}>
                  <h2>Цена товар 1КГ</h2>
                  <CustomInput disabled={true} value={data.price_per_kilo} />
                </div>
                <div className={s.del__item}>
                  <h2>Остаток</h2>
                  <CustomInput value={data.total_sum} disabled={true} />
                </div>
              </div>
              <div className={s.del__item}>
                <h2>Сумма удаления</h2>
                <CustomInput
                  InputPlaceHolder={"Введите Сумму удаления"}
                  onChange={handleInputChange}
                />
              </div>
              <div className={s.del__item}>
                <h2>Общий остаток</h2>
                <CustomInput value={totalRemainingBalance} disabled={true} />
              </div>
              <CustomBtn
                BgColor={"blue"}
                Onclick={handleBalanceReduction}
                BtnContent={"Подтвердить удаление"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButcherDelete;
