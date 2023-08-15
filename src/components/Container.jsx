import RestroCard from "./RestroCard";
// import { resdata } from "../utils/restaurant";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import Filter from "./Filter";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    cards?.length > 0 && console.log("changing");
    console.log(cards);
    setCards(
      cards.filter((card) => {
        return card.info.avgRating >= 4.5;
      })
    )
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return cards?.length === 0 || !cards ? (
    <Shimmer>Loading</Shimmer>
  ) : (
    <div>
      <div className="flex justify-evenly ">
        <button className="bg-blue-200 h-12 w-24" onClick={handleClick}>
          TopRated
        </button>
        <Search handleClick={(e) => setSearch(e.target.value)} value={search} />
        <button className="bg-blue-200 h-12 w-24" onClick={()=>{
              setCards(
                cards.filter((card) => {
                  return card.info.name.toLowerCase().includes(search.toLowerCase())
                })
              )
          console.log(search);
        }}>
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {cards &&
          cards.map((restaurant) => {
            return (
              <RestroCard key={restaurant.info.id} resdata={restaurant.info} />
            );
          })}
      </div>
    </div>
  );
};

export default Container;
