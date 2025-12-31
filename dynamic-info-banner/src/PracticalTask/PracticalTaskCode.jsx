import PageTitle from "./PageTitle";
import SimulatingData from "./SimulatingData";
import { Link } from "react-router-dom";

function PracticalTaskCode() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {" "}
      {/* Parent with relative positioning */}
      {/* Fixed Button at the Top of the Screen */}
      <Link to="/">
        <button className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          Extra Button
        </button>
      </Link>
      {/* Your Existing Centered Content - Unchanged */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto min-h-screen flex flex-col items-center justify-center bg-white shadow-xl rounded-xl gap-4 p-6">
        <PageTitle />
        <SimulatingData />
      </div>
    </div>
  );
}

export default PracticalTaskCode;
