import RestroCard from "./RestroCard";
// import { resdata } from "../utils/restaurant";
import Search from "./Search";
import { useEffect, useState } from "react";
// import Filter from "./Filter";

const Container = () => {

  const [cards, setCards] = useState([]);

  // const handleClick = () => {
  //   setCards(
  //     data.filter((res) => {
  //       return res.info.avgRating > 4.2;
  //     })
  //   );
  // };
  const fetchData = async () => {
    const req = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await req.json();
    setCards(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (cards?.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-between">
        {/* <button className="bg-blue-200 h-12 w-24" onClick={handleClick}> */}
          {/* TopRated
        </button> */}
        <Search />
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
