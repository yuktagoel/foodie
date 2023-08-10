import RestroCard from "./RestroCard";
// import { resdata } from "../utils/restaurant";
import Search from "./Search";
import { useEffect, useState } from "react";
// import Filter from "./Filter";

const Container = () => {
  const handleClick = () => {
     setdata(data.filter((res)=>{
         return res.info.avgRating > 4.2;
        }))
  }
  const fetchData = async () =>{
    const dataa = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await dataa.json();
    setdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
  
    useEffect(()=>{
      fetchData();
    },[]);



  const [data , setdata] = useState([]);
  return (
    <div>
      <div className="flex justify-between">
      <button className='bg-blue-200 h-12 w-24' onClick={handleClick}>TopRated</button>
        <Search />
      </div>

      <div className="flex flex-wrap">
        {data.map((restaurant) => {
          return <RestroCard key={restaurant.info.id} resdata={restaurant.info} />;
        })} 
      </div>
    </div>
  );
};

export default Container;
