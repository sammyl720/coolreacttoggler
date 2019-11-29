import React from "react";

const Burger = ({ on, toggle, exit }) => {
  if (on && !exit) {
    return <div onClick={toggle} className="cross burger" />;
  } else {
    return (
      <div onClick={toggle} className="burger">
        <span className="stick"> </span>
        <span className="stick" />
        <span className="stick" />
      </div>
    );
  }
};

export default Burger;
