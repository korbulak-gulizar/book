import { Typography, Input, Button } from "antd";
import "./InterestForm.scss";

const { Title } = Typography;
const { TextArea } = Input;

export default function InterestForm() {
  return (
    <>
      <div className="interest-form">
        <Title level={4} className="interest-question">
          1. What book topics interest you this year?
        </Title>
        <TextArea
          className="interest-textarea"
          placeholder="Write your thoughts..."
          autoSize={{ minRows: 3, maxRows: 9 }}
        />

        <Title level={4} className="interest-question">
          2. Which genres do you want to explore more?
        </Title>
        <TextArea
          className="interest-textarea"
          placeholder="Write your thoughts..."
          autoSize={{ minRows: 3, maxRows: 9 }}
        />

        <Title level={4} className="interest-question">
          3. What motivates you to read?
        </Title>
        <TextArea
          className="interest-textarea"
          placeholder="Write your thoughts..."
          autoSize={{ minRows: 3, maxRows: 9 }}
        />

        <Title level={4} className="interest-question">
          4. What kind of books inspire you the most?
        </Title>
        <TextArea
          className="interest-textarea"
          placeholder="Write your thoughts..."
          autoSize={{ minRows: 3, maxRows: 9 }}
        />

        <Button
          size="large"
          style={{
            background: "linear-gradient(135deg,rgb(163, 162, 136), #5d5a2b)",
            border: "none",
            color: "#fff",
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
}
