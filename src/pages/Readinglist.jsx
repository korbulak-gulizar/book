import { useEffect, useState } from "react";
import { Table, Typography, Button, Input, Space } from "antd";
import {
  getReadingList,
  addBook,
  deleteBook,
} from "../services/readingListService";
import "../styles/ReadingList.scss";

const { Title } = Typography;

export default function ReadingList() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    getReadingList().then((data) => setBooks(data));
  }, []);

  const handleAdd = async () => {
    if (!form.title || !form.author) return;

    const newBook = await addBook(form);
    setBooks([...books, newBook]);

    setForm({ title: "", author: "", startDate: "", endDate: "" });
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((b) => b.id !== id));
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title", width: "25%" },
    { title: "Author", dataIndex: "author", key: "author", width: "20%" },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: "15%",
    },
    { title: "End Date", dataIndex: "endDate", key: "endDate", width: "15%" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
      width: "10%",
    },
  ];

  return (
    <div className="readinglist-container">
      <Title level={1} className="readinglist-title">
        Reading List
      </Title>

      <Space style={{ marginBottom: 20 }}>
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <Input
          placeholder="Start Date (YYYY-MM-DD)"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />
        <Input
          placeholder="End Date (YYYY-MM-DD)"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
        <Button
          style={{
            background: "linear-gradient(135deg,rgb(163, 162, 136), #5d5a2b)",
            border: "none",
            color: "#fff",
          }}
          type="primary"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Space>

      <Table
        dataSource={books}
        columns={columns}
        rowKey="id"
        bordered
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
