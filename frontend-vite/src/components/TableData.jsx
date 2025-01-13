import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(attendancy, name, place, startTime, finishTime, comment, commenter) {
  return { attendancy, name, place, startTime, finishTime, comment, commenter };
}

const rows = [
  createData("出席",'koichi', "東京本社", "8:30", "--", "", ""),
  createData("欠席",'koichi', "--", "--", "--", "体調不良につき", "senpai"),
  createData("出席",'koichi', "甲府本社", "8:00", "--", "", ""),
  createData("早退",'koichi', "東京本社", "8:30", "12:30", "帰ります", ""),
  createData("出席",'koichi', "在宅", "8:30", "--", "", ""),
  createData("出席",'koichi', "東京本社", "8:20", "--", "", ""),
  createData("出席",'koichi', "--", "--", "--", "", ""),
  createData("出席",'koichi', "客先", "9:30", "--", "Ofuna作業です。", "koichi"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className='bg-blue-100 text-white rounded'>
          <TableRow>
            <TableCell align="right">在席状況</TableCell>
            <TableCell align="center">氏名</TableCell>
            <TableCell align="right">作業場所</TableCell>
            <TableCell align="right">出勤時刻</TableCell>
            <TableCell align="right">退勤時刻</TableCell>
            <TableCell align="left">コメント</TableCell>
            <TableCell align='left'>コメント更新者</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.attendancy}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.finishTime}</TableCell>
              <TableCell align="left">{row.comment}</TableCell>
              <TableCell align="left">{row.commenter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
