import { useState } from "react";
import { Input, Typography, Card } from "antd";
import "../styles/MyFavorite.scss";

const { Title } = Typography;
const { TextArea } = Input;

export default function MyFavorite() {
  const [form, setForm] = useState({
    author: "",
    book: "",
    genre: "",
    quote: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="myfavorite-container">
      <Title level={1} className="myfavorite-title">
        My Favorite
      </Title>

      <Card className="favorite-card" bordered>
        <div className="favorite-field">
          <label>Favorite Author</label>
          <Input
            value={form.author}
            onChange={(e) => handleChange("author", e.target.value)}
            placeholder="Type your favorite author..."
          />
        </div>

        <div className="favorite-field">
          <label>Favorite Book</label>
          <Input
            value={form.book}
            onChange={(e) => handleChange("book", e.target.value)}
            placeholder="Type your favorite book..."
          />
        </div>

        <div className="favorite-field">
          <label>Favorite Genre</label>
          <Input
            value={form.genre}
            onChange={(e) => handleChange("genre", e.target.value)}
            placeholder="Type your favorite genre..."
          />
        </div>

        <div className="favorite-field">
          <label>Favorite Quote</label>
          <Input
            value={form.quote}
            onChange={(e) => handleChange("quote", e.target.value)}
            placeholder="Type your favorite quote..."
          />
        </div>

        <div className="favorite-field">
          <label>Notes</label>
          <TextArea
            rows={4}
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Write your notes..."
          />
        </div>
      </Card>
    </div>
  );
}
