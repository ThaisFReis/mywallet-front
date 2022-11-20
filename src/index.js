import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./Components/App"
import './reset.css'

const root = document.querySelector(".root");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root
);
