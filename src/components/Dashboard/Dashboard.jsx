import { data } from "./data";
import s from "./Dashboard.module.scss";
import { useState } from "react";
import clsx from "clsx";
import {
  Box,
  CustomBtn,
  CustomInput,
  FilterIcon,
  Header,
  UnderHeader,
} from "public/imports";
import useDashboardProps from "./useDashboardProps";
import { Calendar } from "primereact/calendar";

function calc(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return (part / whole) * 100;
}

export default function Dashboard() {
  const [key, setKey] = useState(Object.keys(data)?.[0]);
  const array = Array.from({ length: data[key].limit }, (_, i) => i);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  // const [searchParams, setSearchParams] = useState({ search: "" });

  const { stats, stat } = useDashboardProps();
  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
  };

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn1={
          <Box className={s.dash__select}>
            <Calendar
              value={selectedFromDate}
              onChange={(e) => setSelectedFromDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
          </Box>
        }
        headerBtn2={
          <Box className={s.dash__select}>
            <Calendar
              value={selectedToDate}
              onChange={(e) => setSelectedToDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
            <button onClick={handleInputClear} className={s.dash__btn}>
              Очистить
            </button>
          </Box>
        }
      />
      <Box className={s.dash__top}>
        {stat.map((el) => {
          return (
            <Box className={s.dash__item} key={el.id}>
              <Box
                className={
                  el.id === 1
                    ? s.dash__id1
                    : el.id === 2
                    ? s.dash__id2
                    : el.id === 3
                    ? s.dash__id3
                    : el.id === 4
                    ? s.dash__id4
                    : s.default_classname
                }
              >
                {el.icon}
              </Box>

              <Box className={s.dash__info}>
                <h2 className={s.dash__info_title}>{el.status}</h2>
                <p>{el.quant}</p>
              </Box>
            </Box>
          );
        })}
      </Box>

      <div style={{ display: "flex", padding: "10px" }}>
        <div className={s.patientStatistics}>
          <div className={s.header}>
            <div className={s.title}>Отчет о продаж</div>

            <div className={s.btns}>
              {Object.keys(data).map((el) => (
                <div
                  className={clsx(s.btn, key == el && s.activeKey)}
                  onClick={() => setKey(el)}
                  key={el}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>

          <div className={s.table}>
            <div className={s.fromToLimit}>
              {array.map((el) => (
                <span key={el}>{el * 10}</span>
              ))}
            </div>

            <div className={s.items} key={key}>
              {data?.[key]?.data.map((el, i) => (
                <div
                  className={s.item}
                  style={{
                    height: `${calc(el?.numberOfPatients, data[key].limit)}%`,
                  }}
                  key={el.label || i}
                >
                  <div className={s.line}>
                    <div></div>
                  </div>
                  <span className={s.subKey}>{el.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
