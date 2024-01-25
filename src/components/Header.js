import { useEffect, useState } from "react";

const Header = () => {
  const [navBtn, setNavBtn] = useState("Login");

  //useEffect Is render After the render component
  //useEffect Have two parameter one is callback function and another is dependecy array
  //it is not mandatory towrite dependecy arr
  //if we can write dependecy arr then useEffect is called once at initial
  //if we cannot write dependecy arr then useEffect is called every time rendering

  useEffect(() => {
    console.log("UseEffect");
  }, [navBtn]);

  console.log("Rendered");
  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="logo-container">
          <img src={require("../assest/logo.png")} alt="#" />
        </div>
        <ul className="list-links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">AboutUS</a>
          </li>
          <li className="link">
            <a href="#">ContactUS</a>
          </li>
        </ul>
        <div className="btn">
          <div className="  nav-btns">
            <a href="#" className="btn-link">
              Cart +
            </a>
          </div>
          <div className="nav-btns">
            <a
              href="#"
              className="btn-link"
              onClick={() => {
                if (navBtn === "Login") {
                  setNavBtn("Logout");
                } else {
                  setNavBtn("Login");
                }
              }}
            >
              {navBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
