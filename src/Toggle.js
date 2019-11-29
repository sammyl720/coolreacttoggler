import React, { useState } from "react";

const Toggle = props => {
  const [toggle, setToggle] = useState({
    on: false,
    transition: false
  });
  const toggler = () => {
    setToggle({
      ...toggle,
      on: !toggle.on
    });
  };

  const togglerWithTransition = () => {
    if (toggle.on) {
      setToggle({
        ...toggle,
        transition: true
      });
      setTimeout(() => {
        setToggle({
          on: !toggle.on,
          transition: false
        });
      }, 500);
    } else {
      setToggle({
        ...toggle,
        on: !toggle.on
      });
    }
  };
  return props.render(
    toggle.on,
    toggler,
    togglerWithTransition,
    toggle.transition
  );
};

export default Toggle;
