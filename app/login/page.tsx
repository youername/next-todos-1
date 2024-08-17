"use client";
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import instagramLogo from "../../public/instagramLogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("john2@example.com");
  const [password, setPassword] = useState("password123");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.117:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //justify-center를 이 div에 넣으면 적용이 안됨
    <div className="bg-white text-gray-800 h-screen">
      <div className="wrap w-[350px] mx-auto  flex justify-center pt-4 border border-red-500">
        {/* //div가 없으면 보더 h가 한계가 사라 */}
        <div className="flex flex-col gap-y-4">
          <div className="border-2 px-6 ">
            <Image
              className="w-[180px] mx-auto my-[48px]"
              src={instagramLogo}
              alt={"picture"}
            />

            <form
              onSubmit={handleSubmit}
              className="w-[270px] mx-auto flex flex-col gap-2"
              action=""
            >
              <input
                className="border h-[38px] w-ful bg-[#fafafa] rounded-sm px-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button
                type="submit"
                className="bg-[#378bde] p-2 rounded-lg my-[20px] text-center font-bold text-white"
              >
                Log in
              </button>
            </form>

            <div className="flex items-center mx-auto">
              <div className="border-b h-[1px] w-full" />
              <div className="mx-4 font-bold opacity-50 text-sm">OR</div>
              <div className="border-b h-[1px] w-full" />
            </div>

            <div className="mx-auto">
              <div className="flex flex-col gap-6 my-6 mx-auto text-center text-sm text-blue-900">
                <div>
                  <Link href="/register" className="font-bole">
                    Sign up
                  </Link>
                </div>

                <div className="text-xs font-semibold">Forgot password?</div>
              </div>
            </div>
          </div>

          <div className="border-2 w-full h-20 flex gap-1 items-center justify-center">
            계정이 없으신가요?
            <div className="text-blue-600 font-bold">가입하기</div>
          </div>
          <div className="text-center"> 앱을 다운로드하세요.</div>
        </div>
      </div>
      <div className="flex gap-8 justify-center mt-10 font-thin">
        <div>meta</div>
        <div>소개</div>
        <div>블로그</div>
        <div>채용 정보</div>
        <div>도움말</div>
        <div>개인정보처리방침</div>
        <div>약관</div>
        <div>위치</div>
        <div>rgram Lite</div>
        <div>Threads</div>
        <div>연락처 업로드 & 비사용자</div>
        <div>meta verified</div>
      </div>
    </div>
  );
}
