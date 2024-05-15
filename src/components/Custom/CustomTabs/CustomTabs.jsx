import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const CustomTabs = ({ tabs, activeTab, onTabChange }) => {
  const { tabLabels, tabContents } = tabs;

  const handleTabClick = (index) => {
    onTabChange(index);
  };

  return (
    <Tabs index={activeTab} onChange={handleTabClick}>
      <TabList>
        {tabLabels.map((label, index) => (
          <Tab key={index}>{label}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabContents.map((content, index) => (
          <TabPanel key={index}>{content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
