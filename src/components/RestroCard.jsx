
const RestroCard = ({resdata}) => {
  console.log(resdata ,"hero");
    return <div className='flex flex-col w-64 hover:border-2 cursor-pointer bg-slate-300 p-4 m-2 gap-2'>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
           resdata.cloudinaryImageId
          } alt={'food'}
        ></img>
      <div className='text-xl font-medium'>{resdata.name}</div>
      <div className='text-sm font-extralight truncate'>{resdata.cuisines.join(',')}</div>
      <div className='text-xl font-light'>{resdata.costForTwo}</div>
      <div className='text-xl font-light'>Rating: {resdata.avgRating}</div>
    </div>
  }
  
  export default RestroCard;