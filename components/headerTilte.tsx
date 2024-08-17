import React from "react";

interface Props {
  userName: string | undefined;
  color: string | undefined;
}

const HeaderTilte: React.FC<Props> = ({ userName, color }) => {
  return (
    <div className="flex gap-2">
      <div className={`${color} font-extrabold `}>Todos</div>
      <div className={``}>{userName}</div>
    </div>
  );
};

export default HeaderTilte;
