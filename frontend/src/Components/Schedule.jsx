import React, { useState } from "react";

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [scheduleData, setScheduleData] = useState({});

  const teamMembers = ["椎名", "マルチン", "太田"]; // チームメンバー

  const getWeekDates = (startDate) => {
    const dates = [];
    const start = new Date(startDate);
    start.setDate(start.getDate() - start.getDay()); // 週の開始日を日曜日に設定
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleWeekChange = (direction) => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(currentWeek.getDate() + direction * 7);
    setCurrentWeek(newWeek);
  };

  const handleAddSchedule = (member, date) => {
    const newSchedule = prompt(`「${member}」さんの予定を入力してください:`, "");
    if (newSchedule) {
      const key = `${date.toDateString()}-${member}`;
      setScheduleData({
        ...scheduleData,
        [key]: [...(scheduleData[key] || []), newSchedule],
      });
    }
  };

  const weekDates = getWeekDates(currentWeek);

  return (
    <div>
      <h3>予定表</h3>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <button onClick={() => handleWeekChange(-1)}>{"<<"} 先週</button>
        <div>{`${weekDates[0].toLocaleDateString()} - ${weekDates[6].toLocaleDateString()}`}</div>
        <button onClick={() => handleWeekChange(1)}>来週 {">>"}</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>メンバー</th>
            {weekDates.map((date, index) => (
              <th key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {date.toLocaleDateString()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member) => (
            <tr key={member}>
              <td style={{ border: "1px solid #ccc", padding: "8px", fontWeight: "bold" }}>{member}</td>
              {weekDates.map((date, index) => {
                const key = `${date.toDateString()}-${member}`;
                return (
                  <td key={index} style={{ border: "1px solid #ccc", padding: "8px", verticalAlign: "top" }}>
                    <button
                      onClick={() => handleAddSchedule(member, date)}
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      🖊
                    </button>
                    {scheduleData[key]?.map((schedule, i) => (
                      <div key={i} style={{ marginBottom: "4px", background: "#f9f9f9", padding: "4px" }}>
                        {schedule}
                      </div>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
