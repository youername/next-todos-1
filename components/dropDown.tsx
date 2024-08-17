import React from "react";
import Logout from "./logout";

interface Props {}

const DropDown: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white text-gray-800 p-4 w-[12rem]">
      <div>log in</div>
      <Logout />
      <div>sign up</div>
    </div>
  );
};

export default DropDown;
