import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/class_component/App";
// import App2 from "./components/functional_component/App";
import ContextApi from "./components/ContextApi/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 /> */}
    <ContextApi />
  </React.StrictMode>,
  document.querySelector("#root")
);
