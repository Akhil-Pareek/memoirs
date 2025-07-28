import React from "react";

export default function page({ params }: any) {
  return <section className="text-darkMutedRed">{params?.SingleWork}</section>;
}
