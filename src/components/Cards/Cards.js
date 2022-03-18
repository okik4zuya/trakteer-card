import React from "react";
import Card from "./Card/Card";

export default function Cards({ data }) {
  return (
    <>
      <Card data={data[0]} />
    </>
  );
}
