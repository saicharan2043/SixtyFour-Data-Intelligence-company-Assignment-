import { RiBankCardFill } from "react-icons/ri";
import "./index.css";

const LibraryCard = () => {
  return (
    <li className="list-container-of-Library">
      <RiBankCardFill className="icon-Library" />
      <p className="text-of-Library">My Saved Library 1</p>
      <p className="description-of-Library">15-06-2002</p>
    </li>
  );
};
export default LibraryCard;
