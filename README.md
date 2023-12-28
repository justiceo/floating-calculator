# ![logo](src/assets/logo-24x24.png) Floating Calculator

A floating calculator anywhere you need it

Logo inspo - https://www.veryicon.com/icons/business/colorful-office-icons/book-52.html

![Screenshot](src/assets/screenshot.JPEG "Screenshot")

## Downloads

<table cellspacing="0" cellpadding="0">
  <tr style="text-align: center">
    <td valign="center">
      <a align="center" href="https://chrome.google.com/webstore/detail/floating-calculator/mbfnbhfjnjeedaknilkfegfnnmmmmpmn">
        <img src="src/assets/chrome-logo.png" alt="Chrome web store" width="50" />
        <p align="center">Chrome Web Store</p>
      </a>
    </td>
  </tr>
</table>

## Features

- Insert a floating calculator on any webpage.
- Using the most advanced math library under-the-hood, you can do more than the keypad allows.
- Works for all URLs now, including file URLs (if you've granted the file permission).
- Works offline and is extremely fast, no more dependence on Google Calculator.
- Go beyond the keypad, the display supports direct input of expressions, symbols and operators not available on the keypad.

## Project setup

```bash
# Install dependencies
npm install

# Build extension for development, watch for file changes and rebuild.
node tools/esbuild watch

# Generate compliant images assets for logo (default logo location src/assets/logo.png)
node tools/esbuild generateIcons

# Translate app strings to all supported chrome locales
node tools/esbuild translate

# Start an instance of Chromium with extension installed (using puppeteer)
# For Firefox, pass --browser=firefox as argument.
node tools/esbuild start

# Build and package extension into a store-ready upload
node tools/esbuild --prod

# Create extension package for Firefox/Opera/Edge by specifying --browser argument
node tools/esbuild --prod --browser=firefox

# Run tests
node tools/esbuild test
```

### Install Locally

#### Chrome

1. Open chrome and navigate to extensions page using this URL: chrome://extensions.
2. Enable the "Developer mode".
3. Click "Load unpacked extension" button, browse the `build/chrome-dev` directory and select it.

### Firefox

1. Open firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click the "Load Temporary Add-on" button.
3. Browse the `build/firefox-dev` directory and select the `manifest.json` file.
