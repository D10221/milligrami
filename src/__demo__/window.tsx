import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Container,
    Row,
} from "../";
import { ButtonsView } from "./buttons/index";
import { UtilsView } from "./utils/index";

const App = () => {
    return (
        <Container>
            <h1>Milligram</h1>
            <Row children={<ButtonsView />} />
            <Row>
                <UtilsView />
            </Row>
        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);
