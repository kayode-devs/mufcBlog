import React from "react";

const RightSidebar = () => {
  return (
    <div className="hidden md:grid w-[23%]  ml-5 p-5  bg-white  rounded-[10px]">
      <div>
        <h2 className="text-[1.3em] text-primary font-bold my-2">
          Downloads
        </h2>
        <p className="text-zinc-300 text-[0.85rem]">There are no downloads yet...</p>
      </div>
      <div className="flex justify-between flex-col">
        <div className="">
          <div>
            <h2 className="text-[1.3em] text-primary font-bold my-2">
              Uploads
            </h2>
            <p className="text-zinc-300 text-[0.85rem]">Click the button to make an upload...</p>
          </div>
          </div>
          <div><button className="bg-secondary text-white rounded-md px-3 py-2 w-[100%] font-medium">Upload</button></div>
      </div>
    </div>
  );
};

export default RightSidebar;
