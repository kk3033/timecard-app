import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavigationBar';
import TableData from './Components/TableData';
import Datetime from './Components/DigitalDateTime';

function Home() {
    return (
      <div>
        <NavBar />
        <h1 className="text-3xl font-bold text-center mb-9">
          3Gr.2Sc. 出退勤状況
        </h1>
        
        <Datetime />
        <TableData/>
      </div>
    );
  }