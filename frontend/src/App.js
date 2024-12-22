import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavigationBar';
import EmployeeList from './Components/EmployeeList';
import TableData from './Components/TableData';

function App() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mb-9">
        3Gr.2Sc. 出退勤状況
      </h1>
      
      {/* <EmployeeList /> */}
      <TableData/>
    </div>
  );
}

export default App;
