import { useEffect, useState } from "react";
import { Card, Button, Typography } from "antd";
import { getReadingList } from "../services/readingListService";
import "../styles/BookReview.scss";

const { Title, Paragraph } = Typography;

export default function BookReview() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    getReadingList().then((data) => {
      setBooks(data);
      pickRandomBook(data);
    });
  }, []);

  const pickRandomBook = (list) => {
    const random = list[Math.floor(Math.random() * list.length)];
    setCurrentBook(random);
  };

  if (!currentBook) return <div>Loading...</div>;

  return (
    <div className="bookreview-container">
      {/* Genel Başlık */}
      <Title level={1} className="bookreview-title">
        Book Review
      </Title>

      <Card className="book-card" bordered>
        <Title level={1}>{currentBook.title}</Title>

        <Paragraph className="book-author">
          <strong>Author:</strong> {currentBook.author}
        </Paragraph>
        <Paragraph>
          <strong>Genre:</strong> {currentBook.genre}
        </Paragraph>
        <Paragraph>
          <strong>Pages:</strong> {currentBook.pages}
        </Paragraph>
        <Paragraph>
          <strong>Rating:</strong> ⭐ {currentBook.rating}/5
        </Paragraph>

        <Paragraph>
          <strong>Summary:</strong>
          <br />
          {currentBook.summary}
        </Paragraph>

        <Paragraph className="book-final">
          <strong>Final Thought:</strong>
          <br />
          {currentBook.finalThought}
        </Paragraph>

        <Button
          style={{
            background: "linear-gradient(135deg,rgb(163, 162, 136), #5d5a2b)",
            border: "none",
            color: "#fff",
          }}
          type="primary"
          onClick={() => pickRandomBook(books)}
        >
          Next Book
        </Button>
      </Card>
    </div>
  );
}
