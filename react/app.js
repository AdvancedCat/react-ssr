import React from "react";
import { render } from "react-dom";

import Root from "./Root";
import "normalize.css";
import "./sass/index.scss";

const rootEle = document.getElementById("root");

render(<Root />, rootEle);
