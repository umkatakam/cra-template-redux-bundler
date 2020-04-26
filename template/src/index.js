import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "redux-bundler-react";
import createStore from "./bundles";
import "./index.css";

const store = createStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
