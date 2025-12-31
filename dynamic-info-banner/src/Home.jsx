import DynamicInfoBanner from "./DynamicInfoBanner";
import PracticalTaskCode from "./PracticalTask/PracticalTaskCode";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-around">
      <Link to="/practical-task">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
          Practical Task
        </button>
      </Link>
      <DynamicInfoBanner />
    </div>
  );
};

export default Home;
