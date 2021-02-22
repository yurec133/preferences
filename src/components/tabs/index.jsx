import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./tabsBox.module.scss";
import { Form } from "../form";

export const TabsBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const list = [
    "Industry focus",
    "Geographic focus",
    "Stage focus",
    "Other preferences"
  ];
  return (
    <Tabs
      className={styles.tabs}
      selectedIndex={tabIndex}
      onSelect={index => setTabIndex(index)}
    >
      <TabList className={styles.list}>
        {list.map((item, id) => (
          <Tab key={id}>{item}</Tab>
        ))}
      </TabList>
      <TabPanel className={styles.panel}>
        <Form />
      </TabPanel>
      <TabPanel className={styles.panel}>Geographic focus</TabPanel>
      <TabPanel className={styles.panel}>Stage focus</TabPanel>
      <TabPanel className={styles.panel}>Other preferences</TabPanel>
    </Tabs>
  );
};
