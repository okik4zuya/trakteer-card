import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Menu() {
  return (
    <>
      <div
        className="absolute top-[10px] right-[14px] transform rotate-90 text-white cursor-pointer"
        onClick={() => alert("menu")}
      >
        <MoreHorizIcon sx={{ fontSize: 20 }} />
      </div>
    </>
  );
}
