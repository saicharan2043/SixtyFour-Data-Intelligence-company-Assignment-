import ContentCard from "../ContentCard";
import "./index.css";

const Cards = () => {
  return (
    <div className="Cards-container">
      <ContentCard />
      <button className="view-more-btn">View more</button>
    </div>
  );
};

export default Cards;
