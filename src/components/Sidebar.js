import React from "react";
import { CiHome } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="border border-gray-800 w-[16%]">
      <div className="flex w-[40%] justify-between">
        <CiHome size={"24px"}/>
        <p>Home</p>
      </div>
    </div>
  );
};

export default Sidebar;
