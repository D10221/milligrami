import * as assert from "assert";
import * as React from "react";
const JSDOM = require("jsdom").JSDOM;
import { renderToString } from "react-dom/server";
import {
    Row
} from "../src";

describe("Rows", () => {

    const { document } = (new JSDOM(
        renderToString(
            <div>
                <Row id="row" />
                <Row id="row-wrap" rowWrap/>
                <Row id="row-no-padding" rowNoPadding />
                <Row id="row-top" rowTop />
                <Row id="row-bottom" rowBottom />
                <Row id="row-center" rowCenter />
                <Row id="row-stretch" rowStretch />
                <Row id="row-baseline" rowBaseline />
                <Row id="row-extra-class" className="extra-class" />
            </div> as any)
    )).window as Window;

    it("row", () => {
        const row = (document.getElementById("row"));
        assert.equal(row.tagName.toLowerCase(), "div");
        assert.equal(
            row.className,
            "row"
        );
    });

    it("row-wrap", () => {
        const button = (document.getElementById("row-wrap"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-wrap"
        );
    });

    it("row-no-padding", () => {
        const button = (document.getElementById("row-no-padding"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-no-padding"
        );
    });

    it("row-top", () => {
        const button = (document.getElementById("row-top"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-top"
        );
    });

    it("row-bottom", () => {
        const button = (document.getElementById("row-bottom"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-bottom"
        );
    });

    it("row-center", () => {
        const button = (document.getElementById("row-center"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-center"
        );
    });

    it("row-stretch", () => {
        const button = (document.getElementById("row-stretch"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-stretch"
        );
    });

    it("row-baseline", () => {
        const button = (document.getElementById("row-baseline"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "row row-baseline"
        );
    });

    it("row-extra-class", () => {
        const button = (document.getElementById("row-extra-class"));
        assert.equal(button.tagName.toLowerCase(), "div");
        assert.equal(
            button.className,
            "extra-class row"
        );
    });
});
