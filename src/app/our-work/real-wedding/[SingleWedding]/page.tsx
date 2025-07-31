import React from "react";

export default async function page({ params }: any) {
  const coupleName = await params?.SingleWedding
  console.log("coupleName",coupleName)
  return <div className="min-h-screen flex justify-center items-center text-red-500">{params?.SingleWedding}</div>;
}
