import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="body-container">
        <Header />
      </div>
    </div>
  );
};

export default Home;
