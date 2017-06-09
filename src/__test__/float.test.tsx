import * as assert from "assert";
import * as React from "react";
const JSDOM = require("jsdom").JSDOM;
import { renderToString } from "react-dom/server";
import {
    Float
} from "../float";

describe("Float", () => {

    process.env.NODE_ENV = "test"; // turn off warnings

    const { document } = (new JSDOM(
        renderToString(
            <div>
                <Float id="float-left" left/>
                <Float id="float-right" right/>
                <Float id="float-direction-left" direction="left"/>
                <Float id="float-direction-right" direction="right"/>
                <Float id="float-non-sense" direction="right" left right/>
                <Float id="float-extra-class" className="extra-class"/>
            </div>)
    )).window as Window;

    it("float-left", () => {
        const float = (document.getElementById("float-left"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "float-left"
        );
    });
    it("float-right", () => {
        const float = (document.getElementById("float-right"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "float-right"
        );
    });
    it("float-direction-left", () => {
        const float = (document.getElementById("float-direction-left"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "float-left"
        );
    });
    it("float-direction-right", () => {
        const float = (document.getElementById("float-direction-right"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "float-right"
        );
    });
    it("float-non-sense", () => {
        const float = (document.getElementById("float-non-sense"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "float-leftfloat-rightfloat-right"
        );
    });
    it("float-extra-class", () => {
        const float = (document.getElementById("float-extra-class"));
        assert.equal(float.tagName.toLowerCase(), "div");
        assert.equal(
            float.className,
            "extra-class "
        );
    });

});
