"use client";
import DropDown from "./dropDown";
import HeaderTilte from "./headerTilte";
import React, { useState } from "react";

interface Props {
  username: string | undefined;
  photoUrl: string | undefined;
  color: string;
}

const Header: React.FC<Props> = ({ username, photoUrl, color }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const ImgUrl = "https://i.imgur.com/y5ImUu2.png";

  return (
    <div className="flex justify-between mx-[120px] h-[80px] items-center ">
      <HeaderTilte userName={username} color={color} />
      <div className="relative">
        <div
          onClick={() => {
            setIsMenuShow(!isMenuShow);
          }}
          className="rounded-full"
          style={{
            width: "50px",
            height: "50px",
            backgroundImage: `url(${photoUrl})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={`${!isMenuShow && "hidden"} absolute right-0 top-[60px]`}
        >
          <DropDown />
        </div>
      </div>

      {/* <div className="flex gap-3 font-thin">
          <LoginButton title="Sign in" isBorder={true} />
          <LoginButton title=" Sign up" isBorder={false} />
        </div> */}
    </div>
  );
};

export default Header;
