import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Container,
    Row,
} from "../";

import { ButtonsView } from "./buttons";
import { ColumnsView } from "./columns";
import { RowsView } from "./rows";
import { UtilsView } from "./utils";

const App = () => {
    return (
        <Container>
            <Row><h1>Milligram</h1></Row>
            <ButtonsView />
            <hr/>
            <UtilsView />
            <hr/>
            <RowsView />
            <hr/>
            <ColumnsView />
        </Container>
    );
};

const body = document.getElementById("root");
body.className = "container";
ReactDom.render(<App />, body);
