import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Container,
    Row,
} from "../";

import { RowsView } from "./rows";
import { ButtonsView } from "./buttons";
import { UtilsView } from "./utils";
import { ColumnsView } from "./columns";

const App = () => {
    return (
        <Container>
            <Row><h1>Milligram</h1></Row>
            <ButtonsView />
            <UtilsView />
            <RowsView />
            <ColumnsView />
        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);
