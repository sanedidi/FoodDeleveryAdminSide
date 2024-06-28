import {
  r as u,
  j as s,
  al as b,
  am as q,
  an as S,
  ao as N,
  ap as K,
  B as v,
} from "./index-DSiRzrbg.js";
import { c as B } from "./clsx-B-dksMZM.js";
import { H as k, a as D } from "./MainProd-DW19dvKP.js";
import { r as h } from "./index-C0teDyxI.js";
import { u as l } from "./useQuery-BElWZZgI.js";
import "./utils-km2FGkQ4.js";
const F = "_ss_1svjh_1",
  H = "_patientStatistics_1svjh_6",
  I = "_header_1svjh_15",
  G = "_title_1svjh_28",
  w = "_btns_1svjh_36",
  C = "_btn_1svjh_36",
  E = "_table_1svjh_55",
  L = "_fromToLimit_1svjh_61",
  T = "_items_1svjh_72",
  M = "_item_1svjh_72",
  O = "_line_1svjh_87",
  W = "_growHeight_1svjh_1",
  Y = "_subKey_1svjh_102",
  P = "_activeKey_1svjh_123",
  $ = "_dash__btn_1svjh_128",
  Q = "_dash__top_1svjh_134",
  R = "_dash__item_1svjh_152",
  z = "_dash__info_1svjh_161",
  J = "_dash__info_title_1svjh_166",
  U = "_dash__id1_1svjh_172",
  V = "_dash__id2_1svjh_177",
  X = "_dash__id3_1svjh_182",
  Z = "_dash__id4_1svjh_187",
  A = "_dash__select_1svjh_192",
  tt = "_dash__underHeader_input_1svjh_196",
  n = {
    ss: F,
    patientStatistics: H,
    header: I,
    title: G,
    btns: w,
    btn: C,
    table: E,
    fromToLimit: L,
    items: T,
    item: M,
    line: O,
    growHeight: W,
    subKey: Y,
    activeKey: P,
    dash__btn: $,
    dash__top: Q,
    dash__item: R,
    dash__info: z,
    dash__info_title: J,
    dash__id1: U,
    dash__id2: V,
    dash__id3: X,
    dash__id4: Z,
    dash__select: A,
    dash__underHeader_input: tt,
  },
  m = {
    getDash: (t) =>
      h.get("/dashboard", { params: t }).then((e) => {
        var _;
        return (_ = e == null ? void 0 : e.data) == null ? void 0 : _.Data;
      }),
    getMonthly_orders: (t) =>
      h.get("/monthly_orders", { params: t }).then((e) => {
        var _, i;
        return (i =
          (_ = e == null ? void 0 : e.data) == null ? void 0 : _.Data) == null
          ? void 0
          : i.days;
      }),
    getSemiannual_orders: (t) =>
      h.get("/semiannual_orders", { params: t }).then((e) => {
        var _, i;
        return (i =
          (_ = e == null ? void 0 : e.data) == null ? void 0 : _.Data) == null
          ? void 0
          : i.days;
      }),
    getWeekly_orders: (t) =>
      h.get("/weekly_orders", { params: t }).then((e) => {
        var _, i;
        return (i =
          (_ = e == null ? void 0 : e.data) == null ? void 0 : _.Data) == null
          ? void 0
          : i.days;
      }),
    getYearly_orders: (t) =>
      h.get("/yearly_orders", { params: t }).then((e) => {
        var _, i;
        return (i =
          (_ = e == null ? void 0 : e.data) == null ? void 0 : _.Data) == null
          ? void 0
          : i.days;
      }),
  },
  st = (t) => l({ queryKey: ["get-all", t], queryFn: () => m.getDash(t) }),
  et = (t) =>
    l({ queryKey: ["get-monthly", t], queryFn: () => m.getMonthly_orders(t) }),
  at = (t) =>
    l({
      queryKey: ["semiannual_orders", t],
      queryFn: () => m.getSemiannual_orders(t),
    }),
  _t = (t) =>
    l({ queryKey: ["weekly_orders", t], queryFn: () => m.getWeekly_orders(t) }),
  nt = (t) =>
    l({ queryKey: ["yearly_orders", t], queryFn: () => m.getYearly_orders(t) }),
  it = () => {
    const { data: t } = st(),
      { data: e } = et(),
      { data: _ } = at(),
      { data: i } = _t(),
      { data: o } = nt(),
      r = (d) => d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
      [c, x] = u.useState([
        { id: 1, status: "Завершенные", quant: "0", icon: s.jsx(b, {}) },
        { id: 2, status: "Общая сумма", quant: "0", icon: s.jsx(q, {}) },
        { id: 3, status: "Отмененные", quant: "0", icon: s.jsx(S, {}) },
        { id: 4, status: "Все заказы", quant: "0", icon: s.jsx(N, {}) },
      ]);
    return (
      u.useEffect(() => {
        var d, j, y;
        t &&
          x([
            {
              id: 1,
              status: "Завершенные",
              quant:
                (d = t == null ? void 0 : t.count_of_orders) == null
                  ? void 0
                  : d.count_of_completed_status,
              icon: s.jsx(b, {}),
            },
            {
              id: 2,
              status: "Общая сумма",
              quant: r(t == null ? void 0 : t.total_price),
              icon: s.jsx(q, {}),
            },
            {
              id: 3,
              status: "Отмененные",
              quant:
                (j = t == null ? void 0 : t.count_of_orders) == null
                  ? void 0
                  : j.count_of_canceled_status,
              icon: s.jsx(S, {}),
            },
            {
              id: 4,
              status: "Все заказы",
              quant:
                (y = t == null ? void 0 : t.count_of_orders) == null
                  ? void 0
                  : y.count_of_all_orders,
              icon: s.jsx(N, {}),
            },
          ]);
      }, [t]),
      {
        stat: c,
        DashAll: t,
        monthly_orders: e,
        semiannual_orders: _,
        weekly_orders: i,
        yearly_orders: o,
      }
    );
  },
  dt = it;
