import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const StatusControl = () => {
  const [status, setStatus] = useState("出社");
  const [comment, setComment] = useState("");
  const [attendanceData, setAttendanceData] = useState({
    checkInTime: null,
    checkOutTime: null,
  });

  const handleCheckIn = () => {
    setAttendanceData({
      ...attendanceData,
      checkInTime: new Date().toLocaleTimeString(),
    });
  };

  const handleCheckOut = () => {
    setAttendanceData({
      ...attendanceData,
      checkOutTime: new Date().toLocaleTimeString(),
    });
  };

  const handleSave = () => {
    const dataToSave = {
      ...attendanceData,
      status,
      comment,
    };
    console.log("保存データ:", dataToSave);
    alert("勤怠データが保存されました！");
    // 保存処理を実装する（例: API呼び出し）
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-80">
      <h3 className="text-lg font-semibold mb-4">勤怠管理</h3>
      <div className="flex justify-between mb-4">
        <Button variant="contained" color="primary" onClick={handleCheckIn}>
          出勤打刻
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCheckOut}>
          退勤打刻
        </Button>
      </div>
      <FormControl fullWidth className="mb-4">
        <InputLabel id="status-label">ステータス</InputLabel>
        <Select
          labelId="status-label"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="出社">出社</MenuItem>
          <MenuItem value="在宅">在宅</MenuItem>
          <MenuItem value="出張">出張</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="コメント"
        multiline
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
        className="mb-4"
      />
      <Button variant="contained" color="success" onClick={handleSave} fullWidth>
        保存
      </Button>
      <div className="mt-4 text-sm text-gray-600">
        <p>出勤時間: {attendanceData.checkInTime || "未打刻"}</p>
        <p>退勤時間: {attendanceData.checkOutTime || "未打刻"}</p>
      </div>
    </div>
  );
};

export default StatusControl;
