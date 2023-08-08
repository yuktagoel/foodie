import './App.css';
import React from 'react';
import { resdata } from './constants/restaurant';

const Search = () => {
  return <div className='p-2.5'>SearchBar</div>
}
const RestroCard = ({resdata}) => {
  return <div className='flex flex-col w-64 hover:border-2 cursor-pointer bg-slate-300 p-4 m-2 gap-2'>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
         resdata.data.cloudinaryImageId
        } alt={'food'}
      ></img>
    <div className='text-xl font-medium'>{resdata.data.name}</div>
    <div className='text-sm font-extralight truncate'>{resdata.data.cuisines.join(',')}</div>
    <div className='text-xl font-light'>Rs. {resdata.data.costForTwo/100}</div>
    <div className='text-xl font-light'>Rating: {resdata.data.avgRating}</div>
  </div>
}

const Body = () => {
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

const Header = () => {
  return <div className='flex justify-between border-2'>
    <div className='h-20 w-28'>
      <img src='https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg' alt='logo' />
      </div> 
      <div className='px-10 py-8'>
        <ul className='flex flex-row gap-10'> 
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
}


const AppLayout = () => {
  return (
    <div className='App'>
      <Header/>
      <Body/>
    </div>
  )
}
export default AppLayout
