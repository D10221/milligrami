import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import Row from "../src/row";

describe("Rows", () => {
  const { document } = new JSDOM(
    renderToString((
      <div>
        <Row id="row" />
        <Row id="row-wrap" variant={"wrap"} />
        <Row id="row-no-padding" variant={"noPadding"} />
        <Row id="row-top" variant={"top"} />
        <Row id="row-bottom" variant={"bottom"} />
        <Row id="row-center" variant={"center"} />
        <Row id="row-strech" variant={"strech"} />
        <Row id="row-baseline" variant={"baseline"} />
        <Row id="row-extra-class" className="extra-class" />
      </div>
    ) as any),
  ).window as Window;

  it("row", () => {
    const row = document.getElementById("row");
    expect(row.tagName.toLowerCase()).toBe("div");
    expect(row.className).toBe("row");
  });

  it("row-wrap", () => {
    const button = document.getElementById("row-wrap");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-wrap");
  });

  it("row-no-padding", () => {
    const button = document.getElementById("row-no-padding");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-no-padding");
  });

  it("row-top", () => {
    const button = document.getElementById("row-top");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-top");
  });

  it("row-bottom", () => {
    const button = document.getElementById("row-bottom");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-bottom");
  });

  it("row-center", () => {
    const button = document.getElementById("row-center");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-center");
  });

  it("row-strech", () => {
    const button = document.getElementById("row-strech");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-strech");
  });

  it("row-baseline", () => {
    const button = document.getElementById("row-baseline");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("row row-baseline");
  });

  it("row-extra-class", () => {
    const button = document.getElementById("row-extra-class");
    expect(button.tagName.toLowerCase()).toBe("div");
    expect(button.className).toBe("extra-class row");
  });
});
