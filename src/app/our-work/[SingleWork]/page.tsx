import React from "react";

export default function page({ params }: any) {
  console.log("params", params);
  return <section className="text-darkMutedRed">{params?.SingleWork}</section>;
}
