// Create Element

const heading = React.createElement("h1", {}, "Hey Im called from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Create nested elements

/**
 * <div class="parent">
 *     <div class="child">
 *          <h1></h1>
 *          <h2></h2>
 *     </div>
 * </div>
 *
 */

const element = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("div", {id:"child"}, [
    React.createElement("h1", {id:"sub-child1"}, "Hey I'm nested and i'm h1"),
    React.createElement("h2", {id:"sub-child2"}, "Hey I'm h2"),
  ])
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(element);
