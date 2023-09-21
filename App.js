import React from "react";
import ReactDOM from "react-dom/client";

//this is one way to write React Element
// const perent = React.createElement(
//   "h1",
//   { className: "head" },
//   "This is namaste React Course"
// );

//Create Element Using JSX
//JSX--its looks like html and using babel we can compiled into ReactElement

//React Component --- 1.Functional Componets and 2.Class Base Componets

//create functional componets
//always var first letter in capital where we write functional componets

const Heading2 = () => <h1>THis is also heading</h1>;

// we can write any js code inside {this}
let tag = <span>This Is React</span>;

let count = <h1>{tag}Heading</h1>;
const Heading = () => {
  return (
    <div>
      {count}
      <h1>This Is Heading coming frome functional componets</h1>
      <Heading2 />
    </div>
  );
};
// rendering functional componets
<Heading />;

const head = <h1 className="head">This Is JSX</h1>;
const head2 = <h1>Head1</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
