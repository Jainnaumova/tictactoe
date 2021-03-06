import React from "react";
import "../index.css";

export default props => {
  const data = { id: props.data.id, value: props.computerTurn ? false : true };

  const handleClick = data => {
    if (props.data.value !== null) return;
    props.handleClick(data);
  };

  return (
    <div
      className={`cell ${
        props.data.value === true
          ? "cross"
          : props.data.value === false
          ? "nought"
          : ""
      }`}
      onClick={() => handleClick(data)}
    />
  );
};
