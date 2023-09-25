import Card from "./Card";
import restList from "../utils/API";

const Body = () => {
  return (
    <div className="main-container">
      {/* <div className="search-bar">search</div> */}
      <div className="cart-container">
        {restList.map((resObj) => (
          <Card key={resObj.data.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
