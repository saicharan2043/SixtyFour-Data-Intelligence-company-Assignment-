import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import LibraryCard from "../LibraryCard";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="greeting-and-date-container">
        <div className="gretting-container">
          <h1 className="text-of-gretting-container">
            Good afternoon, Saichran
          </h1>
          <p className="discription-of-greeting">
            You are subcribed to Retail plan.
          </p>
        </div>
        <div className="date-container">
          <FaRegCalendar className="icons-of-date-and-time" />
          <p className="text-of-date-container">Today, 14 February</p>
          <IoMdTime className="icons-of-date-and-time" />
          <p className="text-of-date-container">15:35</p>
          <IoNotificationsOutline className="icon-of-notification" />
        </div>
      </div>
      <ul className="ul-list-labrary">
        <LibraryCard />
        <LibraryCard />
        <LibraryCard />
        <LibraryCard />
      </ul>
    </div>
  );
};

export default Header;
