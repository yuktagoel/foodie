import RestroCard  from "./RestroCard";
import { resdata } from "../utils/restaurant";
import Search  from "./Search";

const Container = () => {
    return (
      <div>
        <Search/>
        <div className='flex flex-wrap'>
          {resdata.map((restaurant)=>{
            return <RestroCard key={restaurant.data.id} resdata={restaurant}/>
          })}
        </div>
      </div>
    )
  }

  export default Container;