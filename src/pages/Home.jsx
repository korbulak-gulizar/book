import "../styles/Home.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="titel">
        <h1>Reading Journal</h1>

        <Link to="/index">
          <Button
            size="large"
            style={{
              background: "linear-gradient(135deg,rgb(163, 162, 136), #5d5a2b)",
              border: "none",
              color: "#fff",
            }}
          >
            Start Reading
          </Button>
        </Link>
      </div>
    </div>
  );
}
