import * as assert from "assert";
import React from "react";
import { renderToString } from "react-dom/server";
import { Container } from "../src";
const JSDOM = require("jsdom").JSDOM;

describe("Containers", () => {

    process.env.NODE_ENV = "test"; // turn off warnings

    const { document } = (new JSDOM(
        renderToString(
            <div>
                <Container id="container" />
                <Container id="container-extra-class" className="extra-class"/>
            </div> as any)
    )).window as Window;

    it("container", () => {
        const container = (document.getElementById("container"));
        assert.equal(container.tagName.toLowerCase(), "div");
        assert.equal(
            container.className,
            "container"
        );
    });

    it("container-extra-class", () => {
        const container = (document.getElementById("container-extra-class"));
        assert.equal(container.tagName.toLowerCase(), "div");
        assert.equal(
            container.className,
            "extra-class container"
        );
    });
});
