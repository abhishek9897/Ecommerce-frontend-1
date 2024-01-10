import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "./Components/Redux-toolkit/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./demo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>

    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
