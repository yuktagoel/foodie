import './App.css';

const resdata = {
    "id": "23742",
    "name": "McDonald's",
    "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
    "locality": "Chennai Kilpauk",
    "areaName": "Kilpauk",
    "costForTwo": "₹400",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "23742",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 4700
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 4700
    },
    "parentId": "630",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-08-08 02:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
}

const Search = () => {
  return <div className='p-2.5'>SearchBar</div>
}
const RestroCard = ({resdata}) => {
  return <div className='flex flex-col w-[250px] h-[430px] hover:border-2 cursor-pointer bg-slate-300 p-4 m-2 gap-2'>
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.cloudinaryImageId} alt='biryani'></img>
    <div className='text-xl font-medium'>{resdata.name}</div>
    <div className='text-sm font-extralight'>{resdata.cuisines.join(',')}</div>
    <div className='text-xl font-light'>{resdata.costForTwo}</div>
    <div className='text-xl font-light'>{resdata.avgRating}</div>
  </div>
}

const Body = () => {
  return (
    <div>
      <Search/>
      <div className='flex flex-wrap'>
      <RestroCard resdata={resdata}/>
      </div>
    </div>
  )
}

const Header = () => {
  return <div className='flex justify-between border-2'>
    <div className='h-22 w-28'>
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
