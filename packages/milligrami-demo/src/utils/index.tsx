import { ClearFix, Column, Container, utils, Label, Row } from "milligrami";

import * as React from "react";
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
          <ClearFix>
            <div className={utils({ float: "left" })}>LEFT</div>
            <div className={utils({ float: "right" })}>RIGHT</div>
          </ClearFix>
        </div>
      </Row>
      <Row>
        <Column>
          <Label variant={"inline"}>Code:</Label>
          <pre>
            <code>{`
<!-- Clear any float  -->
<ClearFix>
    <Float xFloat="left">LEFT</Float>
    <Float xFloat="right">RIGHT</Float>
</ClearFix>
                                `}</code>
          </pre>
        </Column>
      </Row>
    </Container>
  );
};
