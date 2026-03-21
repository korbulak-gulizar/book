import { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { getReadingList } from "../services/readingListService";
import "../styles/ReadingTracker.scss";

const { Title } = Typography;

export default function ReadingTracker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getReadingList().then((res) => {
      // day alanı tarih ise → sadece gün numarasına çevir
      const formatted = res.map((item) => {
        let dayNumber = item.day;

        // Eğer day "2024-01-10" gibi bir tarihse → split ile gün al
        if (typeof item.day === "string" && item.day.includes("-")) {
          dayNumber = Number(item.day.split("-")[2]);
        }

        return {
          ...item,
          day: Number(dayNumber), // kesin rakam olsun
        };
      });

      // Günleri küçükten büyüğe sırala
      formatted.sort((a, b) => a.day - b.day);

      setData(formatted);
    });
  }, []);

  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      sorter: (a, b) => a.day - b.day,
      width: "10%",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: "20%",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: "20%",
    },
    {
      title: "Duration (min)",
      dataIndex: "duration",
      key: "duration",
      width: "20%",
    },
    {
      title: "Pages Read",
      dataIndex: "pagesRead",
      key: "pagesRead",
      width: "20%",
    },
  ];

  return (
    <div className="readingtracker-container">
      <Title level={1} className="readingtracker-title">
        Reading Tracker
      </Title>
      <Title
        level={4}
        style={{
          marginTop: "-10px",
          color: "#eee",
          fontFamily: "Dancing Script",
        }}
      >
        Of This Month
      </Title>

      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        bordered
        pagination={false}
      />
    </div>
  );
}
