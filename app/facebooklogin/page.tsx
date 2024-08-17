"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  interface Props {}

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.117:8000/register", {
        name,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-[#e9ebee]">
      <div className="bg-[#3d5e97] h-1/6  font-extrabold text-5xl items-center pt-11 pl-64 flex gap-4 rounded">
        facebook
        <a
          href="http://localhost:3000/register"
          target="_blank"
          className="bg-[#65ad2e] h-9 w-24 text-sm font-medium text-center pt-2"
        >
          새 계경 만들기
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-4 rounded-md w-[612px] h-auto bg-[#ffffff] mx-auto items-center pt-6 mt-16"
      >
        <div className="text-black font-medium">Facebook에 로그인</div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="전화번호 혹은 id"
          className="my-2 w-72 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px] h-10 text-black"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="my-2 w-72 h-10 m-auto border-2 rounded bg-[#fafafa] text-xs pl-[2px] text-black"
        />
        <button
          type="submit"
          className="bg-[#3d5e97] text-white w-72 h-9 rounded mx-auto m-4 text-md "
        >
          가입
        </button>
        <button className="m-auto text-xs text-[#3d5e97]">
          계정을 잃으셨나요?
        </button>
        <div className="flex items-center mx-auto text-black py-7">
          <div className="border-b h-[1px] w-full border-black" />
          <div className="mx-4 font-bold opacity-50 text-sm">
            ⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯
          </div>
          <div className="border-b h-[1px] w-full border-black" />
        </div>
        <button className="h-12 w-28 bg-[#65ad2e] rounded text-xs text-center pt-2">
          새 계정 만들기
        </button>
        <div className="text-[#3d5e97] text-xs pt-2 mb-4">나중에 하기</div>
      </form>
    </div>
  );
}
