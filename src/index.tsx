import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Custom Components Library</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
