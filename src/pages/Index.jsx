import IndexCard from "../Components/IndexCard/IndexCard";
import "../styles/index.scss";

export default function Index() {
  const cards = [
    {
      title: "Book Interest",
      description: "Of This Year",
      image: "https://picsum.photos/300/200?1",
      url: "interest",
    },
    {
      title: "Books-Read",
      description: "My planned readings",
      image: "https://picsum.photos/300/200?2",
      url: "readinglist",
    },
    {
      title: "Reading Tracker",
      description: "Of This Month",
      image: "https://picsum.photos/300/200?3",
      url: "readingtracer",
    },
    {
      title: "Book Review",
      description: "My book reviews",
      image: "https://picsum.photos/300/200?4",
      url: "bookrev",
    },
    {
      title: "My Favorite",
      description: "Book Things",
      image: "https://picsum.photos/300/200?5",
      url: "myfavorite",
    },
    {
      title: "Reading",
      description: "Motivation",
      image: "https://picsum.photos/300/200?6",
      url: "reading",
    },
  ];

  return (
    <div className="index">
      <div className="index-page">
        <h1 className="index-title">Reading Home</h1>

        <div className="cards-wrapper">
          {cards.map((card, i) => (
            <IndexCard
              key={i}
              title={card.title}
              description={card.description}
              image={card.image}
              url={card.url} // ✔️ DOĞRU
            />
          ))}
        </div>
      </div>
    </div>
  );
}
