"use client";

import Header from "@/components/header";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
export type UserType = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
};

export default function Home() {
  const [color, setColor] = useState("text-blue-800");
  const [userData, setUserData] = useState<UserType | undefined>();
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://192.168.0.117:8000/protected",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
        console.log(response.data);
        // if (!response.data.id) {
        // }
      } catch (error) {
        router.push("/login");
        console.error("Failed to fetch user data:", error);

        // 에러 처리 (401 에러는 인터셉터에서 처리됨)
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="border-b">
      <Header
        username={userData?.name}
        photoUrl={userData?.photoUrl}
        color={color}
      />
    </div>
  );
}
