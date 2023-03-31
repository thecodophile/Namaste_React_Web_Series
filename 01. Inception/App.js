/**
 *  <div class="parent">
        <div id="child">
            <h1 class="heading" id="heading">Namaste</h1>
            <h2 class="sibling">React</h2>
        </div>
    </div>
 */

const heading = React.createElement(
  "h1",
  {
    className: "heading",
    id: "heading",
    key: 01,
  },
  "Namaste"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "sibling",
    key: 02,
  },
  "React"
);

const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const parent = React.createElement("div", { className: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
