import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import Column from "../src/column";

describe("Columns", () => {
  const { document } = new JSDOM(
    renderToString((
      <div>
        <Column id="column" />
        <Column id="column-width" columnWidth={10} />
        <Column id="column-offset" offset={10} />
        <Column id="column-width-offset" offset={10} columnWidth={10} />
        <Column
          id="column-extra-class"
          offset={10}
          columnWidth={10}
          className="extra-class"
        />
      </div>
    ) as any),
  ).window as Window;

  it("Column", () => {
    const column = document.getElementById("column");
    expect(column.tagName.toLowerCase()).toBe("div");
    expect(column.className).toBe("column");
  });
  it("Column-width", () => {
    const column = document.getElementById("column-width");
    expect(column.tagName.toLowerCase()).toBe("div");
    expect(column.className).toBe("column column-10");
  });
  it("Column-offset", () => {
    const column = document.getElementById("column-offset");
    expect(column.tagName.toLowerCase()).toBe("div");
    expect(column.className).toBe("column column-offset-10");
  });
  it("Column-width-offset", () => {
    const column = document.getElementById("column-width-offset");
    expect(column.tagName.toLowerCase()).toBe("div");
    expect(column.className).toBe("column column-10 column-offset-10");
  });
  it("Column-extra-class", () => {
    const column = document.getElementById("column-extra-class");
    expect(column.tagName.toLowerCase()).toBe("div");
    expect(column.className).toBe(
      "extra-class column column-10 column-offset-10",
    );
  });
});
