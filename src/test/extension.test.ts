//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { UuidValue } from '../values/uuidValue';

// Defines a Mocha test suite to group tests of similar kind together
suite("Uuid generator", () => {

    // Defines a Mocha unit test
    test("It should return a valid uuid", () => {
        const uuidPattern: RegExp = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/;
        const value = new UuidValue();
        const uuid:string = value.generate();
        assert.equal(true, uuidPattern.test(uuid));
    });
});