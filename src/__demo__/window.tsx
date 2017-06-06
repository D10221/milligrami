import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Row,
    Button,
    Column,
    Container,
} from "../";

const App = () => {
    return (
        <Container>
            <h1>Milligram</h1>
            <Row>
                <blockquote>
                    <h3> Buttons </h3>
                    <p> button, button-outline, button-clear.</p>
                </blockquote>
            </Row>
            <Row xwrap>
                <Column xWidth={25} xspan>
                    <Button>plain</Button>
                </Column>
                <Column xspan xWidth={50}>
                    <h6>code:</h6>
                     <code>{" <Button>Plain</Button>"}</code>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Button outline>Outline</Button>
                </Column>
                <Column xspan xWidth={50}>
                    <h6>code:</h6>
                     <code>{" <Button outline >Outline</Button>"}</code>
                </Column>
            </Row>
             <Row>
                <Column>
                    <Button clear>clear</Button>
                </Column>
                <Column xspan xWidth={50}>
                    <h6>code:</h6>
                     <code>{" <Button clear>clear</Button>"}</code>
                </Column>
            </Row>
        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);