import RestroCard from "./RestroCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchCardData from "./hooks/useFetchCardData";

const Container = () => {
  const [searchedCards, setSearchedCards] = useState([]);
  const [search, setSearch] = useState("");
  const searchIconHtml = "&#128269";
  const handleClick = () => {
    searchedCards?.length > 0 && console.log("changing");
    console.log(searchedCards);
    setSearchedCards(
      searchedCards.filter((card) => {
        return card.info.avgRating >= 4.5;
      })
    );
  };

  const cards = useFetchCardData();

  useEffect(() => {
    setSearchedCards(cards);
  }, [cards]);

  return cards?.length === 0 || !cards ? (
    <Shimmer>Loading</Shimmer>
  ) : (
    <div>
      <div className="flex">
        <button className="bg-blue-200 h-12 w-24" onClick={handleClick}>
          TopRated
        </button>
        <div className="search__with_button">
          <Search
            handleClick={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
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
            <span
              className="search__icon"
              dangerouslySetInnerHTML={{ __html: searchIconHtml }}
            />
          </button>
        </div>
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
