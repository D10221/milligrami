import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import Label from "../src/label";

describe("Labels", () => {
  const { document } = new JSDOM(
    renderToString((
      <div>
        <Label id="label" />
        <Label id="label-inline" variant={"inline"} />
        <Label
          id="label-extra-class"
          variant={"inline"}
          className="extra-class"
        />
      </div>
    ) as any),
  ).window as Window;

  it("label", () => {
    const label = document.getElementById("label");
    expect(label.tagName.toLowerCase()).toBe("label");
    expect(label.className).toBe("label");
  });

  it("label-inline", () => {
    const label = document.getElementById("label-inline");
    expect(label.tagName.toLowerCase()).toBe("label");
    expect(label.className).toBe("label label-inline");
  });

  it("label-extra-class", () => {
    const label = document.getElementById("label-extra-class");
    expect(label.tagName.toLowerCase()).toBe("label");
    expect(label.className).toBe("extra-class label label-inline");
  });
});
