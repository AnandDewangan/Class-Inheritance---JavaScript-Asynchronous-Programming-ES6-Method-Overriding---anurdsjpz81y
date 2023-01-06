import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

class Shape{
    drawshape(){
    };
    calculateArea(){};
    color(){};
}

class Circle extends Shape{
    super();
}