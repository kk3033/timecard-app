import './App.css';
import NavBar from './Components/NavigationBar';
import TableData from './Components/TableData';
import Datetime from './Components/DigitalDateTime';
// import MenuTab from './Components/TabMenu';

function App() {
  return (
    <div>
      <NavBar isSignedIn={false}/>
      <h1 className="text-3xl font-bold text-center mb-9">
        3Gr.2Sc. 出退勤管理
      </h1>
      
      <Datetime />
      {/* <MenuTab /> */}
      <TableData/>
    </div>
  );
}

export default App;
