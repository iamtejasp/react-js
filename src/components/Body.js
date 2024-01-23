import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUi";

const Body = () => {
  //create variable using hooks ==> using useState
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestList, setAllRestList] = useState([]);
  // console.log(restaurantList);
  //we can update restaurantList using setRestaurantList Function
  // filterRest = restaurantList.filter((obj) => obj.data.avgRating > 4);
  // setRestaurantList(filterRest);
  // console.log(restaurantList);
  // normal Js Variable
  // let restaurantList = restList;

  const [searchInput, setSearchInput] = useState("");

  //useEffect hooks which have two argument first callback function and second array
  //it will be call after render body
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await api.json();

    const jsonRest =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(jsonRest);
    setAllRestList(jsonRest);
  };
  console.log("Body rendered");

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="main-container">
      <div className="search-bar">
        <div>
          <button
            className="filter-card"
            onClick={() => {
              setRestaurantList(allRestList);
            }}
          >
            All Restaurants
          </button>
        </div>
        <div>
          <button
            className="filter-card"
            onClick={() => {
              const filterRestaurant = restaurantList.filter((res) => {
                return res.info.avgRating > 4.2;
              });
              //using this we can update the rest list
              setRestaurantList(filterRestaurant);
            }}
          >
            Most Reated
          </button>
        </div>
        <div>
          <input
            type="text"
            className="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(restaurantList);
              const searchRes = allRestList.filter((res) => {
                if (
                  res.info.name
                    .toUpperCase()
                    .includes(searchInput.toUpperCase())
                ) {
                  return res;
                }
              });
              setRestaurantList(searchRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="cart-container">
        {restaurantList.map((resObj) => (
          <Card key={resObj.info.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
