import React from "react";
import { useEffect, useState } from "react";
import { cloudnaryURL } from "../../utils/constants";
import RestroMenuShimmer from "../loader-page/RestroMenuShimmer";
import { Toggle } from "../reusable/ToggleButton";
import { useParams } from "react-router-dom";
import useMenuData from "../hooks/useMenuData";
import StarSvg from "../reusable/star";

const RestroMenu = () => {
  const [onlyVeg, setOnlyVeg] = useState(false);
  const { resId } = useParams();

  const resInfo = useMenuData(resId);

  return resInfo.length === 0 ? (
    <RestroMenuShimmer />
  ) : (
    <div className="restroMenu__container">
      <div className="restroMenu__wrapper">
        <div>
          <div className="restroMenu__name">{resInfo.name}</div>
          <div className="restroMenu__rating">
            {resInfo.avgRating}
            <StarSvg />
          </div>
          <div className="restroMenu__cuisines">
            {resInfo.cuisines?.join(",")}
          </div>
          <div className="restroMenu__address">{resInfo.areaName}</div>
          <div className="restroMenu__cost_for_two">
            {resInfo.costForTwoMessage}
          </div>
          <div className="restroMenu__fees_message">
            {resInfo.feeDetails?.message}
          </div>
        </div>
        <div className="restroMenu__image">
          <img
            alt={"Restaurant Logo"}
            src={cloudnaryURL + resInfo.cloudinaryImageId}
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
