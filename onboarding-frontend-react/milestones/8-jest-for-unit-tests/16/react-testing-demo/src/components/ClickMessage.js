// src/components/ClickMessage.js
import React, { useState } from "react";

const ClickMessage = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setMessage("Clicked!")}>Click me</button>
      <p>{message}</p>
    </div>
  );
};

export default ClickMessage;
