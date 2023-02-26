## ![logo](images/logo-24x24.png) Chrome Extension Starter

[![Build Status](https://travis-ci.org/justiceo/chrome-extension-starter.svg?branch=master)](https://travis-ci.org/justiceo/chrome-extension-starter)

Chrome and Firefox extension starter kit (boilerplate) for Typescript development with ESBuild and E2E tests.

The earlier version of the template used gulp, you can see this version in the "v1-gulp" branch of this repository.

### Features

* Get definitions for any word in any language.
* See phonetic pronouciation.
* Works for all locales.
* Click speaker button to hear pronouciation of word.


* **Automatic Github Pages generation**: Files added in the `gh-pages` sub-directory are branched to create a Github page automatically. This is useful for static pages like help, welcome and feedback pages.
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.
* **Manifest V3 Compatible**: Easier submission to the Chrome Webstore.
* **Uninstall Feedback page**: Boostrap form with data saved to Google sheets via Google forms.

### Dev Flow

1. Download the repo and install dependencies (there are only dev dependencies)
```
git clone http://github.com/justiceo/floating-calculator 
cd floating-calculator  && npm install  
```

2. Install Firefox for Puppeteer.

By default, puppeteer only downloads Chromium, run the command below to install Firefox's equivalent of chromium:

```
PUPPETEER_PRODUCT=firefox npm i -D puppeteer --prefix ./node_modules/firefox-puppeteer
```

`PUPPETEER_PRODUCT=firefox` tells puppeteer to download firefox.

`--prefix ./node_modules/firefox-puppeteer` forces a new fetch of puppeteer. This is necessary since `node_modules/puppeteer` already exists (for chromium). The actual value of the prefix doesn't matter, just don't overwrite an actual package. 

*NB:* After running the above command, they will no be update to package.json or package-lock.json... since package "puppeteer" already exists.

3. Generate extension icons, manifest, scripts and other files
```
node index.js
```

Open chrome://extensions and load the extension directory `build/chrome-dev` as an unpacked chrome extension.
See how to [load an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) in chrome.

4. Run tests: the command below installs your extension in a browser and performs E2E tests.
```
node index.js test
```

To test against firefox, use:
```
node index.js test --browser=firefox
```

5. To generate prod builds for different browsers, specify the PROD and BROWSER environment variables, e.g.
```
node index.js --prod --browser=chrome
```

This would create the prod directory `build/chrome-prod` and a zip file `build/chrome-prod.zip`, which you can upload to the chrome webstore.

6. You can also start a new browser instance with only the extension installed:

```
npm run start:chrome    # for Chrome
npm run start:firefox   # for Firefox
```

### Examples of chrome extensions for inspirations
1. https://github.com/mdn/webextensions-examples
2. https://github.com/orbitbot/chrome-extensions-examples