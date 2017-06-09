import * as assert from "assert";
import * as React from "react";
const JSDOM = require("jsdom").JSDOM;
import { renderToString } from "react-dom/server";
import {
    Label
} from "../Label";

describe("Labels", () => {

    const { document } = (new JSDOM(
        renderToString(
            <div>
                <Label id="label" />
                <Label id="label-inline" inLine />
                <Label id="label-extra-class" inLine className="extra-class" />
            </div>)
    )).window as Window;

    it("label", () => {
        const label = (document.getElementById("label"));
        assert.equal(label.tagName.toLowerCase(), "label");
        assert.equal(
            label.className,
            ""
        );
    });

    it("label-inline", () => {
        const label = (document.getElementById("label-inline"));
        assert.equal(label.tagName.toLowerCase(), "label");
        assert.equal(
            label.className,
            "label-inline"
        );
    });

    it("label-extra-class", () => {
        const label = (document.getElementById("label-extra-class"));
        assert.equal(label.tagName.toLowerCase(), "label");
        assert.equal(
            label.className,
            "extra-class label-inline"
        );
    });
});
