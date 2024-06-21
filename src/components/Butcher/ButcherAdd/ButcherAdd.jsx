import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  CustomBtn,
  CustomInput,
  FolderIcon,
  Header,
  HeaderBox,
  Link,
  Toaster,
  toast,
  useNavigate,
} from "public/imports";
import request from "services/httpRequest";
import s from "./ButcherAdd.module.scss";

const ButcherAdd = () => {
  const [catalogs, setCatalogs] = useState([]);

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

  const navigate = useNavigate();

  const validationSchema = yup.object({
    catalogId: yup
      .string()
      .required(<div className={s.add__validate}>Выберите каталог</div>),
    fullName: yup
      .string()
      .required(<div className={s.add__validate}>Введите имя сотрудника</div>),
    pricePerKilo: yup
      .number()
      .typeError(<div className={s.add__validate}>Введите число</div>)
      .positive(<div className={s.add__validate}>Введите цену</div>)
      .required(
        <div className={s.add__validate}>Введите цену за килограмм</div>
      ),
    totalSum: yup
      .number()
      .typeError(<div className={s.add__validate}>Введите число</div>)
      .positive(
        <div className={s.add__validate}>Сумма должна быть положительной</div>
      )
      .required(<div className={s.add__validate}>Введите остаток</div>),
  });

  const formik = useFormik({
    initialValues: {
      catalogId: "",
      fullName: "",
      pricePerKilo: 0,
      totalSum: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await request.post("/butcher", {
          catalog_id: values.catalogId,
          full_name: values.fullName,
          price_per_kilo: values.pricePerKilo,
          total_sum: values.totalSum,
        });

        if (response.status === 201) {
          toast.success("Мясник успешно добавлен");
          setTimeout(() => {
            navigate("/admin/workers/butcher");
          }, 1000);
        }
      } catch (error) {
        toast.error("Произошла ошибка при добавлении мясника.");
      }
    },
  });

  return (
    <div>
      <Toaster />
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
      <div className={s.add}>
        <h2 className={s.add__title}>Сотрудник</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.add__item}>
            <h2>Имя сотрудника</h2>
            <CustomInput
              value={formik.values.fullName}
              onChange={formik.handleChange}
              name="fullName"
              InputPlaceHolder={"Имя сотрудника"}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <div className={s.error}>{formik.errors.fullName}</div>
            )}
          </div>
          <div className={s.add__item}>
            <h2>Каталог</h2>
            <select
              value={formik.values.catalogId}
              onChange={formik.handleChange}
              name="catalogId"
            >
              <option className={s.add__val} value="">
                Выберите каталог
              </option>
              {catalogs.map((catalog) => (
                <option key={catalog.id} value={catalog.id}>
                  {catalog.name}
                </option>
              ))}
            </select>
            {formik.errors.catalogId && formik.touched.catalogId && (
              <div className={s.error}>{formik.errors.catalogId}</div>
            )}
          </div>

          <div className={s.add__items}>
            <div className={s.add__item}>
              <h2>Цена товар 1КГ</h2>
              <CustomInput
                value={formik.values.pricePerKilo}
                onChange={formik.handleChange}
                name="pricePerKilo"
                type={"number"}
              />
              {formik.errors.pricePerKilo && formik.touched.pricePerKilo && (
                <div className={s.error}>{formik.errors.pricePerKilo}</div>
              )}
            </div>
            <div className={s.add__item}>
              <h2>Остаток</h2>
              <CustomInput
                value={formik.values.totalSum}
                onChange={formik.handleChange}
                name="totalSum"
                type={"number"}
              />
              {formik.errors.totalSum && formik.touched.totalSum && (
                <div className={s.error}>{formik.errors.totalSum}</div>
              )}
            </div>
          </div>
          <CustomBtn type={"submit"} BtnContent={"Создать"} BgColor={"blue"} />
        </form>
      </div>
    </div>
  );
};

export default ButcherAdd;
