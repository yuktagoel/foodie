import React from "react";
import { useEffect, useState } from "react";
import { cloudnaryURL } from "../../utils/constants";
import RestroMenuShimmer from "../loader-page/RestroMenuShimmer";
import { Toggle } from "../reusable/ToggleButton";
import { useParams } from "react-router-dom";
import useMenuData from "../hooks/useMenuData";

const RestroMenu = () => {
  const [onlyVeg, setOnlyVeg] = useState(false);
  const { resId } = useParams();

  const resInfo = useMenuData(resId);

  resInfo && console.log(resInfo);
  return resInfo.length === 0 ? (
    <RestroMenuShimmer />
  ) : (
    <div className="restroMenu__container">
      <div className="restroMenu__wrapper">
        <div>
          <div className="restroMenu__name">{resInfo.name}</div>
          <div className="restroMenu__cuisines">
            {resInfo.cuisines.join(",")}
          </div>
          <div className="restroMenu__address">
            {resInfo.locality + ", " + resInfo.city}
          </div>
          <div className="restroMenu__rating">
            {resInfo.avgRating + " Rating"}
          </div>
          <div className="restroMenu__cost_for_two p-0.5">
            {resInfo.costForTwoMessage}
          </div>
        </div>
        <div className="restroMenu__image">
          <img
            alt={"Restaurant Logo"}
            src={cloudnaryURL + resInfo.cloudinaryImageId}
          ></img>
        </div>
      </div>
      <Toggle
        className="restroMenu__toggle pt-6"
        label="Veg"
        toggled={onlyVeg}
        onClick={() => {
          setOnlyVeg(!onlyVeg);
        }}
      />
    </div>
  );
};

export default RestroMenu;
