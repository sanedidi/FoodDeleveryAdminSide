import { data } from "./data";
import styles from "./Dashboard.module.scss";
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
import { SearchIcon } from "@chakra-ui/icons";
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
  const [searchParams, setSearchParams] = useState({ search: "" });
  // const [orderNumbers, setOrderNumbers] = useState([]);

  const { stats } = useDashboardProps();
  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
  };

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn2={
          <CustomBtn
            BtnContent={
              <p
                style={{ color: "black", display: "flex", gap: "10px" }}
                className={styles.dash__btn}
              >
                {" "}
                <FilterIcon /> Фильтр
              </p>
            }
            BgColor={"white"}
            BtnBorder={"1px solid #e7e7e7"}
          />
        }
      />
      <UnderHeader
        firstItem={
          <CustomInput
            InputIcon={<SearchIcon color={"blue"} />}
            onChange={(e) => {
              setSearchParams({ search: e.target.value });
            }}
            InputPlaceHolder={"Поиск по имени клиента"}
          />
        }
        secondItem={
          <Box className={styles.orders__select}>
            <Calendar
              value={selectedFromDate}
              onChange={(e) => setSelectedFromDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={styles.dash__underHeader_input}
            />
          </Box>
        }
        thirdItem={
          <Box className={styles.dash__select}>
            <Calendar
              value={selectedToDate}
              onChange={(e) => setSelectedToDate(e.value)}
              showIcon={true}
              dateFormat="dd.mm.yy"
              placeholder="Выберите дату"
              className={styles.dash__underHeader_input}
            />
            <button onClick={handleInputClear} className={styles.orders__btn}>
              Очистить
            </button>
          </Box>
        }
      />

      <div style={{ display: "flex", padding: "10px" }}>
        <div className={styles.patientStatistics}>
          <div className={styles.header}>
            <div className={styles.title}>Отчет о продаж</div>

            <div className={styles.btns}>
              {Object.keys(data).map((el) => (
                <div
                  className={clsx(styles.btn, key == el && styles.activeKey)}
                  onClick={() => setKey(el)}
                  key={el}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.table}>
            <div className={styles.fromToLimit}>
              {array.map((el) => (
                <span key={el}>{el * 10}</span>
              ))}
            </div>

            <div className={styles.items} key={key}>
              {data?.[key]?.data.map((el, i) => (
                <div
                  className={styles.item}
                  style={{
                    height: `${calc(el?.numberOfPatients, data[key].limit)}%`,
                  }}
                  key={el.label || i}
                >
                  <div className={styles.line}>
                    <div></div>
                  </div>
                  <span className={styles.subKey}>{el.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
