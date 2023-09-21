import RestroCard from "./RestroCard";
// import { resdata } from "../utils/restaurant";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import Filter from "./Filter";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [searchedCards, setSearchedCards] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    cards?.length > 0 && console.log("changing");
    console.log(cards);
    setSearchedCards(
      cards.filter((card) => {
        return card.info.avgRating >= 4.5;
      })
    );
  };

  const fetchData = async () => {
    console.log("fetching");
    const req = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await req.json();
    console.log(json.data);
    setCards(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedCards(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return cards?.length === 0 || !cards ? (
    <Shimmer className="m-6">Loading</Shimmer>
  ) : (
    <div>
      <div className="flex justify-evenly">
        <button className="bg-[#663399] h-12 w-24 m-4" onClick={handleClick}>
          <span className="text-white">TopRated</span>
        </button>
        <div className="flex flex-row gap-2 items-center m-4 border-2 border-[#663399] w-[30%]">
          <Search
            handleClick={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            className="bg-[#663399] h-12 w-24"
            onClick={() => {
              setSearchedCards(
                cards.filter((card) => {
                  return card.info.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
              );
            }}
          >
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap m-6">
        {searchedCards &&
          searchedCards.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestroCard
                  key={restaurant.info.id}
                  resdata={restaurant.info}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Container;
