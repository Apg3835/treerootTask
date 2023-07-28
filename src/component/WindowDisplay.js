import React from "react";
import useWindowWidth from "./UseWindowWidth";

const WindowDisplay = () => {
  // call custom hook to connect with the component
  const windowWidth = useWindowWidth();
  return (
    <div>
      <h2>Current Window Width:</h2>
      <p>{windowWidth}px</p>
    </div>
  );
};

export default WindowDisplay;
