import LoginButton from "@/public/components/loginButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="border-b">
      <div className="flex justify-between mx-10">
        <div>Todos</div>
        <div className="flex">
          <LoginButton title="Sign in" color="red" isBorder={true} />
          <LoginButton title=" Sign up" color="skyblue" isBorder={false} />
        </div>
      </div>
    </div>
  );
}
