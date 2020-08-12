import assert from "assert";
import React from "react";
import { renderToString } from "react-dom/server";
import { Label } from "../src/index.js";
import { JSDOM } from "jsdom";
window["React"] = React;

describe("Labels", () => {
  const { document } = new JSDOM(
    renderToString(
      <div>
        <Label id="label" />
        <Label id="label-inline" inLine />
        <Label id="label-extra-class" inLine className="extra-class" />
      </div>
    )
  ).window;

  it("label", () => {
    const label = document.getElementById("label");
    assert.equal(label.tagName.toLowerCase(), "label");
    assert.equal(label.className, "");
  });

  it("label-inline", () => {
    const label = document.getElementById("label-inline");
    assert.equal(label.tagName.toLowerCase(), "label");
    assert.equal(label.className, "label-inline");
  });

  it("label-extra-class", () => {
    const label = document.getElementById("label-extra-class");
    assert.equal(label.tagName.toLowerCase(), "label");
    assert.equal(label.className, "extra-class label-inline");
  });
});
