import {
     Column,
     Container,
     Row
} from "milligrami";
import * as React from "react";

export const ColumnsView = () => {
    return (
        <Container>
            <h3> Column no attributes</h3>
            <Container>
                <Row>
                    <Column >
                        <span>3</span>
                    </Column>
                    <Column >
                        <span>3</span>
                    </Column>
                    <Column >
                        <span>3</span>
                    </Column>
                </Row>
            </Container>
            <h3> Column width</h3>
            <Container>
                <Row>
                    <Column columnWidth={25}>
                        <span>25</span>
                    </Column>
                    <Column columnWidth={50}>
                        <span>50</span>
                    </Column>
                    <Column columnWidth={25}>
                        <span>25</span>
                    </Column>
                </Row>
            </Container>
            <h3> Column width and offset</h3>
            <Container>
                <Row>
                    <Column columnWidth={25}>
                        <span>25</span>
                    </Column>
                    <Column columnWidth={25} offset={25}>
                        <span>25-25</span>
                    </Column>
                    <Column columnWidth={25}>
                        <span>25</span>
                    </Column>
                </Row>
            </Container>
        </Container>
    )
}