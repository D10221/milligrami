import * as React from "react";
import * as ReactDom from "react-dom";

const App = ()=> {
    return (
        <div>Hello</div>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App/>, body);