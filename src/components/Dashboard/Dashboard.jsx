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

  const handleFilter = (filterType) => {
    let fromDate = null;
    let toDate = null;
    const today = new Date();

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
        // No need to set fromDate and toDate when viewing all
        break;
      default:
        break;
    }

    toDate = new Date(); // Set toDate to today for all filters

    const formattedFromDate = fromDate
      ? fromDate.toISOString().split("T")[0]
      : null;
    const formattedToDate = toDate.toISOString().split("T")[0];

    setSelectedFromDate(formattedFromDate);
    setSelectedToDate(formattedToDate);

    getStats(formattedFromDate, formattedToDate);
  };

  const handleFromDateChange = (e) => {
    setSelectedFromDate(e.target.value);
    getStats(e.target.value, selectedToDate);
  };

  const handleToDateChange = (e) => {
    setSelectedToDate(e.target.value);
    getStats(selectedFromDate, e.target.value);
  };

  useEffect(() => {
    handleFilter("view_all");
  }, []);

  useEffect(() => {
    renderChart();
  }, [orders, isLoading]); // Re-render the chart when orders data or loading state changes

  const renderChart = () => {
    if (isLoading || error) return; // Wait for data to be loaded or handle error state

    const ctx = document.getElementById("ordersChart");
    if (!ctx) return;

    const chartData = {
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
    };

    // Check if there's an existing chart instance and destroy it before rendering new chart
    let myChart = Chart.getChart(ctx);
    if (myChart) {
      myChart.destroy();
    }

    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.formattedValue;
              },
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
              onChange={handleFromDateChange}
              value={selectedFromDate || ""}
              placeholder="Выберите дату"
              className={s.dash__underHeader_input}
            />
            <input
              type="datetime-local"
              onChange={handleToDateChange}
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
        <button
          onClick={() => handleFilter("12_months")}
          className={s.dash__btn}
        >
          За 12 месяцев
        </button>
        <button
          onClick={() => handleFilter("6_months")}
          className={s.dash__btn}
        >
          За 6 месяцев
        </button>
        <button onClick={() => handleFilter("30_days")} className={s.dash__btn}>
          За 30 дней
        </button>
        <button onClick={() => handleFilter("7_days")} className={s.dash__btn}>
          За 7 дней
        </button>
      </Box>
      <div className={s.chartContainer}>
        <canvas id="ordersChart"></canvas>
      </div>
    </>
  );
}
