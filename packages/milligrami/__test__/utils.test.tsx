import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import utils from "../src/utils";

describe("Float", () => {
  process.env.NODE_ENV = "test"; // turn off warnings

  const { document } = new JSDOM(
    renderToString((
      <div>
        <div id="float-left" className={utils({ float: "left" })} />
        <div id="float-right" className={utils({ float: "right" })} />
        <div
          id="float-extra-class"
          className={utils({ float: "left" }, "extra-class")}
        />
        <div
          id="float-extra-classes"
          className={utils({ float: "left" }, ["extra-class", "extra-class-1"])}
        />
      </div>
    ) as any),
  ).window as Window;

  it("float-left", () => {
    const float = document.getElementById("float-left");
    expect(float.tagName.toLowerCase()).toBe("div");
    expect(float.className).toBe("float-left");
  });
  it("float-right", () => {
    const float = document.getElementById("float-right");
    expect(float.tagName.toLowerCase()).toBe("div");
    expect(float.className).toBe("float-right");
  });
  it("float-extra-class", () => {
    const float = document.getElementById("float-extra-class");
    expect(float.tagName.toLowerCase()).toBe("div");
    expect(float.className).toBe("extra-class float-left");
  });
  it("float-extra-classes", () => {
    const float = document.getElementById("float-extra-classes");
    expect(float.tagName.toLowerCase()).toBe("div");
    expect(float.className).toBe("extra-class extra-class-1 float-left");
  });
});
