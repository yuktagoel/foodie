import { useEffect, useState } from "react";
import { cardURL } from "../../utils/constants";

const useFetchCardData = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(cardURL);
    const json = await data.json();
    setCards(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return cards;
};

export default useFetchCardData;
