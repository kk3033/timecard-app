import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TableData from './TableData';
import "react-tabs/style/react-tabs.css";

const TabMenu = () => {
  return (
    <div>
      <Tabs>
      <TabList>
        <Tab>在席確認</Tab>
        <Tab>スケジュール</Tab>
      </TabList>

      <TabPanel>
      <h1>本日の在席状況</h1>
      <TableData />
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default TabMenu;
