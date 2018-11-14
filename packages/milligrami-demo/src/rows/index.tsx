import React from "react";

import { Container, Row } from "milligrami";
export const RowsView = () => (
  <Container style={{ maxWidth: 640 }}>
    <h3> row center</h3>
    <Row variant={"center"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
    <h3> row top</h3>
    <Row variant={"top"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
    <h3> row bottom</h3>
    <Row variant={"bottom"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
    <h3> row no padding</h3>
    <Row variant={"noPadding"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
    <h3> row stretch</h3>
    <Row variant={"strech"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
    <h3> row wrap</h3>
    <Row variant={"wrap"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Row>
  </Container>
);
