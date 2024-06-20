import { data } from "./data";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import clsx from "clsx";
import {
  Box,
  CustomBtn,
  CustomInput,
  DownloadIcon,
  FilterIcon,
  Header,
  Search2Icon,
  UnderHeader,
} from "public/imports";
import useDashboardProps from "./useDashboardProps";
function calc(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return (part / whole) * 100;
}

export default function Dashboard() {
  const [key, setKey] = useState(Object.keys(data)?.[0]);
  const array = Array.from({ length: data[key].limit }, (_, i) => i);
  const { stat } = useDashboardProps();
  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn2={
          <>
            {" "}
            <CustomBtn
              BgColor={"transparent"}
              BtnBorder={"1px solid #e7e7e7"}
              BtnContent={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <FilterIcon />
                  <p style={{ color: "#000" }}>Фильтр</p>{" "}
                </div>
              }
            />{" "}
          </>
        }
      />
      <Box className={styles.dash__top}>
        {stat.map((el) => (
          <Box className={styles.dash__item} key={el.id}>
            <Box
              className={
                el.id === 1
                  ? styles.dash__id1
                  : el.id === 2
                  ? styles.dash__id2
                  : el.id === 3
                  ? styles.dash__id3
                  : el.id === 4
                  ? styles.dash__id4
                  : styles.default_classname
              }
            >
              {el.icon}
            </Box>
            <Box className={styles.dash__info}>
              <h2 className={styles.dash__info_title}>{el.status}</h2>
              <p>{el.quant}</p>
            </Box>
          </Box>
        ))}
      </Box>

      <div className={styles.ss}>
        <div className={styles.patientStatistics}>
          <div className={styles.header}>
            <div className={styles.title}>Отчет по продажам</div>

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
                <span key={el}>{el + 1}</span>
              ))}
            </div>

            <div className={styles.items} key={key}>
              {data?.[key]?.data.map((el, i) => (
                <div
                  className={styles.item}
                  style={{
                    height:
                      el?.numberOfPatients != "0"
                        ? `${calc(el?.numberOfPatients, data[key].limit)}%`
                        : null,
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
