// File: ChildComponent.js
import React from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default ChildComponent;
