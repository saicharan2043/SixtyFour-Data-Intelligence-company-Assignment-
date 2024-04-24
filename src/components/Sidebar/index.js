import { IoSearch } from "react-icons/io5";
import {
  IoIosSettings,
  IoMdCalendar,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbHeadphonesFilled } from "react-icons/tb";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-and-tab-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKeQyaRhWB5BNXPLpRfvMjicH59m8A2tC63fohhbHwpBL7PmqrWHhyoxKWEtWStX81M8&usqp=CAU"
          alt=""
          className="logo"
        />
        <ul className="tabs-container">
          <li className="list-of-icons">
            <IoSearch className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <FiMonitor className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <IoMdHelpCircleOutline className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <IoMdCalendar className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <IoSearch className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <BiSolidDollarCircle className="icon-of-tab" />
          </li>
          <li className="list-of-icons">
            <TbHeadphonesFilled className="icon-of-tab" />
          </li>
        </ul>
      </div>
      <div className="settings-container">
        <IoIosSettings className="icon-of-tab" />
      </div>
    </div>
  );
};

export default Sidebar;
