import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>React basic app</h1>
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);