import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Column,
    Container,
    Row,
} from "../";

// import { ButtonsView } from "./buttons/index";
// import { UtilsView } from "./utils/index";

const App = () => {
    return (
        <Container>
            <Row><h1>Milligram</h1></Row>
            <Container >
                <Row rowCenter>
                    <h3>Visual</h3><h3>Code</h3>
                </Row>
                <Row id="visual" rowCenter>
                    Visual
                </Row>
                <Row id="code" rowCenter>
                    Code
                </Row>
            </Container>
            <Row>
                <Column>
                    Column 1
                </Column>
                <Column>
                    Column 2
                </Column>
            </Row>
        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);
