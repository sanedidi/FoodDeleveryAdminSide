import { FolderIcon, Header, HeaderBox, Link } from "public/imports";
import React, { useState, useEffect } from "react";
import request from "services/httpRequest";

const ButcherAdd = () => {
  const [catalogs, setCatalogs] = useState([]);
  const [catalogId, setCatalogId] = useState("");
  const [fullName, setFullName] = useState("");
  const [pricePerKilo, setPricePerKilo] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await request.get("/catalogs");
        setCatalogs(response.data.Data.catalogs);
      } catch (error) {
        console.error("Ошибка при получении каталога:", error);
      }
    };

    fetchCatalogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await request.post("/butcher", {
        catalog_id: catalogId,
        full_name: fullName,
        price_per_kilo: pricePerKilo,
        total_sum: totalSum,
      });

      if (response.status === 200) {
        alert("Мясник успешно добавлен!");
      }
    } catch (error) {
      console.error("Ошибка при добавлении мясника:", error);
      alert("Произошла ошибка при добавлении мясника.");
    }
  };

  return (
    <div>
      <Header
        title={
          <HeaderBox
            path={"/admin/workers/butcher"}
            gg={"Мясник"}
            hh={"Создать"}
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

      <form onSubmit={handleSubmit}>
        <div>
          <label>Catalog ID:</label>
          <select
            value={catalogId}
            onChange={(e) => setCatalogId(e.target.value)}
          >
            <option value="">Выберите каталог</option>
            {catalogs.map((catalog) => (
              <option key={catalog.id} value={catalog.id}>
                {catalog.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Price per Kilo:</label>
          <input
            type="number"
            value={pricePerKilo}
            onChange={(e) => setPricePerKilo(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Total Sum:</label>
          <input
            type="number"
            value={totalSum}
            onChange={(e) => setTotalSum(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default ButcherAdd;
