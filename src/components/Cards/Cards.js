import React from "react";
import Card from "./Card/Card";

export default function Cards({ data }) {
  return (
    <>
      <div className="grid place-items-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
          {data.map((object) => (
            <div className="">
              <Card
                key={object.username}
                name={object.name}
                username={object.username}
                cover={object.cover}
                profilPic={object.profilPic}
                description={object.description}
                followers={object.followers}
                content={object.content}
                facebook={object.social.facebook}
                twitter={object.social.twitter}
                instagram={object.social.instagram}
                youtube={object.social.youtube}
                hyperlink={object.social.hyperlink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
