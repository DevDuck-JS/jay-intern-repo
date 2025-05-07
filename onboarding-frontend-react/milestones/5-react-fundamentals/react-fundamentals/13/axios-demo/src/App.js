import React from "react";
import { sendTestRequest } from "./api/testRequest";

function App() {
  return (
    <div className="App">
      <h1>Axios API Test</h1>
      <button onClick={sendTestRequest}>Send API Request</button>
    </div>
  );
}

export default App;
