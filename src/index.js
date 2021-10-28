import React from "react"
import ReactDOM from "react-dom"
import "./style.scss"
import {App} from "./components/App/App";

const destination = document.querySelector("#root")

ReactDOM.render(
    <>
        <h1>Hello</h1>
        <App/>
    </>,
    destination
)