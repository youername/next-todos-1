import React from "react";

interface Props {
  title: string;
  color?: string;
  isBorder?: boolean;
}

const LoginButton: React.FC<Props> = ({
  title: name = "",
  color = "skyblue",
  isBorder = false,
}) => {
  return (
    <div
      className={`${
        isBorder && "border"
      } border w-[80px] text-center py-2 rounded-lg`}
      style={{ color: color }}
    >
      {name}
    </div>
  );
};

export default LoginButton;
