import React from "react";
import ReactDOM from "react-dom/client";

//this is one way to write React Element
const perent = React.createElement(
  "h1",
  { className: "head" },
  "This is namaste React Course"
);

//Create Element Using JSX
//JSX--its looks like html and using babel we can compiled into ReactElement
const head = <h1 className="head">This Is JSX</h1>;
const head2 = <h1>Head1</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
