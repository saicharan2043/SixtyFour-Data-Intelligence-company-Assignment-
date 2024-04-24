import { RiBankCardFill } from "react-icons/ri";
import "./index.css";

const LibraryCard = (props) => {
  const { labraryValues } = props;
  const { title, date } = labraryValues;
  return (
    <li className="list-container-of-Library">
      <RiBankCardFill className="icon-Library" />
      <p className="text-of-Library">{title}</p>
      <p className="description-of-Library">{date}</p>
    </li>
  );
};
export default LibraryCard;
