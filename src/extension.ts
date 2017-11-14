'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Generator } from './generator';
import { UuidValue } from './values/uuidValue';
import { window } from 'vscode';
import { Value } from './values/value';
import * as copy from 'copy-to-clipboard';

const ncp = require("copy-paste");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.generate', () => {
        vscode.window.showQuickPick([
            'uuid',
            'test'
        ]).then((geneartor) => {
            switch (geneartor) {
                case 'uuid':
                    const generator = new Generator();
                    const value: Value = new UuidValue();
                    const valueGenerated: string = generator.execute(value);
                    copyGeneratedValue(valueGenerated);
                    break;
                default:
                    window.showErrorMessage("Generator not found");
                    break;
            }
        }, (error) => {
            window.showErrorMessage("Invalid generator: " + error);
        });
    });
    context.subscriptions.push(disposable);
}

function copyGeneratedValue(valueGenerated: string) {
    ncp.copy(valueGenerated, function () {
        window.showInformationMessage("Generated value '" + valueGenerated + "' copied to the clipboard");
    })
}
// this method is called when your extension is deactivated
export function deactivate() {
    console.log("Vscode value generator extension deactivated");
}