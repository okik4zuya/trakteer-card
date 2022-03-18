import React, { useState, useEffect } from "react";

export default function Konten({ data }) {
  const { name, username, description, followers, content } = data;
  const [folNumber, setFolNumber] = useState();

  useEffect(() => {
    if (followers < 1000) {
      setFolNumber(followers);
    } else if (followers < 1000000) {
      setFolNumber(followers / 1000 + "k");
    } else if (followers < 1000000000) {
      setFolNumber(followers / 1000000 + "m");
    }
  }, []);
  return (
    <>
      <div className="flex relative  ml-[16px]">
        <div className=" mr-3 font-montserrat text-[14px] leading-[17.5px] font-semibold">
          {name}{" "}
        </div>
        <div className="text-gray-500 font-montserrat text-[12px] leading-[15px] font-normal">
          @{username}{" "}
        </div>
      </div>
      <div className="relative mt-2  mx-[16px] font-montserrat text-[12px] leading-[15px] font-normal">
        {description}
      </div>
      <div className="flex mt-4 relative ml-[16px] mr-[31px] ">
        <div className="font-montserrat text-[12px]  leading-[15px] ">
          <span className="font-black ">{folNumber}</span>
          <span className="font-semibold "> Followers</span>
        </div>
        <div className="relative w-[20px]">
          <div className="rounded-full w-[4px] h-[4px] bg-gray-300 absolute top-1/2 left-1/2"></div>
        </div>
        <div className="font-semibold font-montserrat text-[12px]  leading-[15px]">
          {content}
        </div>
      </div>
    </>
  );
}
