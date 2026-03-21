import { Typography, Card } from "antd";
import "../styles/Reading.scss";

const { Title, Paragraph } = Typography;

export default function Reading() {
  return (
    <div className="reading-container">
      <Card className="reading-card" bordered={false}>
        <Title level={1} className="reading-title">
          Reading
        </Title>

        <Paragraph className="reading-text">
          Reading is a wonderful way to broaden your knowledge, imagination, and
          creativity. Whether it's fiction or non-fiction, reading can transport
          you to different worlds, cultures, and perspectives. It can also help
          improve your vocabulary, critical thinking skills, and even reduce
          stress. Reading can be a fun and relaxing activity that you can enjoy
          anywhere, anytime. With so many genres and topics to choose from,
          there is always a book that can pique your interest. So why not pick
          up a book today and let your mind explore?
        </Paragraph>

        <div className="reading-second-wrapper">
          <Paragraph className="reading-second">
            "Reading takes you on an adventure, introducing you to new places,
            people, and ideas. It's more than just a hobby."
          </Paragraph>
        </div>
      </Card>
    </div>
  );
}
