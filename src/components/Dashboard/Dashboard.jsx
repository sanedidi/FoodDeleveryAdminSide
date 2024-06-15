import { useState, useEffect } from "react";
import clsx from "clsx";
import { Box, Header } from "public/imports";
import useDashboardProps from "./useDashboardProps";
import s from "./Dashboard.module.scss";
import { format, subDays, subMonths, startOfDay } from "date-fns";

function calc(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return (part / whole) * 1000;
}

function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("uz-Uz", options);
}

export default function Dashboard() {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);

  const {
    stats,
    stat,
    orders,
    isLoading,
    currentPage,
    setCurrentPage,
    pageSize,
    getStats,
  } = useDashboardProps();

  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
    handleFilter("view_all");
  };

  const handleFilter = (filterType) => {
    let fromDate = null;
    let toDate = null;
    const today = startOfDay(new Date());

    switch (filterType) {
      case "12_months":
        fromDate = subMonths(today, 12);
        break;
      case "6_months":
        fromDate = subMonths(today, 6);
        break;
      case "30_days":
        fromDate = subDays(today, 30);
        break;
      case "7_days":
        fromDate = subDays(today, 7);
        break;
      case "view_all":
        break;
      default:
        break;
    }

    if (filterType !== "view_all") {
      toDate = format(today, "yyyy-MM-dd");
    }

    const formattedFromDate = fromDate ? format(fromDate, "yyyy-MM-dd") : null;
    const formattedToDate = toDate;

    setSelectedFromDate(formattedFromDate);
    setSelectedToDate(formattedToDate);

    getStats(formattedFromDate, formattedToDate);
  };

  useEffect(() => {
    handleFilter("view_all");
  }, []);

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn1={
          <Box className={s.dash__select}>
            <input
              type="datetime-local"
              onChange={(e) => setSelectedFromDate(e.target.value)}
              value={selectedFromDate || ""}
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
          </Box>
        }
        headerBtn2={
          <Box className={s.dash__select}>
            <input
              type="datetime-local"
              onChange={(e) => setSelectedToDate(e.target.value)}
              value={selectedToDate || ""}
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
        {stat.map((el) => (
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
        ))}
      </Box>

      <div style={{ display: "flex", padding: "10px" }}>
        <div className={s.patientStatistics}>
          <div className={s.header}>
            <div className={s.title}>Отчет о продажах</div>

            <div className={s.btns}>
              <div
                className={clsx(s.btn)}
                onClick={() => handleFilter("12_months")}
              >
                12 Месяцев
              </div>
              <div
                className={clsx(s.btn)}
                onClick={() => handleFilter("6_months")}
              >
                6 Месяцев
              </div>
              <div
                className={clsx(s.btn)}
                onClick={() => handleFilter("30_days")}
              >
                30 Дней
              </div>
              <div
                className={clsx(s.btn)}
                onClick={() => handleFilter("7_days")}
              >
                7 Дней
              </div>
              <div
                className={clsx(s.btn)}
                onClick={() => handleFilter("view_all")}
              >
                Посмотреть все
              </div>
            </div>
          </div>

          <div className={s.table}>
            <div className={s.fromToLimit}>
              {Array.from({ length: pageSize }, (_, i) => i * 10).map((el) => (
                <span key={el}>{el}</span>
              ))}
            </div>

            <div className={s.items}>
              {orders.map((el, i) => (
                <div
                  className={s.item}
                  style={{
                    height: `${calc(el?.total_price, pageSize * 10)}%`,
                  }}
                  key={el.id || i}
                >
                  <div className={s.line}>
                    <div></div>
                  </div>
                  <span className={s.subKey}>
                    {formatDateToMonthYear(el.created_at)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
