import { useEffect, useState } from "react";

const PageTitle = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData("Welcome to Day 4 - useEffect");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-4 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Simulated Data Loading</h2>

        {loading ? (
          <p className="text-gray-500 mt-2">Loading...</p>
        ) : (
          <p className="text-green-600 mt-2">{data}</p>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
