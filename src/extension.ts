'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Generator } from './generator';
import { window } from 'vscode';
import { workspace } from 'vscode';
import { Value } from './values/value';
import { NameValue } from './values/nameValue';
import { UuidValue } from './values/uuidValue';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand(
        'extension.generate',
        () => {
            const textEditor = window.activeTextEditor;
            window.showQuickPick([
                'uuid',
                'name'
            ]).then((geneartor) => {
                const generator = new Generator();
                let value;
                switch (geneartor) {
                    case 'uuid':
                        value = new UuidValue();
                        break;
                    case 'name':
                        value = new NameValue();
                        break;
                    default:
                        window.showErrorMessage("Generator not found");
                        break;
                }
                textEditor.edit(function (editor) {
                    editor.insert(textEditor.selection.active, generator.execute(value))
                }).then((done) => {
                    if (!done) {
                        window.showErrorMessage("An unexpected error has occurred");
                    }
                });
            }, (error) => {
                window.showErrorMessage("Invalid generator: " + error);
            });
        });
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log("Vscode value generator extension deactivated");
}