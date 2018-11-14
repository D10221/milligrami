import { JSDOM } from "jsdom";
import React from "react";
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
        <Button id="input-button" element="input"/>
      </div>
    ) as any),
  ).window as Window;

  it("button", () => {
    const button = document.getElementById("button");
    expect(button.tagName.toLowerCase()).toBe("button");
    expect(button.className).toBe("button");
  });

  it("button-outline", () => {
    const button = document.getElementById("button-outline");
    expect(button.tagName.toLowerCase()).toBe("button");
    expect(button.className).toBe("button button-outline");
  });

  it("button-clear", () => {
    const button = document.getElementById("button-clear");
    expect(button.tagName.toLowerCase()).toBe("button");
    expect(button.className).toBe("button button-clear");
  });

  it("button-extra-class", () => {
    const button = document.getElementById("button-extra-class");
    expect(button.tagName.toLowerCase()).toBe("button");
    expect(button.className).toBe("extra-class button");
  });

  it("input-button", ()=>{
    expect(document.getElementById("input-button").tagName.toLowerCase()).toBe("input");
  })
});
