import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
const API = "https://strangers-things.herokuapp.com/api/2110-ftb-et-web-pt";

import App from "./App";

const app = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <App />{" "}
  </BrowserRouter>,
  app
);
