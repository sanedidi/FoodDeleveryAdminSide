import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Box, Header } from "public/imports";
import useDashboardProps from "./useDashboardProps";
import s from "./Dashboard.module.scss";

export default function Dashboard() {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const { orders, isLoading, getStats, error } = useDashboardProps();

  const handleInputClear = () => {
    setSelectedFromDate(null);
    setSelectedToDate(null);
    handleFilter("view_all");
  };
  const filterType = [
    { filterType: "12_months", label: "За 12 месяцев" },
    { filterType: "6_months", label: "За 6 месяцев" },
    { filterType: "30_days", label: "За 30 дней" },
    { filterType: "7_days", label: "За 7 дней" },
  ];
  const handleFilter = (filterType) => {
    const today = new Date();
    let fromDate = null;

    switch (filterType) {
      case "12_months":
        fromDate = new Date(
          today.getFullYear() - 1,
          today.getMonth(),
          today.getDate()
        );
        break;
      case "6_months":
        fromDate = new Date(
          today.getFullYear(),
          today.getMonth() - 6,
          today.getDate()
        );
        break;
      case "30_days":
        fromDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 30
        );
        break;
      case "7_days":
        fromDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7
        );
        break;
      case "view_all":
        break;
      default:
        break;
    }

    const formattedFromDate = fromDate
      ? fromDate.toISOString().split("T")[0]
      : null;
    const formattedToDate = new Date().toISOString().split("T")[0];

    setSelectedFromDate(formattedFromDate);
    setSelectedToDate(formattedToDate);

    getStats(formattedFromDate, formattedToDate);
  };

  const handleDateChange = (e, setterFunction, oppositeDate) => {
    const value = e.target.value;
    setterFunction(value);

    getStats(selectedFromDate, oppositeDate)
      .then((data) => {})
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  };

  useEffect(() => {
    handleFilter("view_all");
  }, []);

  useEffect(() => {
    renderChart();
  }, [orders, isLoading, error]);

  const renderChart = () => {
    if (isLoading || error) return;

    const ctx = document.getElementById("ordersChart");
    if (!ctx || !Array.isArray(orders) || orders.length === 0) return;

    let myChart = Chart.getChart(ctx);
    if (myChart) myChart.destroy();

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: orders.map((order) => order.created_at),
        datasets: [
          {
            label: "Продажи",
            data: orders.map((order) => order.total_price),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => tooltipItem.formattedValue,
            },
          },
        },
      },
    });
  };

  return (
    <>
      <Header
        title={"Дашборд"}
        headerBtn2={
          <Box className={s.dash__select}>
            <input
              type="datetime-local"
              onChange={(e) =>
                handleDateChange(e, setSelectedFromDate, selectedToDate)
              }
              value={selectedFromDate || ""}
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
            <input
              type="datetime-local"
              onChange={(e) =>
                handleDateChange(e, setSelectedToDate, selectedFromDate)
              }
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
      <Box className={s.dash__select}>
        {filterType.map((el) => {
          return (
            <button
              key={el.filterType}
              onClick={() => handleFilter(el.filterType)}
              className={s.dash__btn}
            >
              {el.label}
            </button>
          );
        })}
      </Box>
      <div className={s.chartContainer}>
        <canvas id="ordersChart"></canvas>
      </div>
    </>
  );
}
