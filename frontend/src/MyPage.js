import './App.css';
import NavBar from './Components/NavigationBar';
import TableData from './Components/TableData';
import Datetime from './Components/DigitalDateTime';
import MenuTab from './Components/TabMenu';
import StatusCtl from './Components/StatusControl';

function MyPage() {
  return (
    <div>
      <NavBar isSignedIn={true}/>
      <h1 className="text-3xl font-bold text-center mb-9">
        3Gr.2Sc. 出退勤状況 マイページ
      </h1>
      
      {/* manipulate attendancy and other status info */}
      <StatusCtl />
      <Datetime />
      <MenuTab />
    </div>
  );
}

export default MyPage;
