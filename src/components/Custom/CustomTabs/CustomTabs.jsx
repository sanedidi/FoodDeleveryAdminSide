import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

const CustomTabs = ({ tabs, activeTab, onTabChange, ExtraItem }) => {
  const { tabLabels, tabContents } = tabs;

  const handleTabClick = (index) => {
    onTabChange(index);
  };

  return (
    <Tabs index={activeTab} onChange={handleTabClick}>
      <TabList display={"flex"} alignItems={"center"}>
        {tabLabels.map((label, index) => (
          <Tab key={index} onClick={() => handleTabClick(index)}>
            {label}
          </Tab>
        ))}
        <Box marginLeft={"auto"}>{ExtraItem}</Box>
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
