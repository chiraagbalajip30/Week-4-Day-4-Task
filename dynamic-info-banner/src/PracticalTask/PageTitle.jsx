import { useEffect, useState } from "react";

const PageTitle = () => {
  useEffect(() => {
    console.log("PageTitle Component Mounted");
    document.title = "Day 4 - useEffect Learning";
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-4 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold">Page Title Updated</h2>
        <p className="text-gray-600">Check your browser tab title 👆</p>
        <p className="text-gray-600 text-sm">Open console to see mount log</p>
      </div>
    </div>
  );
};

export default PageTitle;
