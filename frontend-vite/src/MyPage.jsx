import { useState } from "react";
import "./index.css";
import Navbar from "./components/NavigationBar";
import TabMenu from "./components/TabMenu";
import DigitalDateTime from "./components/DigitalDateTime";
import StatusControl from "./components/StatusControl";

function MyPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* ナビゲーションバー */}
      <Navbar isSignedIn={true}/>

      {/* 時刻表示 */}
      <DigitalDateTime />

      <div style={{ display: "flex" }}>
        {/* 左寄せコンポーネント */}
        <div
          style={{
            flex: "0 0 auto",
            backgroundColor: "lightblue",
            padding: "10px",
          }}
        >
          {/* 勤怠編集 */}
          <StatusControl />
        </div>
        {/* 右寄せコンポーネント */}
        <div style={{ flex: 1, padding: "10px" }}>
          {/* 勤怠情報確認 */}
          <TabMenu />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
