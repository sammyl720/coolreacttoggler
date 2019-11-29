import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./Toggle";
import "./styles.css";
import Burger from "./Burger";
import Story from "./Story";
function App() {
  return (
    <div className="App">
      <Toggle
        render={(on, _, toggle, exit) => (
          <div>
            {on && <Story exit={exit} />}
            <Burger {...{ on, toggle, exit }} />
          </div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
