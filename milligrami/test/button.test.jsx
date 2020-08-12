import assert from "assert";
import React from "react";
import { renderToString } from "react-dom/server";
import { Button } from "../src/index.js";
import { JSDOM } from "jsdom";
window["React"] = React;

describe("Buttons", () => {
  const { document } = new JSDOM(
    renderToString(
      <div>
        <Button id="button" />
        <Button id="button-outline" outline />
        <Button id="button-clear" clear />
        <Button id="button-extra-class" className="extra-class" />
      </div>
    )
  ).window;

  it("button", () => {
    const button = document.getElementById("button");
    assert.equal(button.tagName.toLowerCase(), "button");
    assert.equal(button.className, "button");
  });

  it("button-outline", () => {
    const button = document.getElementById("button-outline");
    assert.equal(button.tagName.toLowerCase(), "button");
    assert.equal(button.className, "button button-outline");
  });

  it("button-clear", () => {
    const button = document.getElementById("button-clear");
    assert.equal(button.tagName.toLowerCase(), "button");
    assert.equal(button.className, "button button-clear");
  });

  it("button-extra-class", () => {
    const button = document.getElementById("button-extra-class");
    assert.equal(button.tagName.toLowerCase(), "button");
    assert.equal(button.className, "extra-class button");
  });
});
