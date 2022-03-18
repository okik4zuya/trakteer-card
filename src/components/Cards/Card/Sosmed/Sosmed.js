import React from "react";
import SingleSosmed from "./SingleSosmed/SingleSosmed";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";

export default function Sosmed(props) {
  const { facebook, twitter, instagram, youtube, hyperlink } = props.props;

  return (
    <>
      <div className="flex mx-[16px]">
        <SingleSosmed link={facebook}>
          <FacebookRoundedIcon sx={{ fontSize: 20 }} />
        </SingleSosmed>
        <SingleSosmed link={twitter}>
          <TwitterIcon sx={{ fontSize: 20 }} />
        </SingleSosmed>
        <SingleSosmed link={instagram}>
          <InstagramIcon sx={{ fontSize: 20 }} />
        </SingleSosmed>
        <SingleSosmed link={youtube}>
          <YouTubeIcon sx={{ fontSize: 20 }} />
        </SingleSosmed>
        <SingleSosmed link={hyperlink}>
          <LinkIcon sx={{ fontSize: 20 }} />
        </SingleSosmed>
      </div>
    </>
  );
}
