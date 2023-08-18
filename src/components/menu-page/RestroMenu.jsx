import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { cloudnaryURL, menuURL } from "../../utils/constants";
import RestroMenuShimmer from "../loader-page/RestroMenuShimmer";
import { Toggle } from "../reusable/ToggleButton";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [onlyVeg, setOnlyVeg] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menuURL + resId);
    const menu = await data.json();

    console.log(
      menu.data.cards[0].card.card.info.name,
      // [2].groupedCard.cardGroupMap.REGULAR.cards[7].card.card
      // .itemCards,
      "ae lo ji"
    );

    setResInfo(menu.data.cards[0].card.card.info);
  };
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
