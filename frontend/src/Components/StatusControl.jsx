import React, { useState } from 'react';

const StatusControl = () => {
  const [status, setStatus] = useState('出社');
  const [comment, setComment] = useState('');
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
    console.log('保存データ:', dataToSave);
    alert('勤怠データが保存されました！');
    // 保存処理を実装する（例: API呼び出し）
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
      <h3>勤怠管理</h3>
      <div style={{ marginBottom: '8px' }}>
        <button onClick={handleCheckIn} style={{ marginRight: '8px' }}>
          出勤打刻
        </button>
        <button onClick={handleCheckOut}>退勤打刻</button>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          ステータス:
          <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ marginLeft: '8px' }}>
            <option value="出社">出社</option>
            <option value="在宅">在宅</option>
            <option value="出張">出張</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label>
          コメント:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ display: 'block', width: '100%', marginTop: '4px' }}
            rows="3"
          />
        </label>
      </div>
      <button onClick={handleSave} style={{ width: '100%' }}>
        保存
      </button>
    </div>
  );
};

export default StatusControl;