function ot(t, e) {
  return e === 0 ? 0 : (t / e) * 100;
}
function jt() {
  var p, g;
  const {
      stat: t,
      DashAll: e,
      monthly_orders: _,
      semiannual_orders: i,
      weekly_orders: o,
      yearly_orders: r,
    } = dt(),
    [c, x] = u.useState("12 Месяцев"),
    [d, j] = u.useState({});
  u.useEffect(() => {
    const a = {
      "12 Месяцев": {
        limit: (r == null ? void 0 : r.limit) || 10,
        data: r || [],
      },
      "1 Месяц": { limit: (_ == null ? void 0 : _.limit) || 10, data: _ || [] },
      "7 дней": { limit: (o == null ? void 0 : o.limit) || 10, data: o || [] },
      "6 месяцев": {
        limit: (i == null ? void 0 : i.limit) || 10,
        data: i || [],
      },
      "Показать все": {
        limit: (e == null ? void 0 : e.limit) || 10,
        data: (e == null ? void 0 : e.orders) || [],
      },
    };
    j(a);
  }, [e, _, i, o, r]);
  const y = Array.from(
    { length: ((p = d[c]) == null ? void 0 : p.limit) || 0 },
    (a, f) => f
  );
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(k, {
        title: "Дашборд",
        headerBtn2: s.jsx(s.Fragment, {
          children: s.jsx(D, {
            BgColor: "transparent",
            BtnBorder: "1px solid #e7e7e7",
            BtnContent: s.jsxs("div", {
              style: { display: "flex", alignItems: "center", gap: "10px" },
              children: [
                s.jsx(K, {}),
                s.jsx("p", { style: { color: "#000" }, children: "Фильтр" }),
              ],
            }),
          }),
        }),
      }),
      s.jsx(v, {
        className: n.dash__top,
        children: t.map((a) =>
          s.jsxs(
            v,
            {
              className: n.dash__item,
              children: [
                s.jsx(v, {
                  className:
                    a.id === 1
                      ? n.dash__id1
                      : a.id === 2
                      ? n.dash__id2
                      : a.id === 3
                      ? n.dash__id3
                      : a.id === 4
                      ? n.dash__id4
                      : n.default_classname,
                  children: a.icon,
                }),
                s.jsxs(v, {
                  className: n.dash__info,
                  children: [
                    s.jsx("h2", {
                      className: n.dash__info_title,
                      children: a.status,
                    }),
                    s.jsx("p", { children: a.quant }),
                  ],
                }),
              ],
            },
            a.id
          )
        ),
      }),
      s.jsx("div", {
        className: n.ss,
        children: s.jsxs("div", {
          className: n.patientStatistics,
          children: [
            s.jsxs("div", {
              className: n.header,
              children: [
                s.jsx("div", {
                  className: n.title,
                  children: "Отчет по продажам",
                }),
                s.jsx("div", {
                  className: n.btns,
                  children: Object.keys(d).map((a) =>
                    s.jsx(
                      "div",
                      {
                        className: B(n.btn, c == a && n.activeKey),
                        onClick: () => x(a),
                        children: a,
                      },
                      a
                    )
                  ),
                }),
              ],
            }),
            s.jsxs("div", {
              className: n.table,
              children: [
                s.jsx("div", {
                  className: n.fromToLimit,
                  children: y.map((a) =>
                    s.jsx("span", { children: a * 150 }, a)
                  ),
                }),
                s.jsx(
                  "div",
                  {
                    className: n.items,
                    children:
                      (g = d == null ? void 0 : d[c]) == null
                        ? void 0
                        : g.data.map((a, f) =>
                            s.jsxs(
                              "div",
                              {
                                className: n.item,
                                style: {
                                  height:
                                    (a == null ? void 0 : a.order_count) != "0"
                                      ? `${ot(
                                          a == null ? void 0 : a.order_count,
                                          d[c].limit
                                        )}%`
                                      : null,
                                },
                                children: [
                                  s.jsx("div", {
                                    className: n.line,
                                    children: s.jsx("div", {}),
                                  }),
                                  s.jsx("span", {
                                    className: n.subKey,
                                    children: a.day,
                                  }),
                                ],
                              },
                              a.label || f
                            )
                          ),
                  },
                  c
                ),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { jt as default };
