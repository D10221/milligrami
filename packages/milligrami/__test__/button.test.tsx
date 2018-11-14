import * as assert from "assert";
import * as React from "react";
const JSDOM = require("jsdom").JSDOM;
import { renderToString } from "react-dom/server";
import { Button } from "../src";

describe("Buttons", () => {
  const { document } = new JSDOM(
    renderToString((
      <div>
        <Button id="button" />
        <Button id="button-outline" variant={"outline"} />
        <Button id="button-clear" variant={"clear"} />
        <Button id="button-extra-class" className="extra-class" />
      </div>
    ) as any),
  ).window as Window;

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
