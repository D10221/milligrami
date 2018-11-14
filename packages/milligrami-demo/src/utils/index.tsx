import { Column, Container, Label, Row, utils } from "milligrami";
import React from "react";

export const UtilsView = () => {
  return (
    <Container>
      <Row>
        <blockquote>
          <h3>Functional Classes</h3>
          <p>
            Milligram has some functional classes to improve the performance and
            productivity everyday.
          </p>
        </blockquote>
      </Row>
      <Row>
        <label> clearFix, float-left, float-right</label>
        <div>
          <div className={utils({ clearfix: true })}>
            <div className={utils({ float: "left" })}>LEFT</div>
            <div className={utils({ float: "right" })}>RIGHT</div>
          </div>
        </div>
      </Row>
      <Row>
        <Column>
          <Label variant={"inline"}>Code:</Label>
          <pre>
            <code>{`
<!-- Clear any float  -->
<div className={utils({ clearfix: true })}>
  <div className={utils({ float: "left" })}>LEFT</div>
  <div className={utils({ float: "right" })}>RIGHT</div>
  </div>
</div>
                                `}</code>
          </pre>
        </Column>
      </Row>
    </Container>
  );
};
