import React from "react";
import { cloudnaryURL } from "../utils/constants";

const RestroCard = ({ resdata }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resdata;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-64 min-h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={cloudnaryURL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestroCard;
