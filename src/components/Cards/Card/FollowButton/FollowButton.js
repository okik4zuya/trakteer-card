import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function FollowButton() {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <>
      <div
        className={` absolute right-[16px]  h-[32px] top-[76px] px-4 rounded-full ${
          isFollow ? "bg-gray-200 text-gray-700" : "bg-[#3CD278] text-white"
        } text-[14px] font-bold leading-[17.5px] cursor-pointer`}
        onClick={() => setIsFollow(!isFollow)}
      >
        <div className=" h-full grid place-items-center">
          <div className="flex ">
            <div className="mr-2 -ml-2">
              {isFollow ? (
                <CheckIcon sx={{ fontSize: 20 }} />
              ) : (
                <PersonAddIcon sx={{ fontSize: 20 }} />
              )}
            </div>
            <div>{isFollow ? "Following" : "Follow"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
