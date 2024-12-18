import React from "react";
import sampleData from "../sampleData.json";
import {useTable} from "react-table";

function EmployeeList() {
  const employees = sampleData;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-9">
        3Gr.2Sc. 出退勤状況
      </h1>

      <table className="text-center">
        <tr>
          <th>
            <strong>氏名</strong>
          </th>
          <th>
            <strong>社員番号</strong>
          </th>
          <th>
            <strong>作業場所</strong>
          </th>
          <th>
            <strong>在席状況</strong>
          </th>
          <th>
            <strong>開始時刻</strong>
          </th>
          <th>
            <strong>終了時刻</strong>
          </th>
          <th>
            <strong>コメント</strong>
          </th>
        </tr>
        {employees.map((employee) => (
            <tr key={employee.id}>
              {employee.name}
              {employee.EmployeeID}
              {employee.place}
              {employee.status}
              {employee.starttime}
              {employee.finishtime}
              {employee.comment}
            </tr>
          ))}
      </table>

      {/* <ul className='text-center'>
        {employees.map(employee => (
          <li key={employee.id}>
            <strong>氏名:</strong> {employee.name}
            <strong>社員番号:</strong> {employee.EmployeeID}
            <strong>作業場所</strong> {employee.place}
            <strong>在席状況</strong> {employee.status}
            <strong>開始時刻</strong> {employee.starttime}
            <strong>終了時刻</strong> {employee.finishtime}
            <strong>コメント</strong> {employee.comment}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default EmployeeList;
