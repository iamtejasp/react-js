import Card from "./Card";
import restList from "../utils/API";
import { useState } from "react";

const Body = () => {
  //create variable using hooks ==> using useState
  const [restaurantList, setRestaurantList] = useState(restList);
  // console.log(restaurantList);
  //we can update restaurantList using setRestaurantList Function
  // filterRest = restaurantList.filter((obj) => obj.data.avgRating > 4);
  // setRestaurantList(filterRest);
  // console.log(restaurantList);
  // normal Js Variable
  // let restaurantList = restList;
  return (
    <div className="main-container">
      <div className="search-bar">
        <button
          className="filter-card"
          onClick={() => {
            const filterRestaurant = restaurantList.filter((res) => {
              return res.data.avgRating > 4.2;
            });
            //using this we can update the rest list
            setRestaurantList(filterRestaurant);
          }}
        >
          Most Reated
        </button>
      </div>
      <div className="cart-container">
        {restaurantList.map((resObj) => (
          <Card key={resObj.data.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
