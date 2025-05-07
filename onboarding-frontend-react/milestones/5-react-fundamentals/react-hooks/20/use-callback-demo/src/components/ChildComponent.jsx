import React from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Click Me
    </button>
  );
});

export default ChildComponent;
