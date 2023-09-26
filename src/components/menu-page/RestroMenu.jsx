import React from "react";
import { useState } from "react";
import { cloudnaryURL } from "../../utils/constants";
import RestroMenuShimmer from "../loader-page/RestroMenuShimmer";
import { useParams } from "react-router-dom";
import useMenuData from "../hooks/useMenuData";
import StarSvg from "../reusable/star";

const RestroMenu = () => {
  const [onlyVeg, setOnlyVeg] = useState(false);
  const { resId } = useParams();

  console.log(useMenuData(resId));
  const resInfo = useMenuData(resId);

  if (resInfo.length === 0) {
    return <RestroMenuShimmer />;
  }

  const restaurantName = resInfo.cards[0].card.card.info;

  return (
    <div className="restroMenu__container">
      <div className="restroMenu__wrapper">
        <div>
          <div className="restroMenu__name">{restaurantName.name}</div>
          <div className="restroMenu__rating">
            {restaurantName.avgRating}
            <StarSvg />
          </div>
          <div className="restroMenu__cuisines">
            {restaurantName.cuisines?.join(",")}
          </div>
          <div className="restroMenu__address">{restaurantName.areaName}</div>
          <div className="restroMenu__cost_for_two">
            {restaurantName.costForTwoMessage}
          </div>
          <div className="restroMenu__fees_message">
            {restaurantName.feeDetails?.message}
          </div>
        </div>
        <div className="restroMenu__image">
          <img
            alt={"Restaurant Logo"}
            src={cloudnaryURL + restaurantName.cloudinaryImageId}
          ></img>
        </div>
      </div>
      {/* <Toggle
          className="restroMenu__toggle"
          label="Veg"
          toggled={onlyVeg}
          onClick={() => {
            setOnlyVeg(!onlyVeg);
          }}
        /> */}
    </div>
  );
};

export default RestroMenu;
