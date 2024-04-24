import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const contentCardDetails = [
  {
    id: 1,
    title: "State of Markets",
    description:
      "The last few years have seen a very substantiol step up in capital",
    url: "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg",
  },
  {
    id: 2,
    title: "The Centeral Capex Surge",
    description:
      "The last few years have seen a very substantiol step up in capital",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8qa6SaHaOltYvYUy6BYu-_fGAMbDiB9SgV808-IYwQ&s",
  },
  {
    id: 3,
    title: "Direct Taxes and business Cycle",
    description:
      "The last few years have seen a very substantiol step up in capital",
    url: "https://application.axisbank.co.in/WebForms/axis-support/assetsNew/images/Blogs/DigitalBanking_800x405.jpg",
  },
  {
    id: 4,
    title: "Banking Montitor",
    description:
      "The last few years have seen a very substantiol step up in capital",
    url: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/top-10-digital-banking-security-solutions-717x404.jpg",
  },
  {
    id: 5,
    title: "State of Markets",
    description:
      "The last few years have seen a very substantiol step up in capital",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLhMxGkuPMAmZzEsYYng6npVj44x-eOsQRwUQmpmGQw&s",
  },
];

const ContentCard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slide-container">
      <Slider {...settings}>
        {contentCardDetails.map((eachValue) => (
          <div className="content-card" key={eachValue.id}>
            <img
              src={eachValue.url}
              alt={eachValue.title}
              className="img-of-card"
            />
            <p className="title-of-card">{eachValue.title}</p>
            <p className="description-of-card">{eachValue.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContentCard;
