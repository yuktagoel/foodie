import React from "react";
import { cloudnaryURL } from "../utils/constants";
import StarSvg from "./reusable/star";

const RestroCard = ({ resdata }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    locality,
  } = resdata;
  console.log(resdata);
  return (
    <div
      data-testid="resCard"
      className="w-80 min-h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 my-4 p-4"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={cloudnaryURL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-base truncate">{name}</h3>
      <div className="flex flex-row gap-1 items-center">
        <span>{avgRating}</span>
        <StarSvg />
      </div>
      <h4 className="truncate  font-extralight">{cuisines.join(", ")}</h4>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4>{sla.deliveryTime} minutes</h4> */}
      <h4 className="font-extralight text-sm ">{locality}</h4>
    </div>
  );
};

export default RestroCard;
