
import * as React from "react";

import {
    Container,
    Row
} from "milligrami";
export const RowsView = () => (
    <Container style={{ maxWidth: 640 }}>
        <h3> row center</h3>
        <Row rowCenter>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
        <h3> row top</h3>
        <Row rowTop>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
        <h3> row bottom</h3>
        <Row rowBottom>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
        <h3> row no padding</h3>
        <Row rowNoPadding>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
        <h3> row stretch</h3>
        <Row rowStretch>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
        <h3> row wrap</h3>
        <Row rowWrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Row>
    </Container>
);
