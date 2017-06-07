import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Button,
    ClearFix,
    Column,
    Container,
    Float,
    LabelInline,
    Row,
} from "../";

const App = () => {
    return (
        <Container>
            <h1>Milligram</h1>
            <Row>
                <Container>
                    <Row>
                        <blockquote>
                            <h3> Buttons </h3>
                            <p> button, button-outline, button-clear.</p>
                        </blockquote>
                    </Row>
                    <Row>
                        <Column>
                            <Button>Button</Button>
                        </Column>
                        <Column>
                            <h6>code:</h6>
                            <code>{" <Button>Button</Button>"}</code>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Button outline>Outline</Button>
                        </Column>
                        <Column>
                            <h6>code:</h6>
                            <code>{"<Button outline>Outline</Button>"}</code>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Button clear>clear</Button>
                        </Column>
                        <Column>
                            <h6>code:</h6>
                            <code>{"<Button clear>clear</Button>"}</code>
                        </Column>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <blockquote>
                            <h3>Functional Classes</h3>
                            <p>Milligram has some functional classes
                                to improve the performance and productivity everyday.</p>
                        </blockquote>
                    </Row>
                    <Row>
                        <label> clearFix, float-left, float-right</label>
                        <div>
                            <ClearFix>
                                <Float xFloat="left">LEFT</Float>
                                <Float xFloat="right">RIGHT</Float>
                            </ClearFix>
                        </div>
                    </Row>
                    <Row>
                        <Column>
                            <LabelInline>Code:</LabelInline>
                            <pre>
                                <code>{
                                    `
<!-- Clear any float  -->
<ClearFix>
    <Float xFloat="left">LEFT</Float>
    <Float xFloat="right">RIGHT</Float>
</ClearFix>
                                `
                                }</code>
                            </pre>
                        </Column>
                    </Row>
                </Container>
            </Row>

        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);