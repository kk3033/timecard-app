import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(attendancy,　name, place, startTime, finishTime, comment, commenter) {
  return { attendancy,　name, place, startTime, finishTime, comment, commenter };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>在席状況</TableCell>
            <TableCell align="right">氏名</TableCell>
            <TableCell align="right">作業場所</TableCell>
            <TableCell align="right">出勤時刻</TableCell>
            <TableCell align="right">退勤時刻</TableCell>
            <TableCell align="right">コメント</TableCell>
            <TableCell align="right">コメント更新者</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.attendancy}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.finishTime}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
              <TableCell align="right">{row.commenter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
