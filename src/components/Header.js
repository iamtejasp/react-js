const Header = () => {
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
        <div className="nav-btns">
          <a href="#" className="btn-link">
            Cart +
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
