# Custom Console Runner Chrome Extension

This Chrome extension allows you to run custom JavaScript code on the current tab directly from a popup.

## Features
- Popup with a textarea to enter JavaScript code
- Run button to execute the code on the current tab

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select this folder.
5. The extension icon will appear in your toolbar.

## Usage
1. Click the extension icon to open the popup.
2. Type or paste your JavaScript code into the textarea.
3. Click **Run** to execute the code on the current tab.

## Security
- The code is executed using `eval` in the context of the current page. Be careful with the code you run.

## Icons
- `icon-16.png`, `icon-48.png`, `icon-128.png` are used for the extension icon. 