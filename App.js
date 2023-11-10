const header = React.createElement(
  "h1",
  { id: "title" },
  "Hello Everyone from React!"
);
const header_2 = React.createElement(
  "h2",
  { id: "title" },
  "Welcome to the first session of Namaste React!"
);
// initially react elements were created like this React.createElement. Which is core of React.
const container = React.createElement("div", { id: "container" }, [
  header,
  header_2,
]);
console.log(header); // render an Object
// React.createElement is coming from the core of the React
const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM is to change in the DOM.
// React can render inside the "Root" only. Mostly we have only one root in React. Everthing happens inside the root only.
root.render(container);
// passing a React element to inside the root
