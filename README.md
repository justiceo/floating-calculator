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
    <td valign="center">
      <a href="https://addons.mozilla.org/firefox/extensions/">
        <img src="src/assets/firefox-logo.png" alt="Firefox add-ons" width="50" />
        <p align="center">Firefox Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://addons.opera.com/en/extensions/">
        <img src="src/assets/opera-logo.png" alt="Opera add-ons" width="50"/>
        <p align="center">Opera Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://microsoftedge.microsoft.com/addons">
        <img src="src/assets/ms-edge-logo.png" alt="MS Edge add-ons" width="50" />
        <p align="center">Ms Edge Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://apps.apple.com/app/apple-store/">
        <img src="src/assets/safari-logo.png" alt="Safari add-ons" width="50" />
        <p align="center">Safari Extensions</p>
      </a>
    </td>
  </tr>
</table>

## Features

* Insert a floating calculator on any webpage.
* Using the most advanced math library under-the-hood, you can do more than the keypad allows.
* Works for all URLs now, including file URLs (if you've granted the file permission).
* Works offline and is extremely fast, no more dependence on Google Calculator.

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


### Other considerations
* No options page, see context menus for options.


### MVP release notes
- remove window.postMessage <DONE>
- integrate insect.js <DONE>
- add inv controls. <DONE>
- add open-in-window context menu to launch standalone. <DONE>
- add open in newtab to context menu <DONE>
- switch to mathjs (supports function overrides necessary for rad/deg)
- Add angle config - https://mathjs.org/examples/browser/angle_configuration.html.html
- auto redirect users to new tab with information about why extension doesn't work on certain pages.

### MVP fast follow
- history - handle scrolling contents.
- history - handle too long expression.
- text-input - handle too long input.
- text-input - fix result label overflow.
- enable hidden the keypad and controls sections (for quick expression).
- add help control with help page.
- add integration tests.

### Post-MVP release
- format the display with mathjax or mathjs
- switch to typescript
- add options tab
  - add math formatting to input and label
  - preseve history across invocations.
  - precision of results
  - mode (simple, advanced, rocket-science)
- add unit convertion tab or button.
- smart inputs 
  - validating input to certain functions
- add error notification bar.
- add turbo mode, a row on top and another on the left.
  - shink x2/sqrt, rad/deg, 
  - creates room for 5 + 6 + 2 = 13 more buttons.
- add i18n support.
- Change AC to delete with long-press to clear.
- Add analytics support, determine which keys are useless.
- Support minimizing to a floating button.
- Display persistent floating button.
- Games
  - How fast are you? calculator prints expression and a timer, you type the answer.
  - How much can you remember? Guess the digits of PI, or e
  - Prime or not prime?
- Different skins and themes like https://codepen.io/ykadosh/details/OJNNQOz

