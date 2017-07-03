/// <reference types="node" />
/// <reference types="mocha" />

const utils = require("../.");
const assert = require("assert");

context("pvutils", () => {

    context("getParametersValue", () => {

        it("parameter exists", () => {
            const params = {
                name: "Test",
            };

            assert.equal(utils.getParametersValue(params, "name", "def"), "Test");
        });

        it("default value", () => {
            const params = {
            };

            assert.equal(utils.getParametersValue(params, "name", "def"), "def");
        });

    });

    context("bufferToHexCodes", () => {

        it("default values", () => {
            const buffer = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).buffer;
            const test = "01020304050607080900";
            const hex = utils.bufferToHexCodes(buffer);

            assert.equal(hex, test);
        });

        it("offset", () => {
            const buffer = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).buffer;
            const test = "020304050607080900";
            const hex = utils.bufferToHexCodes(buffer, 1);

            assert.equal(hex, test);
        });

        it("length", () => {
            const buffer = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).buffer;
            const test = "0203040506070809";
            const hex = utils.bufferToHexCodes(buffer, 1, 8);

            assert.equal(hex, test);
        });
    });

});
