import React from "react";

interface Props {}

const Registerdropdown: React.FC<Props> = ({}) => {
  return (
    <div className="border-4 border-black w-44 h-auto flex flex-col text-center">
      <div className=" border-b">
        <a href="http://localhost:3000/facebooklogin" target="_blank">
          <div className="font-semibold text-[#378bde]">facebook</div>으로
          로그인
        </a>
      </div>
      <a href="http://localhost:3000/login" target="_blank">
        로그인
      </a>
    </div>
  );
};

export default Registerdropdown;
