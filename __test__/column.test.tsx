import * as assert from "assert";
import * as React from "react";
const JSDOM = require("jsdom").JSDOM;
import { renderToString } from "react-dom/server";
import {
    Column
} from "../";

describe("Columns", () => {

    const { document } = (new JSDOM(
        renderToString(
            <div>
                <Column id="column" />
                <Column id="column-width" columnWidth={10}/>
                <Column id="column-offset" offset={10}/>
                <Column id="column-width-offset" offset={10} columnWidth={10}/>
                <Column id="column-extra-class" offset={10} columnWidth={10} className="extra-class"/>
            </div>)
    )).window as Window;

    it("Column", () => {
        const column = (document.getElementById("column"));
        assert.equal(column.tagName.toLowerCase(), "div");
        assert.equal(
            column.className,
            "column"
        );
    });
    it("Column-width", () => {
        const column = (document.getElementById("column-width"));
        assert.equal(column.tagName.toLowerCase(), "div");
        assert.equal(
            column.className,
            "column column-10"
        );
    });
    it("Column-offset", () => {
        const column = (document.getElementById("column-offset"));
        assert.equal(column.tagName.toLowerCase(), "div");
        assert.equal(
            column.className,
            "column column-offset-10"
        );
    });
    it("Column-width-offset", () => {
        const column = (document.getElementById("column-width-offset"));
        assert.equal(column.tagName.toLowerCase(), "div");
        assert.equal(
            column.className,
            "column column-10 column-offset-10"
        );
    });
    it("Column-extra-class", () => {
        const column = (document.getElementById("column-extra-class"));
        assert.equal(column.tagName.toLowerCase(), "div");
        assert.equal(
            column.className,
            "extra-class column column-10 column-offset-10"
        );
    });
});
