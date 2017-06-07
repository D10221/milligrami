import * as React from "react";
import {
    ClearFix,
    Column,
    Container,
    Float,
    Label,
    Row,
} from "../../";
export const UtilsView = () => {
    return (
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
                    <Label inLine>Code:</Label>
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
    );
};
