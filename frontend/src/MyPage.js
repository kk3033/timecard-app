import './App.css';
import NavBar from './Components/NavigationBar';
import TableData from './Components/TableData';
import Datetime from './Components/DigitalDateTime';
// import MenuTab from './Components/TabMenu';

function MyPage() {
  return (
    <div>
      <NavBar isSignedIn={true}/>
      <h1 className="text-3xl font-bold text-center mb-9">
        3Gr.2Sc. 出退勤状況 マイページ
      </h1>
      
      <Datetime />
      {/* <MenuTab /> */}
      <TableData/>
    </div>
  );
}

export default MyPage;
