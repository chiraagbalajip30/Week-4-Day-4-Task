import { useState, useEffect } from "react";

const DynamicInfoBanner = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("🚀 Welcome! Data loaded successfully.");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto 
                flex flex-col items-center justify-center 
                bg-white shadow-xl rounded-xl gap-4 p-6"
    >
      <h2 className="text-xl font-semibold mb-2">Dynamic Info Banner</h2>
      {loading ? (
        <p className="text-gray-500">Loading ...</p>
      ) : (
        <p className="text-green-600 font-medium">{data}</p>
      )}
    </div>
  );
};

export default DynamicInfoBanner;
