const mainHeading = React.createElement(
  "h1",
  {
    id: "title",
    className: "title-class",
    style: { color: "blue" },
    'data-test':'title_value'
  },
  "Namste React"
);
const subHeading = React.createElement(
  "h2",
  {
    id: "title",
    className: "title-class",
  },
  "Namste React"
);
const container = React.createElement(
  "div",
  {
    id: "container",
    className: "container",
  },
  [mainHeading, subHeading]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
