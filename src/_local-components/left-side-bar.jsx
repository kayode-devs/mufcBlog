import React from 'react'

const LeftSideBar = () => {
  return (
    <div className="w-[15%] hidden md:flex flex-col justify-between">
          <div className="w-[100%] rounded-[10px] h-[13%] p-3 bg-white">
            User
          </div>
          <div className="w-[100%] rounded-[10px] h-[77%] p-3 bg-white">
            <h3 className="text-[1.2rem] font-bold text-center">Categories</h3>
          </div>
        </div>
  )
}

export default LeftSideBar;
