"use client";
import { useState } from "react";
import axios from "axios";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import DropDown from "@/components/dropDown";
import Registerdropdown from "@/components/registerdropdown";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.117:8000/register", {
        name,
        email,
        password,
        photoUrl,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-gray-800 bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-96 h-auto mx-auto rounded-sm border-4 p-4"
      >
        <div className="relative">
          <Image
            className="w-[180px] mx-auto my-[24px]"
            onClick={() => {
              setIsMenuShow(!isMenuShow);
            }}
            src="/instagramLogo.svg"
            alt="Instagram Logo"
            width={180}
            height={48}
          />
          <div
            className={`${
              !isMenuShow && "hidden"
            } absolute left-[260px] bottom-6`}
          >
            <Registerdropdown />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-gray-500 text-center mb-8">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>

          <div className="bg-[#378bde] text-white text-center rounded-lg w-72 mx-auto h-10 pt- flex items-center justify-center gap-2">
            <FaFacebookSquare />
            <a href="http://localhost:3000/facebooklogin" target="_blank">
              facebook으로 로그인
            </a>
          </div>
          <div className="flex items-center py-8">
            <div className="border-b h-[1px] w-full" />
            <div className="mx-4 font-bold opacity-50 text-sm">OR</div>
            <div className="border-b h-[1px] w-full" />
          </div>
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="my-2 w-72 h-8 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px]"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="my-2 w-72 h-8 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="my-2 w-72 h-8 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px]"
        />

        <input
          type="text"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="my-2 w-72 h-8 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px]"
          placeholder="Photo URL"
        />

        <div
          className={`rounded-full border top-[32px] justify-center mx-auto ${
            !photoUrl && "hidden"
          }`}
          style={{
            width: "120px",
            height: "120px",
            backgroundImage: `url(${photoUrl})`,
            backgroundSize: "contain",
          }}
        />
        {/* <div>
          <FaUserCircle className={`${ photoUrl && "hidden"}`}
          <div>
            className={`hidden rounded-full border top-[32px] justify-center mx-auto absolute${
              photoUrl && "block"
            }`}
            style={{
              width: "120px",
              height: "120px",
              backgroundImage: `url(${photoUrl})`,
              backgroundSize: "contain",
            }}
            </div>
        </div> */}

        <div className="text-center text-xs w-64 mx-auto border-x">
          저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
          업로드했을 수도 있습니다.{" "}
          <div className="text-blue-600">더 알아보기</div>
        </div>

        <button
          type="submit"
          className="bg-[#378bde] text-white w-72 h-9 rounded mx-auto m-4 text-md"
        >
          가입
        </button>
      </form>
      <div className="w-96 mt-4 mx-auto h-16 border-4 flex justify-center items-center gap-2">
        <div>계정이 있나요?</div>
        <div className="text-blue-500">
          <Link href="http://localhost:3000/login">로그인</Link>
        </div>
      </div>
      <div className="text-center my-5">앱 다운로드</div>
    </div>
  );
}
