import React from "react";

export default function SingleSosmed({ link, children }) {
  return (
    <div
      className="grid place-items-center rounded-full  w-[30px] h-[30px] mr-[8px] bg-gray-200 cursor-pointer text-[#949494]"
      onClick={() => alert(`Go to ${link}`)}
    >
      {children}
    </div>
  );
}
