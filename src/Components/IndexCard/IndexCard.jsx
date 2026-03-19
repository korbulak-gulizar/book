import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "../IndexCard/IndexCard.scss";

const { Meta } = Card;

export default function IndexCard({ title, description, image, url }) {
  const navigate = useNavigate();

  return (
    <Card
      className="index-card"
      onClick={() => navigate(`/${url}`)}
      cover={<img draggable={false} alt={title} src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}
