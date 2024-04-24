import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import LibraryCard from "../LibraryCard";
import "./index.css";

const LabraryDetails = [
  { id: 1, title: "My Saved Library 1", date: "21-07-2022" },
  { id: 2, title: "My Saved Library 2", date: "25-04-2016" },
  { id: 3, title: "My Saved Library 3", date: "15-02-2015" },
  { id: 4, title: "My Saved Library 4", date: "25-05-2012" },
  { id: 5, title: "My Saved Library 5", date: "28-08-2020" },
];

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
        {LabraryDetails.map((eachValue) => (
          <LibraryCard labraryValues={eachValue} key={eachValue.id} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
