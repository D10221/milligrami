import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import { Container } from "../src";

describe("Containers", () => {
  process.env.NODE_ENV = "test"; // turn off warnings

  const { document } = new JSDOM(
    renderToString((
      <div>
        <Container id="container" />
        <Container id="container-extra-class" className="extra-class" />
      </div>
    ) as any),
  ).window as Window;

  it("container", () => {
    const container = document.getElementById("container");
    expect(container.tagName.toLowerCase()).toBe("div");
    expect(container.className).toBe("container");
  });

  it("container-extra-class", () => {
    const container = document.getElementById("container-extra-class");
    expect(container.tagName.toLowerCase()).toBe("div");
    expect(container.className).toBe("extra-class container");
  });
});
