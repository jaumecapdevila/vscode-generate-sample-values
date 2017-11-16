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
import { NameValue } from '../values/nameValue';
import { Value } from '../values/value';

// Defines a Mocha test suite to group tests of similar kind together
suite("Generator", () => {

    // Defines a Mocha unit test
    test("It should return a valid uuid", () => {
        const uuidPattern: RegExp = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/;
        const value: Value = new UuidValue();
        const uuid:string = value.generate();
        assert.equal(true, uuidPattern.test(uuid));
    });

    test("It should return a valid name", () => {
        const namePattern: RegExp = /(Mr\.|Mrs\.) ([a-z]{16})/;
        const value: Value = new NameValue();
        const name: string = value.generate();
        assert.equal(true, namePattern.test(name));
    });
});