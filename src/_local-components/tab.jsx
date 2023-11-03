import React from "react";

const Tabs = () => {
  const tabData = ["Civil", "Past questions", "Mech materials"];

  return (
    <div className="">
      <div className="ml-6">
        <h3 className="font-medium  text-red-400">Quick access</h3>
      </div>
      <div className="flex p-5 py-2 overflow-x-scroll">
      {tabData.map((tabValue, index) => (
        <div key={index} className="p-[10px] mx-1 min-w-fit bg-slate-200 rounded-[5px]">
          <p>{tabValue}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Tabs;
