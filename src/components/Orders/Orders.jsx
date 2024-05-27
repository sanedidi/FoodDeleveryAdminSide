import { Header } from "components/Header/Header";
import useOrderProps from "modules/Admin/Orders/useOrderProps";
import { CustomBtn, Link, PlusIcon } from "public/imports";
import React from "react";

const Orders = () => {
  const {getOrder} = useOrderProps()
  console.log(getOrder)
  return (
    <>
      <Header
        title={"Заказы"}
        headerBtn2={
          <>
            <CustomBtn
              BgColor={"blue"}
              BtnContent={
                <>
                  {" "}
                  <Link style={{display:"flex", alignItems:"center", gap:"5px", fontSize:"20px"}} to={"/"}>
                    {" "}
                    <PlusIcon /> Создать заказ
                  </Link>{" "}
                </>
              }
            />
          </>
        }
      />
      <div>Orders</div>
    </>
  );
};

export default Orders;
