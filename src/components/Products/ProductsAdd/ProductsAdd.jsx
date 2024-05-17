import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import s from "./ProductsAdd.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MainProd } from "../components/mainProd";

export const ProductsAdd = () => {
  return (
    <>
      <Tabs className={s.tabs}>
        <TabList className={s.tabs__list}>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MainProd />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProductsAdd;
