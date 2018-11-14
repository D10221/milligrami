import { Button, Column, Container, Row } from "milligrami";
import * as React from "react";


export const ButtonsView = () => {
  return (
    <Container>
      <Row>
        <blockquote>
          <h3> Buttons </h3>
          <p> Button element...</p>
        </blockquote>
      </Row>
      <Row>
        <Column>
          <Button>Button</Button>
        </Column>
        <Column>
          <h6>code:</h6>
          <code>{"<Button>Button</Button>"}</code>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button variant={"outline"}>Outline</Button>
        </Column>
        <Column>
          <h6>code:</h6>
          <code>{"<Button outline>Outline</Button>"}</code>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button variant={"clear"}>clear</Button>
        </Column>
        <Column>
          <h6>code:</h6>
          <code>{"<Button clear>clear</Button>"}</code>
        </Column>
      </Row>
    </Container>
  );
};
