import react from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DenseTable from './TableData';
import Schedule from './Schedule';

const TabMenu = () => {
  return (
    <div>
      <Tabs>
      <TabList>
        <Tab>在席確認</Tab>
        <Tab>スケジュール</Tab>
      </TabList>

      <TabPanel>
      <h1>本日の在席状況~~</h1>
      <DenseTable/>
      </TabPanel>
      <TabPanel>
        <h2>schedule component</h2>
        <Schedule />
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default TabMenu;
