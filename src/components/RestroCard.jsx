import React from "react";
import { cloudnaryURL } from "../utils/constants";

const RestroCard = ({ resdata }) => {
  return (
    <div className="flex flex-col w-64 hover:border-2 cursor-pointer bg-slate-300 p-4 m-2 gap-2">
      <img
        src={
          cloudnaryURL +
          resdata.cloudinaryImageId
        }
        alt={"food"}
      ></img>
      <div className="text-xl font-medium">{resdata.name}</div>
      <div className="text-sm font-extralight truncate">
        {resdata.cuisines.join(",")}
      </div>
      <div className="text-xl font-light">{resdata.costForTwo}</div>
      <div className="text-xl font-light">Rating: {resdata.avgRating}</div>
    </div>
  );
};

export default RestroCard;
