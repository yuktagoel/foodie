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
  const searchIconHtml = "&#128269";
  const handleClick = () => {
    cards?.length > 0 && console.log("changing");
    console.log(cards);
    setCards(
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
    <Shimmer>Loading</Shimmer>
  ) : (
    <div>
      <div className="flex">
        <button className="bg-blue-200 h-12 w-24" onClick={handleClick}>
          TopRated
        </button>
        <Search handleClick={(e) => setSearch(e.target.value)} value={search} />
        <button
        className=""
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
         Search
          {/* <span dangerouslySetInnerHTML={{ __html: searchIconHtml }} /> */}
        </button>
      </div>

      <div className="flex flex-wrap">
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
