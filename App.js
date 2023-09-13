//
/**
 *
 *
 */

const perent = React.createElement("div", { id: "perent" }, [
  React.createElement("div", { id: "cild" }, [
    React.createElement("h1", {}, "This is heading come frome React"),
    React.createElement(
      "h1",
      {},
      "This is another h1 which is come frome react"
    ),
  ]),
  React.createElement("div", { id: "cild" }, [
    React.createElement("h1", {}, "This is heading come frome React"),
    React.createElement(
      "h1",
      {},
      "This is another h1 which is come frome react"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(perent);
