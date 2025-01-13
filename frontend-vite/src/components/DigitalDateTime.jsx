import React, { useEffect, useState } from 'react';
// import './DigitalDateTime.css';

const weekday = ['日', '月', '火', '水', '木', '金', '土'];

const DigitalDateTime = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const dayofweek = d.getDay();
      setDate(`${year}年${month}月${day}日 [${weekday[dayofweek]}]`);
      const hour = d.getHours().toString().padStart(2, '0');
      const minute = d.getMinutes().toString().padStart(2, '0');
      const seconds = d.getSeconds().toString().padStart(2, '0');
      setTime(`${hour}:${minute}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer); // クリーンアップ
  }, []);

  return (
    <div className="Digit">
      <p className="digit">{date} <span>{time}</span></p>
    </div>
  );
};

export default DigitalDateTime;