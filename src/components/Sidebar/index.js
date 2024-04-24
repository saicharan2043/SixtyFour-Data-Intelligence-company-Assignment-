import { IoSearch } from "react-icons/io5";
import {
  IoIosSettings,
  IoMdCalendar,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbHeadphonesFilled } from "react-icons/tb";
import { RiBuilding2Fill } from "react-icons/ri";
import "./index.css";

const TabsList = [
  { id: 1, title: "Search", iconName: "IoSearch" },
  { id: 1, title: "Dashboard", iconName: "FiMonitor" },
  { id: 1, title: "Help", iconName: "IoMdHelpCircleOutline" },
  { id: 1, title: "Calendar", iconName: "IoMdCalendar" },
  { id: 1, title: "Company", iconName: "RiBuilding2Fill" },
  { id: 1, title: "Wallet", iconName: "BiSolidDollarCircle" },
  { id: 1, title: "Support", iconName: "TbHeadphonesFilled" },
];

const Sidebar = (props) => {
  const { changeExpandAndCollapse, isTrue } = props;
  const desplayIcon = (value) => {
    switch (value) {
      case "IoSearch":
        return <IoSearch className="icon-of-tab" />;
      case "FiMonitor":
        return <FiMonitor className="icon-of-tab" />;
      case "IoMdHelpCircleOutline":
        return <IoMdHelpCircleOutline className="icon-of-tab" />;
      case "IoMdCalendar":
        return <IoMdCalendar className="icon-of-tab" />;
      case "RiBuilding2Fill":
        return <RiBuilding2Fill className="icon-of-tab" />;
      case "BiSolidDollarCircle":
        return <BiSolidDollarCircle className="icon-of-tab" />;
      default:
        return <TbHeadphonesFilled className="icon-of-tab" />;
    }
  };
  return (
    <div className={`sidebar-container ${isTrue && "Expand-width"}`}>
      <div className="logo-and-tab-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKeQyaRhWB5BNXPLpRfvMjicH59m8A2tC63fohhbHwpBL7PmqrWHhyoxKWEtWStX81M8&usqp=CAU"
          alt=""
          className="logo"
          onClick={() => changeExpandAndCollapse()}
        />
        <ul className="tabs-container">
          {TabsList.map((eachValue) => (
            <li
              className={`list-of-icons ${!isTrue && "center-icons"}`}
              key={eachValue.id}
            >
              {desplayIcon(eachValue.iconName)}
              <p className={`text-of-icon ${isTrue && "show-text"}`}>
                {eachValue.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`settings-container ${!isTrue && "center-icons"}`}>
        <IoIosSettings className="icon-of-tab" />
        <p className={`text-of-icon ${isTrue && "show-text"}`}>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
