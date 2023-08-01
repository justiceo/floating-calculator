var IS_DEV_BUILD=true;
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@sentry/utils/esm/is.js
  var objectToString = Object.prototype.toString;
  function isError(wat) {
    switch (objectToString.call(wat)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return isInstanceOf(wat, Error);
    }
  }
  function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
  }
  function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
  }
  function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
  }
  function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
  }
  function isString(wat) {
    return isBuiltin(wat, "String");
  }
  function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
  }
  function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
  }
  function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
  }
  function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
  }
  function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
  }
  function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
  }
  function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
  }
  function isNaN2(wat) {
    return typeof wat === "number" && wat !== wat;
  }
  function isInstanceOf(wat, base) {
    try {
      return wat instanceof base;
    } catch (_e) {
      return false;
    }
  }

  // node_modules/@sentry/utils/esm/worldwide.js
  function isGlobalObj(obj) {
    return obj && obj.Math == Math ? obj : void 0;
  }
  var GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
    return this;
  }() || {};
  function getGlobalObject() {
    return GLOBAL_OBJ;
  }
  function getGlobalSingleton(name, creator, obj) {
    const gbl = obj || GLOBAL_OBJ;
    const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
    const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
  }

  // node_modules/@sentry/utils/esm/browser.js
  var WINDOW = getGlobalObject();
  var DEFAULT_MAX_STRING_LENGTH = 80;
  function htmlTreeAsString(elem, options = {}) {
    try {
      let currentElem = elem;
      const MAX_TRAVERSE_HEIGHT = 5;
      const out = [];
      let height = 0;
      let len = 0;
      const separator = " > ";
      const sepLength = separator.length;
      let nextStr;
      const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
      const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
      while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = _htmlElementAsString(currentElem, keyAttrs);
        if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
          break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
      }
      return out.reverse().join(separator);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function _htmlElementAsString(el, keyAttrs) {
    const elem = el;
    const out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i3;
    if (!elem || !elem.tagName) {
      return "";
    }
    out.push(elem.tagName.toLowerCase());
    const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
    if (keyAttrPairs && keyAttrPairs.length) {
      keyAttrPairs.forEach((keyAttrPair) => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });
    } else {
      if (elem.id) {
        out.push(`#${elem.id}`);
      }
      className = elem.className;
      if (className && isString(className)) {
        classes = className.split(/\s+/);
        for (i3 = 0; i3 < classes.length; i3++) {
          out.push(`.${classes[i3]}`);
        }
      }
    }
    const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
    for (i3 = 0; i3 < allowedAttrs.length; i3++) {
      key = allowedAttrs[i3];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push(`[${key}="${attr}"]`);
      }
    }
    return out.join("");
  }
  function getLocationHref() {
    try {
      return WINDOW.document.location.href;
    } catch (oO) {
      return "";
    }
  }
  function getDomElement(selector) {
    if (WINDOW.document && WINDOW.document.querySelector) {
      return WINDOW.document.querySelector(selector);
    }
    return null;
  }

  // node_modules/@sentry/utils/esm/error.js
  var SentryError = class extends Error {
    constructor(message, logLevel = "warn") {
      super(message);
      this.message = message;
      this.name = new.target.prototype.constructor.name;
      Object.setPrototypeOf(this, new.target.prototype);
      this.logLevel = logLevel;
    }
  };

  // node_modules/@sentry/utils/esm/dsn.js
  var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
  }
  function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
  }
  function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
      throw new SentryError(`Invalid Sentry Dsn: ${str}`);
    }
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    const split = projectId.split("/");
    if (split.length > 1) {
      path = split.slice(0, -1).join("/");
      projectId = split.pop();
    }
    if (projectId) {
      const projectMatch = projectId.match(/^\d+/);
      if (projectMatch) {
        projectId = projectMatch[0];
      }
    }
    return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
  }
  function dsnFromComponents(components) {
    return {
      protocol: components.protocol,
      publicKey: components.publicKey || "",
      pass: components.pass || "",
      host: components.host,
      port: components.port || "",
      path: components.path || "",
      projectId: components.projectId
    };
  }
  function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
      return;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
    requiredComponents.forEach((component) => {
      if (!dsn[component]) {
        throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
      }
    });
    if (!projectId.match(/^\d+$/)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    }
    if (!isValidProtocol(protocol)) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    }
    if (port && isNaN(parseInt(port, 10))) {
      throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
    }
    return true;
  }
  function makeDsn(from) {
    const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
  }

  // node_modules/@sentry/utils/esm/logger.js
  var PREFIX = "Sentry Logger ";
  var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function consoleSandbox(callback) {
    if (!("console" in GLOBAL_OBJ)) {
      return callback();
    }
    const originalConsole = GLOBAL_OBJ.console;
    const wrappedLevels = {};
    CONSOLE_LEVELS.forEach((level) => {
      const originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
      if (level in originalConsole && originalWrappedFunc) {
        wrappedLevels[level] = originalConsole[level];
        originalConsole[level] = originalWrappedFunc;
      }
    });
    try {
      return callback();
    } finally {
      Object.keys(wrappedLevels).forEach((level) => {
        originalConsole[level] = wrappedLevels[level];
      });
    }
  }
  function makeLogger() {
    let enabled = false;
    const logger2 = {
      enable: () => {
        enabled = true;
      },
      disable: () => {
        enabled = false;
      }
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = (...args) => {
          if (enabled) {
            consoleSandbox(() => {
              GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
            });
          }
        };
      });
    } else {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = () => void 0;
      });
    }
    return logger2;
  }
  var logger;
  if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
    logger = getGlobalSingleton("logger", makeLogger);
  } else {
    logger = makeLogger();
  }

  // node_modules/@sentry/utils/esm/string.js
  function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) {
      return str;
    }
    return str.length <= max ? str : `${str.slice(0, max)}...`;
  }
  function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
      return "";
    }
    const output = [];
    for (let i3 = 0; i3 < input.length; i3++) {
      const value = input[i3];
      try {
        output.push(String(value));
      } catch (e2) {
        output.push("[value cannot be serialized]");
      }
    }
    return output.join(delimiter);
  }
  function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!isString(value)) {
      return false;
    }
    if (isRegExp(pattern)) {
      return pattern.test(value);
    }
    if (isString(pattern)) {
      return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    return false;
  }
  function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
  }

  // node_modules/@sentry/utils/esm/object.js
  function fill(source, name, replacementFactory) {
    if (!(name in source)) {
      return;
    }
    const original = source[name];
    const wrapped = replacementFactory(original);
    if (typeof wrapped === "function") {
      try {
        markFunctionWrapped(wrapped, original);
      } catch (_Oo) {
      }
    }
    source[name] = wrapped;
  }
  function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
      value,
      writable: true,
      configurable: true
    });
  }
  function markFunctionWrapped(wrapped, original) {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  }
  function getOriginalFunction(func) {
    return func.__sentry_original__;
  }
  function urlEncode(object) {
    return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
  }
  function convertToPlainObject(value) {
    if (isError(value)) {
      return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
      };
    } else if (isEvent(value)) {
      const newObj = {
        type: value.type,
        target: serializeEventTarget(value.target),
        currentTarget: serializeEventTarget(value.currentTarget),
        ...getOwnProperties(value)
      };
      if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
        newObj.detail = value.detail;
      }
      return newObj;
    } else {
      return value;
    }
  }
  function serializeEventTarget(target) {
    try {
      return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
      const extractedProps = {};
      for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          extractedProps[property] = obj[property];
        }
      }
      return extractedProps;
    } else {
      return {};
    }
  }
  function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) {
      return "[object has no keys]";
    }
    if (keys[0].length >= maxLength) {
      return truncate(keys[0], maxLength);
    }
    for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
      const serialized = keys.slice(0, includedKeys).join(", ");
      if (serialized.length > maxLength) {
        continue;
      }
      if (includedKeys === keys.length) {
        return serialized;
      }
      return truncate(serialized, maxLength);
    }
    return "";
  }
  function dropUndefinedKeys(inputValue) {
    const memoizationMap = /* @__PURE__ */ new Map();
    return _dropUndefinedKeys(inputValue, memoizationMap);
  }
  function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (isPlainObject(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = {};
      memoizationMap.set(inputValue, returnValue);
      for (const key of Object.keys(inputValue)) {
        if (typeof inputValue[key] !== "undefined") {
          returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        }
      }
      return returnValue;
    }
    if (Array.isArray(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = [];
      memoizationMap.set(inputValue, returnValue);
      inputValue.forEach((item) => {
        returnValue.push(_dropUndefinedKeys(item, memoizationMap));
      });
      return returnValue;
    }
    return inputValue;
  }

  // node_modules/@sentry/utils/esm/stacktrace.js
  var STACKTRACE_LIMIT = 50;
  var debugIdParserCache = /* @__PURE__ */ new Map();
  function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a3, b3) => a3[0] - b3[0]).map((p3) => p3[1]);
    return (stack, skipFirst = 0) => {
      const frames = [];
      for (const parser of sortedParsers) {
        let debugIdCache = debugIdParserCache.get(parser);
        if (!debugIdCache) {
          debugIdCache = /* @__PURE__ */ new Map();
          debugIdParserCache.set(parser, debugIdCache);
        }
        const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
        if (debugIdMap) {
          Object.keys(debugIdMap).forEach((debugIdStackTrace) => {
            debugIdStackTrace.split("\n").forEach((line) => {
              const frame = parser(line);
              if (frame && frame.filename) {
                debugIdCache.set(frame.filename, debugIdMap[debugIdStackTrace]);
              }
            });
          });
        }
      }
      for (const line of stack.split("\n").slice(skipFirst)) {
        if (line.length > 1024) {
          continue;
        }
        const cleanedLine = line.replace(/\(error: (.*)\)/, "$1");
        for (const parser of sortedParsers) {
          const frame = parser(cleanedLine);
          if (frame) {
            const debugIdCache = debugIdParserCache.get(parser);
            if (debugIdCache && frame.filename) {
              const cachedDebugId = debugIdCache.get(frame.filename);
              if (cachedDebugId) {
                frame.debug_id = cachedDebugId;
              }
            }
            frames.push(frame);
            break;
          }
        }
      }
      return stripSentryFramesAndReverse(frames);
    };
  }
  function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
      return createStackParser(...stackParser);
    }
    return stackParser;
  }
  function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
      return [];
    }
    let localStack = stack;
    const firstFrameFunction = localStack[0].function || "";
    const lastFrameFunction = localStack[localStack.length - 1].function || "";
    if (firstFrameFunction.indexOf("captureMessage") !== -1 || firstFrameFunction.indexOf("captureException") !== -1) {
      localStack = localStack.slice(1);
    }
    if (lastFrameFunction.indexOf("sentryWrapped") !== -1) {
      localStack = localStack.slice(0, -1);
    }
    return localStack.slice(0, STACKTRACE_LIMIT).map((frame) => ({
      ...frame,
      filename: frame.filename || localStack[0].filename,
      function: frame.function || "?"
    })).reverse();
  }
  var defaultFunctionName = "<anonymous>";
  function getFunctionName(fn) {
    try {
      if (!fn || typeof fn !== "function") {
        return defaultFunctionName;
      }
      return fn.name || defaultFunctionName;
    } catch (e2) {
      return defaultFunctionName;
    }
  }

  // node_modules/@sentry/utils/esm/supports.js
  var WINDOW2 = getGlobalObject();
  function supportsFetch() {
    if (!("fetch" in WINDOW2)) {
      return false;
    }
    try {
      new Headers();
      new Request("http://www.example.com");
      new Response();
      return true;
    } catch (e2) {
      return false;
    }
  }
  function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
  }
  function supportsNativeFetch() {
    if (!supportsFetch()) {
      return false;
    }
    if (isNativeFetch(WINDOW2.fetch)) {
      return true;
    }
    let result = false;
    const doc = WINDOW2.document;
    if (doc && typeof doc.createElement === "function") {
      try {
        const sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
          result = isNativeFetch(sandbox.contentWindow.fetch);
        }
        doc.head.removeChild(sandbox);
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
      }
    }
    return result;
  }
  function supportsHistory() {
    const chrome3 = WINDOW2.chrome;
    const isChromePackagedApp = chrome3 && chrome3.app && chrome3.app.runtime;
    const hasHistoryApi = "history" in WINDOW2 && !!WINDOW2.history.pushState && !!WINDOW2.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
  }

  // node_modules/@sentry/utils/esm/instrument.js
  var WINDOW3 = getGlobalObject();
  var handlers = {};
  var instrumented = {};
  function instrument(type) {
    if (instrumented[type]) {
      return;
    }
    instrumented[type] = true;
    switch (type) {
      case "console":
        instrumentConsole();
        break;
      case "dom":
        instrumentDOM();
        break;
      case "xhr":
        instrumentXHR();
        break;
      case "fetch":
        instrumentFetch();
        break;
      case "history":
        instrumentHistory();
        break;
      case "error":
        instrumentError();
        break;
      case "unhandledrejection":
        instrumentUnhandledRejection();
        break;
      default:
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
        return;
    }
  }
  function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
  }
  function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
      return;
    }
    for (const handler of handlers[type] || []) {
      try {
        handler(data);
      } catch (e2) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
          `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
          e2
        );
      }
    }
  }
  function instrumentConsole() {
    if (!("console" in WINDOW3)) {
      return;
    }
    CONSOLE_LEVELS.forEach(function(level) {
      if (!(level in WINDOW3.console)) {
        return;
      }
      fill(WINDOW3.console, level, function(originalConsoleMethod) {
        return function(...args) {
          triggerHandlers("console", { args, level });
          if (originalConsoleMethod) {
            originalConsoleMethod.apply(WINDOW3.console, args);
          }
        };
      });
    });
  }
  function instrumentFetch() {
    if (!supportsNativeFetch()) {
      return;
    }
    fill(WINDOW3, "fetch", function(originalFetch) {
      return function(...args) {
        const handlerData = {
          args,
          fetchData: {
            method: getFetchMethod(args),
            url: getFetchUrl(args)
          },
          startTimestamp: Date.now()
        };
        triggerHandlers("fetch", {
          ...handlerData
        });
        return originalFetch.apply(WINDOW3, args).then(
          (response) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              response
            });
            return response;
          },
          (error) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              error
            });
            throw error;
          }
        );
      };
    });
  }
  function getFetchMethod(fetchArgs = []) {
    if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
      return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
      return String(fetchArgs[1].method).toUpperCase();
    }
    return "GET";
  }
  function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === "string") {
      return fetchArgs[0];
    }
    if ("Request" in WINDOW3 && isInstanceOf(fetchArgs[0], Request)) {
      return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
  }
  function instrumentXHR() {
    if (!("XMLHttpRequest" in WINDOW3)) {
      return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, "open", function(originalOpen) {
      return function(...args) {
        const xhr = this;
        const url = args[1];
        const xhrInfo = xhr.__sentry_xhr__ = {
          method: isString(args[0]) ? args[0].toUpperCase() : args[0],
          url: args[1]
        };
        if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
          xhr.__sentry_own_request__ = true;
        }
        const onreadystatechangeHandler = function() {
          if (xhr.readyState === 4) {
            try {
              xhrInfo.status_code = xhr.status;
            } catch (e2) {
            }
            triggerHandlers("xhr", {
              args,
              endTimestamp: Date.now(),
              startTimestamp: Date.now(),
              xhr
            });
          }
        };
        if ("onreadystatechange" in xhr && typeof xhr.onreadystatechange === "function") {
          fill(xhr, "onreadystatechange", function(original) {
            return function(...readyStateArgs) {
              onreadystatechangeHandler();
              return original.apply(xhr, readyStateArgs);
            };
          });
        } else {
          xhr.addEventListener("readystatechange", onreadystatechangeHandler);
        }
        return originalOpen.apply(xhr, args);
      };
    });
    fill(xhrproto, "send", function(originalSend) {
      return function(...args) {
        if (this.__sentry_xhr__ && args[0] !== void 0) {
          this.__sentry_xhr__.body = args[0];
        }
        triggerHandlers("xhr", {
          args,
          startTimestamp: Date.now(),
          xhr: this
        });
        return originalSend.apply(this, args);
      };
    });
  }
  var lastHref;
  function instrumentHistory() {
    if (!supportsHistory()) {
      return;
    }
    const oldOnPopState = WINDOW3.onpopstate;
    WINDOW3.onpopstate = function(...args) {
      const to = WINDOW3.location.href;
      const from = lastHref;
      lastHref = to;
      triggerHandlers("history", {
        from,
        to
      });
      if (oldOnPopState) {
        try {
          return oldOnPopState.apply(this, args);
        } catch (_oO) {
        }
      }
    };
    function historyReplacementFunction(originalHistoryFunction) {
      return function(...args) {
        const url = args.length > 2 ? args[2] : void 0;
        if (url) {
          const from = lastHref;
          const to = String(url);
          lastHref = to;
          triggerHandlers("history", {
            from,
            to
          });
        }
        return originalHistoryFunction.apply(this, args);
      };
    }
    fill(WINDOW3.history, "pushState", historyReplacementFunction);
    fill(WINDOW3.history, "replaceState", historyReplacementFunction);
  }
  var debounceDuration = 1e3;
  var debounceTimerID;
  var lastCapturedEvent;
  function shouldShortcircuitPreviousDebounce(previous, current) {
    if (!previous) {
      return true;
    }
    if (previous.type !== current.type) {
      return true;
    }
    try {
      if (previous.target !== current.target) {
        return true;
      }
    } catch (e2) {
    }
    return false;
  }
  function shouldSkipDOMEvent(event) {
    if (event.type !== "keypress") {
      return false;
    }
    try {
      const target = event.target;
      if (!target || !target.tagName) {
        return true;
      }
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return false;
      }
    } catch (e2) {
    }
    return true;
  }
  function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
      if (!event || lastCapturedEvent === event) {
        return;
      }
      if (shouldSkipDOMEvent(event)) {
        return;
      }
      const name = event.type === "keypress" ? "input" : event.type;
      if (debounceTimerID === void 0) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      }
      clearTimeout(debounceTimerID);
      debounceTimerID = WINDOW3.setTimeout(() => {
        debounceTimerID = void 0;
      }, debounceDuration);
    };
  }
  function instrumentDOM() {
    if (!("document" in WINDOW3)) {
      return;
    }
    const triggerDOMHandler = triggerHandlers.bind(null, "dom");
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    WINDOW3.document.addEventListener("click", globalDOMEventHandler, false);
    WINDOW3.document.addEventListener("keypress", globalDOMEventHandler, false);
    ["EventTarget", "Node"].forEach((target) => {
      const proto = WINDOW3[target] && WINDOW3[target].prototype;
      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
        return;
      }
      fill(proto, "addEventListener", function(originalAddEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
              if (!handlerForType.handler) {
                const handler = makeDOMEventHandler(triggerDOMHandler);
                handlerForType.handler = handler;
                originalAddEventListener.call(this, type, handler, options);
              }
              handlerForType.refCount++;
            } catch (e2) {
            }
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      });
      fill(
        proto,
        "removeEventListener",
        function(originalRemoveEventListener) {
          return function(type, listener, options) {
            if (type === "click" || type == "keypress") {
              try {
                const el = this;
                const handlers2 = el.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers2[type];
                if (handlerForType) {
                  handlerForType.refCount--;
                  if (handlerForType.refCount <= 0) {
                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                    handlerForType.handler = void 0;
                    delete handlers2[type];
                  }
                  if (Object.keys(handlers2).length === 0) {
                    delete el.__sentry_instrumentation_handlers__;
                  }
                }
              } catch (e2) {
              }
            }
            return originalRemoveEventListener.call(this, type, listener, options);
          };
        }
      );
    });
  }
  var _oldOnErrorHandler = null;
  function instrumentError() {
    _oldOnErrorHandler = WINDOW3.onerror;
    WINDOW3.onerror = function(msg, url, line, column, error) {
      triggerHandlers("error", {
        column,
        error,
        line,
        msg,
        url
      });
      if (_oldOnErrorHandler) {
        return _oldOnErrorHandler.apply(this, arguments);
      }
      return false;
    };
  }
  var _oldOnUnhandledRejectionHandler = null;
  function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = WINDOW3.onunhandledrejection;
    WINDOW3.onunhandledrejection = function(e2) {
      triggerHandlers("unhandledrejection", e2);
      if (_oldOnUnhandledRejectionHandler) {
        return _oldOnUnhandledRejectionHandler.apply(this, arguments);
      }
      return true;
    };
  }

  // node_modules/@sentry/utils/esm/memo.js
  function memoBuilder() {
    const hasWeakSet = typeof WeakSet === "function";
    const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
    function memoize(obj) {
      if (hasWeakSet) {
        if (inner.has(obj)) {
          return true;
        }
        inner.add(obj);
        return false;
      }
      for (let i3 = 0; i3 < inner.length; i3++) {
        const value = inner[i3];
        if (value === obj) {
          return true;
        }
      }
      inner.push(obj);
      return false;
    }
    function unmemoize(obj) {
      if (hasWeakSet) {
        inner.delete(obj);
      } else {
        for (let i3 = 0; i3 < inner.length; i3++) {
          if (inner[i3] === obj) {
            inner.splice(i3, 1);
            break;
          }
        }
      }
    }
    return [memoize, unmemoize];
  }

  // node_modules/@sentry/utils/esm/misc.js
  function uuid4() {
    const gbl = GLOBAL_OBJ;
    const crypto = gbl.crypto || gbl.msCrypto;
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID().replace(/-/g, "");
    }
    const getRandomByte = crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
      /[018]/g,
      (c3) => (c3 ^ (getRandomByte() & 15) >> c3 / 4).toString(16)
    );
  }
  function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : void 0;
  }
  function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
      return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
      if (firstException.type && firstException.value) {
        return `${firstException.type}: ${firstException.value}`;
      }
      return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
  }
  function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
      firstException.value = value || "";
    }
    if (!firstException.type) {
      firstException.type = type || "Error";
    }
  }
  function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
      return;
    }
    const defaultMechanism = { type: "generic", handled: true };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
    if (newMechanism && "data" in newMechanism) {
      const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
      firstException.mechanism.data = mergedData;
    }
  }
  function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) {
      return true;
    }
    try {
      addNonEnumerableProperty(exception, "__sentry_captured__", true);
    } catch (err) {
    }
    return false;
  }
  function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
  }

  // node_modules/@sentry/utils/esm/env.js
  function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
  }
  function getSDKSource() {
    return "npm";
  }

  // node_modules/@sentry/utils/esm/node.js
  function isNodeEnv() {
    return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
  function dynamicRequire(mod, request) {
    return mod.require(request);
  }
  function loadModule(moduleName) {
    let mod;
    try {
      mod = dynamicRequire(module, moduleName);
    } catch (e2) {
    }
    try {
      const { cwd } = dynamicRequire(module, "process");
      mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
    } catch (e2) {
    }
    return mod;
  }

  // node_modules/@sentry/utils/esm/normalize.js
  function normalize(input, depth = Infinity, maxProperties = Infinity) {
    try {
      return visit("", input, depth, maxProperties);
    } catch (err) {
      return { ERROR: `**non-serializable** (${err})` };
    }
  }
  function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
      return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
  }
  function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    if (value === null || ["number", "boolean", "string"].includes(typeof value) && !isNaN2(value)) {
      return value;
    }
    const stringified = stringifyValue(key, value);
    if (!stringified.startsWith("[object ")) {
      return stringified;
    }
    if (value["__sentry_skip_normalization__"]) {
      return value;
    }
    if (depth === 0) {
      return stringified.replace("object ", "");
    }
    if (memoize(value)) {
      return "[Circular ~]";
    }
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
      try {
        const jsonValue = valueWithToJSON.toJSON();
        return visit("", jsonValue, depth - 1, maxProperties, memo);
      } catch (err) {
      }
    }
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    const visitable = convertToPlainObject(value);
    for (const visitKey in visitable) {
      if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
        continue;
      }
      if (numAdded >= maxProperties) {
        normalized[visitKey] = "[MaxProperties ~]";
        break;
      }
      const visitValue = visitable[visitKey];
      normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
      numAdded++;
    }
    unmemoize(value);
    return normalized;
  }
  function stringifyValue(key, value) {
    try {
      if (key === "domain" && value && typeof value === "object" && value._events) {
        return "[Domain]";
      }
      if (key === "domainEmitter") {
        return "[DomainEmitter]";
      }
      if (typeof global !== "undefined" && value === global) {
        return "[Global]";
      }
      if (typeof window !== "undefined" && value === window) {
        return "[Window]";
      }
      if (typeof document !== "undefined" && value === document) {
        return "[Document]";
      }
      if (isSyntheticEvent(value)) {
        return "[SyntheticEvent]";
      }
      if (typeof value === "number" && value !== value) {
        return "[NaN]";
      }
      if (value === void 0) {
        return "[undefined]";
      }
      if (typeof value === "function") {
        return `[Function: ${getFunctionName(value)}]`;
      }
      if (typeof value === "symbol") {
        return `[${String(value)}]`;
      }
      if (typeof value === "bigint") {
        return `[BigInt: ${String(value)}]`;
      }
      return `[object ${getConstructorName(value)}]`;
    } catch (err) {
      return `**non-serializable** (${err})`;
    }
  }
  function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);
    return prototype ? prototype.constructor.name : "null prototype";
  }
  function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
  }
  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  // node_modules/@sentry/utils/esm/syncpromise.js
  var States;
  (function(States2) {
    const PENDING = 0;
    States2[States2["PENDING"] = PENDING] = "PENDING";
    const RESOLVED = 1;
    States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
    const REJECTED = 2;
    States2[States2["REJECTED"] = REJECTED] = "REJECTED";
  })(States || (States = {}));
  function resolvedSyncPromise(value) {
    return new SyncPromise((resolve) => {
      resolve(value);
    });
  }
  function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject) => {
      reject(reason);
    });
  }
  var SyncPromise = class {
    __init() {
      this._state = States.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(executor) {
      SyncPromise.prototype.__init.call(this);
      SyncPromise.prototype.__init2.call(this);
      SyncPromise.prototype.__init3.call(this);
      SyncPromise.prototype.__init4.call(this);
      SyncPromise.prototype.__init5.call(this);
      SyncPromise.prototype.__init6.call(this);
      try {
        executor(this._resolve, this._reject);
      } catch (e2) {
        this._reject(e2);
      }
    }
    then(onfulfilled, onrejected) {
      return new SyncPromise((resolve, reject) => {
        this._handlers.push([
          false,
          (result) => {
            if (!onfulfilled) {
              resolve(result);
            } else {
              try {
                resolve(onfulfilled(result));
              } catch (e2) {
                reject(e2);
              }
            }
          },
          (reason) => {
            if (!onrejected) {
              reject(reason);
            } else {
              try {
                resolve(onrejected(reason));
              } catch (e2) {
                reject(e2);
              }
            }
          }
        ]);
        this._executeHandlers();
      });
    }
    catch(onrejected) {
      return this.then((val) => val, onrejected);
    }
    finally(onfinally) {
      return new SyncPromise((resolve, reject) => {
        let val;
        let isRejected;
        return this.then(
          (value) => {
            isRejected = false;
            val = value;
            if (onfinally) {
              onfinally();
            }
          },
          (reason) => {
            isRejected = true;
            val = reason;
            if (onfinally) {
              onfinally();
            }
          }
        ).then(() => {
          if (isRejected) {
            reject(val);
            return;
          }
          resolve(val);
        });
      });
    }
    __init3() {
      this._resolve = (value) => {
        this._setResult(States.RESOLVED, value);
      };
    }
    __init4() {
      this._reject = (reason) => {
        this._setResult(States.REJECTED, reason);
      };
    }
    __init5() {
      this._setResult = (state, value) => {
        if (this._state !== States.PENDING) {
          return;
        }
        if (isThenable(value)) {
          void value.then(this._resolve, this._reject);
          return;
        }
        this._state = state;
        this._value = value;
        this._executeHandlers();
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === States.PENDING) {
          return;
        }
        const cachedHandlers = this._handlers.slice();
        this._handlers = [];
        cachedHandlers.forEach((handler) => {
          if (handler[0]) {
            return;
          }
          if (this._state === States.RESOLVED) {
            handler[1](this._value);
          }
          if (this._state === States.REJECTED) {
            handler[2](this._value);
          }
          handler[0] = true;
        });
      };
    }
  };

  // node_modules/@sentry/utils/esm/promisebuffer.js
  function makePromiseBuffer(limit) {
    const buffer = [];
    function isReady() {
      return limit === void 0 || buffer.length < limit;
    }
    function remove(task) {
      return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    function add(taskProducer) {
      if (!isReady()) {
        return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
      }
      const task = taskProducer();
      if (buffer.indexOf(task) === -1) {
        buffer.push(task);
      }
      void task.then(() => remove(task)).then(
        null,
        () => remove(task).then(null, () => {
        })
      );
      return task;
    }
    function drain(timeout) {
      return new SyncPromise((resolve, reject) => {
        let counter = buffer.length;
        if (!counter) {
          return resolve(true);
        }
        const capturedSetTimeout = setTimeout(() => {
          if (timeout && timeout > 0) {
            resolve(false);
          }
        }, timeout);
        buffer.forEach((item) => {
          void resolvedSyncPromise(item).then(() => {
            if (!--counter) {
              clearTimeout(capturedSetTimeout);
              resolve(true);
            }
          }, reject);
        });
      });
    }
    return {
      $: buffer,
      add,
      drain
    };
  }

  // node_modules/@sentry/utils/esm/url.js
  function parseUrl(url) {
    if (!url) {
      return {};
    }
    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
      return {};
    }
    const query = match[6] || "";
    const fragment = match[8] || "";
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      relative: match[5] + query + fragment
    };
  }

  // node_modules/@sentry/utils/esm/severity.js
  var validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
  function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
  }

  // node_modules/@sentry/utils/esm/time.js
  var WINDOW4 = getGlobalObject();
  var dateTimestampSource = {
    nowSeconds: () => Date.now() / 1e3
  };
  function getBrowserPerformance() {
    const { performance: performance2 } = WINDOW4;
    if (!performance2 || !performance2.now) {
      return void 0;
    }
    const timeOrigin = Date.now() - performance2.now();
    return {
      now: () => performance2.now(),
      timeOrigin
    };
  }
  function getNodePerformance() {
    try {
      const perfHooks = dynamicRequire(module, "perf_hooks");
      return perfHooks.performance;
    } catch (_) {
      return void 0;
    }
  }
  var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
  var timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
    nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
  };
  var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
  var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
  var timestampWithMs = timestampInSeconds;
  var _browserPerformanceTimeOriginMode;
  var browserPerformanceTimeOrigin = (() => {
    const { performance: performance2 } = WINDOW4;
    if (!performance2 || !performance2.now) {
      _browserPerformanceTimeOriginMode = "none";
      return void 0;
    }
    const threshold = 3600 * 1e3;
    const performanceNow = performance2.now();
    const dateNow = Date.now();
    const timeOriginDelta = performance2.timeOrigin ? Math.abs(performance2.timeOrigin + performanceNow - dateNow) : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;
    const navigationStart = performance2.timing && performance2.timing.navigationStart;
    const hasNavigationStart = typeof navigationStart === "number";
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
      if (timeOriginDelta <= navigationStartDelta) {
        _browserPerformanceTimeOriginMode = "timeOrigin";
        return performance2.timeOrigin;
      } else {
        _browserPerformanceTimeOriginMode = "navigationStart";
        return navigationStart;
      }
    }
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
  })();

  // node_modules/@sentry/utils/esm/tracing.js
  var TRACEPARENT_REGEXP = new RegExp(
    "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  );
  function extractTraceparentData(traceparent) {
    const matches = traceparent.match(TRACEPARENT_REGEXP);
    if (!traceparent || !matches) {
      return void 0;
    }
    let parentSampled;
    if (matches[3] === "1") {
      parentSampled = true;
    } else if (matches[3] === "0") {
      parentSampled = false;
    }
    return {
      traceId: matches[1],
      parentSampled,
      parentSpanId: matches[2]
    };
  }

  // node_modules/@sentry/utils/esm/envelope.js
  function createEnvelope(headers, items = []) {
    return [headers, items];
  }
  function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [headers, [...items, newItem]];
  }
  function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    envelopeItems.forEach((envelopeItem) => {
      const envelopeItemType = envelopeItem[0].type;
      callback(envelopeItem, envelopeItemType);
    });
  }
  function encodeUTF8(input, textEncoder) {
    const utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
  }
  function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    let parts = JSON.stringify(envHeaders);
    function append(next) {
      if (typeof parts === "string") {
        parts = typeof next === "string" ? parts + next : [encodeUTF8(parts, textEncoder), next];
      } else {
        parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
      }
    }
    for (const item of items) {
      const [itemHeaders, payload] = item;
      append(`
${JSON.stringify(itemHeaders)}
`);
      if (typeof payload === "string" || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e2) {
          stringifiedPayload = JSON.stringify(normalize(payload));
        }
        append(stringifiedPayload);
      }
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
  }
  function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      merged.set(buffer, offset);
      offset += buffer.length;
    }
    return merged;
  }
  function createAttachmentEnvelopeItem(attachment, textEncoder) {
    const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
      dropUndefinedKeys({
        type: "attachment",
        length: buffer.length,
        filename: attachment.filename,
        content_type: attachment.contentType,
        attachment_type: attachment.attachmentType
      }),
      buffer
    ];
  }
  var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay"
  };
  function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
  }
  function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent || !metadataOrEvent.sdk) {
      return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return { name, version };
  }
  function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: event.event_id,
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) },
      ...event.type === "transaction" && dynamicSamplingContext && {
        trace: dropUndefinedKeys({ ...dynamicSamplingContext })
      }
    };
  }

  // node_modules/@sentry/utils/esm/clientreport.js
  function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    const clientReportItem = [
      { type: "client_report" },
      {
        timestamp: timestamp || dateTimestampInSeconds(),
        discarded_events
      }
    ];
    return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
  }

  // node_modules/@sentry/utils/esm/ratelimit.js
  var DEFAULT_RETRY_AFTER = 60 * 1e3;
  function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
      return headerDelay * 1e3;
    }
    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
      return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
  }
  function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
  }
  function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
  }
  function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
    const updatedRateLimits = {
      ...limits
    };
    const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    const retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) {
      for (const limit of rateLimitHeader.trim().split(",")) {
        const [retryAfter, categories] = limit.split(":", 2);
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          for (const category of categories.split(";")) {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    } else if (retryAfterHeader) {
      updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
      updatedRateLimits.all = now + 60 * 1e3;
    }
    return updatedRateLimits;
  }

  // node_modules/@sentry/utils/esm/baggage.js
  var BAGGAGE_HEADER_NAME = "baggage";
  var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
  var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
  var MAX_BAGGAGE_STRING_LENGTH = 8192;
  function baggageHeaderToDynamicSamplingContext(baggageHeader) {
    if (!isString(baggageHeader) && !Array.isArray(baggageHeader)) {
      return void 0;
    }
    let baggageObject = {};
    if (Array.isArray(baggageHeader)) {
      baggageObject = baggageHeader.reduce((acc, curr) => {
        const currBaggageObject = baggageHeaderToObject(curr);
        return {
          ...acc,
          ...currBaggageObject
        };
      }, {});
    } else {
      if (!baggageHeader) {
        return void 0;
      }
      baggageObject = baggageHeaderToObject(baggageHeader);
    }
    const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
      if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
        const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
        acc[nonPrefixedKey] = value;
      }
      return acc;
    }, {});
    if (Object.keys(dynamicSamplingContext).length > 0) {
      return dynamicSamplingContext;
    } else {
      return void 0;
    }
  }
  function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
    const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
      (acc, [dscKey, dscValue]) => {
        if (dscValue) {
          acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
        }
        return acc;
      },
      {}
    );
    return objectToBaggageHeader(sentryPrefixedDSC);
  }
  function baggageHeaderToObject(baggageHeader) {
    return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }
  function objectToBaggageHeader(object) {
    if (Object.keys(object).length === 0) {
      return void 0;
    }
    return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
      const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
      const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
      if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
        );
        return baggageHeader;
      } else {
        return newBaggageHeader;
      }
    }, "");
  }

  // node_modules/@sentry/core/esm/session.js
  function makeSession(context) {
    const startingTime = timestampInSeconds();
    const session = {
      sid: uuid4(),
      init: true,
      timestamp: startingTime,
      started: startingTime,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: false,
      toJSON: () => sessionToJSON(session)
    };
    if (context) {
      updateSession(session, context);
    }
    return session;
  }
  function updateSession(session, context = {}) {
    if (context.user) {
      if (!session.ipAddress && context.user.ip_address) {
        session.ipAddress = context.user.ip_address;
      }
      if (!session.did && !context.did) {
        session.did = context.user.id || context.user.email || context.user.username;
      }
    }
    session.timestamp = context.timestamp || timestampInSeconds();
    if (context.ignoreDuration) {
      session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
      session.sid = context.sid.length === 32 ? context.sid : uuid4();
    }
    if (context.init !== void 0) {
      session.init = context.init;
    }
    if (!session.did && context.did) {
      session.did = `${context.did}`;
    }
    if (typeof context.started === "number") {
      session.started = context.started;
    }
    if (session.ignoreDuration) {
      session.duration = void 0;
    } else if (typeof context.duration === "number") {
      session.duration = context.duration;
    } else {
      const duration = session.timestamp - session.started;
      session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
      session.release = context.release;
    }
    if (context.environment) {
      session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
      session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
      session.userAgent = context.userAgent;
    }
    if (typeof context.errors === "number") {
      session.errors = context.errors;
    }
    if (context.status) {
      session.status = context.status;
    }
  }
  function closeSession(session, status) {
    let context = {};
    if (status) {
      context = { status };
    } else if (session.status === "ok") {
      context = { status: "exited" };
    }
    updateSession(session, context);
  }
  function sessionToJSON(session) {
    return dropUndefinedKeys({
      sid: `${session.sid}`,
      init: session.init,
      started: new Date(session.started * 1e3).toISOString(),
      timestamp: new Date(session.timestamp * 1e3).toISOString(),
      status: session.status,
      errors: session.errors,
      did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
      duration: session.duration,
      attrs: {
        release: session.release,
        environment: session.environment,
        ip_address: session.ipAddress,
        user_agent: session.userAgent
      }
    });
  }

  // node_modules/@sentry/core/esm/scope.js
  var DEFAULT_MAX_BREADCRUMBS = 100;
  var Scope = class {
    constructor() {
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
    }
    static clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = [...scope._breadcrumbs];
        newScope._tags = { ...scope._tags };
        newScope._extra = { ...scope._extra };
        newScope._contexts = { ...scope._contexts };
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = [...scope._eventProcessors];
        newScope._requestSession = scope._requestSession;
        newScope._attachments = [...scope._attachments];
        newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
      }
      return newScope;
    }
    addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }
    addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }
    setUser(user) {
      this._user = user || {};
      if (this._session) {
        updateSession(this._session, { user });
      }
      this._notifyScopeListeners();
      return this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }
    setTags(tags) {
      this._tags = {
        ...this._tags,
        ...tags
      };
      this._notifyScopeListeners();
      return this;
    }
    setTag(key, value) {
      this._tags = { ...this._tags, [key]: value };
      this._notifyScopeListeners();
      return this;
    }
    setExtras(extras) {
      this._extra = {
        ...this._extra,
        ...extras
      };
      this._notifyScopeListeners();
      return this;
    }
    setExtra(key, extra) {
      this._extra = { ...this._extra, [key]: extra };
      this._notifyScopeListeners();
      return this;
    }
    setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }
    setLevel(level) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }
    setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
      this._notifyScopeListeners();
      return this;
    }
    setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const span = this.getSpan();
      return span && span.transaction;
    }
    setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }
    getSession() {
      return this._session;
    }
    update(captureContext) {
      if (!captureContext) {
        return this;
      }
      if (typeof captureContext === "function") {
        const updatedScope = captureContext(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }
      if (captureContext instanceof Scope) {
        this._tags = { ...this._tags, ...captureContext._tags };
        this._extra = { ...this._extra, ...captureContext._extra };
        this._contexts = { ...this._contexts, ...captureContext._contexts };
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
      } else if (isPlainObject(captureContext)) {
        captureContext = captureContext;
        this._tags = { ...this._tags, ...captureContext.tags };
        this._extra = { ...this._extra, ...captureContext.extra };
        this._contexts = { ...this._contexts, ...captureContext.contexts };
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
      }
      return this;
    }
    clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = void 0;
      this._transactionName = void 0;
      this._fingerprint = void 0;
      this._requestSession = void 0;
      this._span = void 0;
      this._session = void 0;
      this._notifyScopeListeners();
      this._attachments = [];
      return this;
    }
    addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
      if (maxCrumbs <= 0) {
        return this;
      }
      const mergedBreadcrumb = {
        timestamp: dateTimestampInSeconds(),
        ...breadcrumb
      };
      this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
      this._notifyScopeListeners();
      return this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }
    addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      this._attachments = [];
      return this;
    }
    applyToEvent(event, hint = {}) {
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = { ...this._extra, ...event.extra };
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = { ...this._tags, ...event.tags };
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = { ...this._user, ...event.user };
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = { ...this._contexts, ...event.contexts };
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }
      if (this._span) {
        event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
        const transactionName = this._span.transaction && this._span.transaction.name;
        if (transactionName) {
          event.tags = { transaction: transactionName, ...event.tags };
        }
      }
      this._applyFingerprint(event);
      event.breadcrumbs = [...event.breadcrumbs || [], ...this._breadcrumbs];
      event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : void 0;
      event.sdkProcessingMetadata = { ...event.sdkProcessingMetadata, ...this._sdkProcessingMetadata };
      return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
    }
    setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
      return this;
    }
    _notifyEventProcessors(processors, event, hint, index = 0) {
      return new SyncPromise((resolve, reject) => {
        const processor = processors[index];
        if (event === null || typeof processor !== "function") {
          resolve(event);
        } else {
          const result = processor({ ...event }, hint);
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
          if (isThenable(result)) {
            void result.then((final) => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
          } else {
            void this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
          }
        }
      });
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach((callback) => {
          callback(this);
        });
        this._notifyingListeners = false;
      }
    }
    _applyFingerprint(event) {
      event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  };
  function getGlobalEventProcessors() {
    return getGlobalSingleton("globalEventProcessors", () => []);
  }
  function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
  }

  // node_modules/@sentry/core/esm/hub.js
  var API_VERSION = 4;
  var DEFAULT_BREADCRUMBS = 100;
  var Hub = class {
    __init() {
      this._stack = [{}];
    }
    constructor(client, scope = new Scope(), _version = API_VERSION) {
      this._version = _version;
      Hub.prototype.__init.call(this);
      this.getStackTop().scope = scope;
      if (client) {
        this.bindClient(client);
      }
    }
    isOlderThan(version) {
      return this._version < version;
    }
    bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }
    pushScope() {
      const scope = Scope.clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope
      });
      return scope;
    }
    popScope() {
      if (this.getStack().length <= 1)
        return false;
      return !!this.getStack().pop();
    }
    withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(exception, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error("Sentry syntheticException");
      this._withClient((client, scope) => {
        client.captureException(
          exception,
          {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureMessage(message, level, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error(message);
      this._withClient((client, scope) => {
        client.captureMessage(
          message,
          level,
          {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : uuid4();
      if (!event.type) {
        this._lastEventId = eventId;
      }
      this._withClient((client, scope) => {
        client.captureEvent(event, { ...hint, event_id: eventId }, scope);
      });
      return eventId;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(breadcrumb, hint) {
      const { scope, client } = this.getStackTop();
      if (!scope || !client)
        return;
      const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
      if (maxBreadcrumbs <= 0)
        return;
      const timestamp = dateTimestampInSeconds();
      const mergedBreadcrumb = { timestamp, ...breadcrumb };
      const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
      if (finalBreadcrumb === null)
        return;
      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    setUser(user) {
      const scope = this.getScope();
      if (scope)
        scope.setUser(user);
    }
    setTags(tags) {
      const scope = this.getScope();
      if (scope)
        scope.setTags(tags);
    }
    setExtras(extras) {
      const scope = this.getScope();
      if (scope)
        scope.setExtras(extras);
    }
    setTag(key, value) {
      const scope = this.getScope();
      if (scope)
        scope.setTag(key, value);
    }
    setExtra(key, extra) {
      const scope = this.getScope();
      if (scope)
        scope.setExtra(key, extra);
    }
    setContext(name, context) {
      const scope = this.getScope();
      if (scope)
        scope.setContext(name, context);
    }
    configureScope(callback) {
      const { scope, client } = this.getStackTop();
      if (scope && client) {
        callback(scope);
      }
    }
    run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }
    getIntegration(integration) {
      const client = this.getClient();
      if (!client)
        return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }
    startTransaction(context, customSamplingContext) {
      return this._callExtensionMethod("startTransaction", context, customSamplingContext);
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(endSession = false) {
      if (endSession) {
        return this.endSession();
      }
      this._sendSessionUpdate();
    }
    endSession() {
      const layer = this.getStackTop();
      const scope = layer && layer.scope;
      const session = scope && scope.getSession();
      if (session) {
        closeSession(session);
      }
      this._sendSessionUpdate();
      if (scope) {
        scope.setSession();
      }
    }
    startSession(context) {
      const { scope, client } = this.getStackTop();
      const { release, environment } = client && client.getOptions() || {};
      const { userAgent } = GLOBAL_OBJ.navigator || {};
      const session = makeSession({
        release,
        environment,
        ...scope && { user: scope.getUser() },
        ...userAgent && { userAgent },
        ...context
      });
      if (scope) {
        const currentSession = scope.getSession && scope.getSession();
        if (currentSession && currentSession.status === "ok") {
          updateSession(currentSession, { status: "exited" });
        }
        this.endSession();
        scope.setSession(session);
      }
      return session;
    }
    shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope, client } = this.getStackTop();
      if (!scope)
        return;
      const session = scope.getSession();
      if (session) {
        if (client && client.captureSession) {
          client.captureSession(session);
        }
      }
    }
    _withClient(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(client, scope);
      }
    }
    _callExtensionMethod(method, ...args) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  };
  function getMainCarrier() {
    GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    };
    return GLOBAL_OBJ;
  }
  function makeMain(hub) {
    const registry = getMainCarrier();
    const oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
  }
  function getCurrentHub() {
    const registry = getMainCarrier();
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
      setHubOnCarrier(registry, new Hub());
    }
    if (isNodeEnv()) {
      return getHubFromActiveDomain(registry);
    }
    return getHubFromCarrier(registry);
  }
  function getHubFromActiveDomain(registry) {
    try {
      const sentry = getMainCarrier().__SENTRY__;
      const activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
      if (!activeDomain) {
        return getHubFromCarrier(registry);
      }
      if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
        const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
        setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
      }
      return getHubFromCarrier(activeDomain);
    } catch (_Oo) {
      return getHubFromCarrier(registry);
    }
  }
  function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
  }
  function getHubFromCarrier(carrier) {
    return getGlobalSingleton("hub", () => new Hub(), carrier);
  }
  function setHubOnCarrier(carrier, hub) {
    if (!carrier)
      return false;
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
  }

  // node_modules/@sentry/core/esm/exports.js
  function captureException(exception, captureContext) {
    return getCurrentHub().captureException(exception, { captureContext });
  }
  function captureMessage(message, captureContext) {
    const level = typeof captureContext === "string" ? captureContext : void 0;
    const context = typeof captureContext !== "string" ? { captureContext } : void 0;
    return getCurrentHub().captureMessage(message, level, context);
  }
  function withScope(callback) {
    getCurrentHub().withScope(callback);
  }

  // node_modules/@sentry/core/esm/api.js
  var SENTRY_API_VERSION = "7";
  function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    const port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
  }
  function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
  }
  function _encodedAuth(dsn, sdkInfo) {
    return urlEncode({
      sentry_key: dsn.publicKey,
      sentry_version: SENTRY_API_VERSION,
      ...sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }
    });
  }
  function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
    const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
    const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
  }

  // node_modules/@sentry/core/esm/envelope.js
  function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
      return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
    event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
    return event;
  }
  function createSessionEnvelope(session, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const envelopeHeaders = {
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) }
    };
    const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session];
    return createEnvelope(envelopeHeaders, [envelopeItem]);
  }
  function createEventEnvelope(event, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    delete event.sdkProcessingMetadata;
    const eventItem = [{ type: eventType }, event];
    return createEnvelope(envelopeHeaders, [eventItem]);
  }

  // node_modules/@sentry/core/esm/integration.js
  var installedIntegrations = [];
  function filterDuplicates(integrations) {
    const integrationsByName = {};
    integrations.forEach((currentInstance) => {
      const { name } = currentInstance;
      const existingInstance = integrationsByName[name];
      if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
        return;
      }
      integrationsByName[name] = currentInstance;
    });
    return Object.values(integrationsByName);
  }
  function getIntegrationsToSetup(options) {
    const defaultIntegrations2 = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;
    defaultIntegrations2.forEach((integration) => {
      integration.isDefaultInstance = true;
    });
    let integrations;
    if (Array.isArray(userIntegrations)) {
      integrations = [...defaultIntegrations2, ...userIntegrations];
    } else if (typeof userIntegrations === "function") {
      integrations = arrayify(userIntegrations(defaultIntegrations2));
    } else {
      integrations = defaultIntegrations2;
    }
    const finalIntegrations = filterDuplicates(integrations);
    const debugIndex = finalIntegrations.findIndex((integration) => integration.name === "Debug");
    if (debugIndex !== -1) {
      const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
      finalIntegrations.push(debugInstance);
    }
    return finalIntegrations;
  }
  function setupIntegrations(integrations) {
    const integrationIndex = {};
    integrations.forEach((integration) => {
      if (integration) {
        setupIntegration(integration, integrationIndex);
      }
    });
    return integrationIndex;
  }
  function setupIntegration(integration, integrationIndex) {
    integrationIndex[integration.name] = integration;
    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
      installedIntegrations.push(integration.name);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
    }
  }

  // node_modules/@sentry/core/esm/utils/prepareEvent.js
  function prepareEvent(options, event, hint, scope) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
    const prepared = {
      ...event,
      event_id: event.event_id || hint.event_id || uuid4(),
      timestamp: event.timestamp || dateTimestampInSeconds()
    };
    const integrations = hint.integrations || options.integrations.map((i3) => i3.name);
    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(prepared, integrations);
    let finalScope = scope;
    if (hint.captureContext) {
      finalScope = Scope.clone(finalScope).update(hint.captureContext);
    }
    let result = resolvedSyncPromise(prepared);
    if (finalScope) {
      if (finalScope.getAttachments) {
        const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
        if (attachments.length) {
          hint.attachments = attachments;
        }
      }
      result = finalScope.applyToEvent(prepared, hint);
    }
    return result.then((evt) => {
      if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
        return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
      }
      return evt;
    });
  }
  function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;
    if (!("environment" in event)) {
      event.environment = "environment" in options ? environment : "production";
    }
    if (event.release === void 0 && release !== void 0) {
      event.release = release;
    }
    if (event.dist === void 0 && dist !== void 0) {
      event.dist = dist;
    }
    if (event.message) {
      event.message = truncate(event.message, maxValueLength);
    }
    const exception = event.exception && event.exception.values && event.exception.values[0];
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }
    const request = event.request;
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength);
    }
  }
  function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
      event.sdk = event.sdk || {};
      event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
    }
  }
  function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
      return null;
    }
    const normalized = {
      ...event,
      ...event.breadcrumbs && {
        breadcrumbs: event.breadcrumbs.map((b3) => ({
          ...b3,
          ...b3.data && {
            data: normalize(b3.data, depth, maxBreadth)
          }
        }))
      },
      ...event.user && {
        user: normalize(event.user, depth, maxBreadth)
      },
      ...event.contexts && {
        contexts: normalize(event.contexts, depth, maxBreadth)
      },
      ...event.extra && {
        extra: normalize(event.extra, depth, maxBreadth)
      }
    };
    if (event.contexts && event.contexts.trace && normalized.contexts) {
      normalized.contexts.trace = event.contexts.trace;
      if (event.contexts.trace.data) {
        normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
    }
    if (event.spans) {
      normalized.spans = event.spans.map((span) => {
        if (span.data) {
          span.data = normalize(span.data, depth, maxBreadth);
        }
        return span;
      });
    }
    return normalized;
  }

  // node_modules/@sentry/core/esm/baseclient.js
  var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
  var BaseClient = class {
    __init() {
      this._integrations = {};
    }
    __init2() {
      this._integrationsInitialized = false;
    }
    __init3() {
      this._numProcessing = 0;
    }
    __init4() {
      this._outcomes = {};
    }
    constructor(options) {
      BaseClient.prototype.__init.call(this);
      BaseClient.prototype.__init2.call(this);
      BaseClient.prototype.__init3.call(this);
      BaseClient.prototype.__init4.call(this);
      this._options = options;
      if (options.dsn) {
        this._dsn = makeDsn(options.dsn);
        const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
        this._transport = options.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...options.transportOptions,
          url
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("No DSN provided, client will not do anything.");
      }
    }
    captureException(exception, hint, scope) {
      if (checkOrSetAlreadyCaught(exception)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureMessage(message, level, hint, scope) {
      let eventId = hint && hint.event_id;
      const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
      this._process(
        promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureEvent(event, hint, scope) {
      if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this._captureEvent(event, hint, scope).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureSession(session) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture session.");
        return;
      }
      if (!(typeof session.release === "string")) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Discarded session because of missing or non-string release");
      } else {
        this.sendSession(session);
        updateSession(session, { init: false });
      }
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then((clientFinished) => {
          return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
        });
      } else {
        return resolvedSyncPromise(true);
      }
    }
    close(timeout) {
      return this.flush(timeout).then((result) => {
        this.getOptions().enabled = false;
        return result;
      });
    }
    setupIntegrations() {
      if (this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = setupIntegrations(this._options.integrations);
        this._integrationsInitialized = true;
      }
    }
    getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }
    getIntegration(integration) {
      try {
        return this._integrations[integration.id] || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }
    addIntegration(integration) {
      setupIntegration(integration, this._integrations);
    }
    sendEvent(event, hint = {}) {
      if (this._dsn) {
        let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
        for (const attachment of hint.attachments || []) {
          env = addItemToEnvelope(
            env,
            createAttachmentEnvelopeItem(
              attachment,
              this._options.transportOptions && this._options.transportOptions.textEncoder
            )
          );
        }
        this._sendEnvelope(env);
      }
    }
    sendSession(session) {
      if (this._dsn) {
        const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(env);
      }
    }
    recordDroppedEvent(reason, category, _event) {
      if (this._options.sendClientReports) {
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }
    _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;
      if (exceptions) {
        errored = true;
        for (const ex of exceptions) {
          const mechanism = ex.mechanism;
          if (mechanism && mechanism.handled === false) {
            crashed = true;
            break;
          }
        }
      }
      const sessionNonTerminal = session.status === "ok";
      const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
      if (shouldUpdateAndSend) {
        updateSession(session, {
          ...crashed && { status: "crashed" },
          errors: session.errors || Number(errored || crashed)
        });
        this.captureSession(session);
      }
    }
    _isClientDoneProcessing(timeout) {
      return new SyncPromise((resolve) => {
        let ticked = 0;
        const tick = 1;
        const interval = setInterval(() => {
          if (this._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== false && this._dsn !== void 0;
    }
    _prepareEvent(event, hint, scope) {
      const options = this.getOptions();
      const integrations = Object.keys(this._integrations);
      if (!hint.integrations && integrations.length > 0) {
        hint.integrations = integrations;
      }
      return prepareEvent(options, event, hint, scope);
    }
    _captureEvent(event, hint = {}, scope) {
      return this._processEvent(event, hint, scope).then(
        (finalEvent) => {
          return finalEvent.event_id;
        },
        (reason) => {
          if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
            const sentryError = reason;
            if (sentryError.logLevel === "log") {
              logger.log(sentryError.message);
            } else {
              logger.warn(sentryError);
            }
          }
          return void 0;
        }
      );
    }
    _processEvent(event, hint, scope) {
      const options = this.getOptions();
      const { sampleRate } = options;
      if (!this._isEnabled()) {
        return rejectedSyncPromise(new SentryError("SDK not enabled, will not capture event.", "log"));
      }
      const isTransaction = isTransactionEvent(event);
      const isError2 = isErrorEvent2(event);
      const eventType = event.type || "error";
      const beforeSendLabel = `before send for type \`${eventType}\``;
      if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
        this.recordDroppedEvent("sample_rate", "error", event);
        return rejectedSyncPromise(
          new SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
            "log"
          )
        );
      }
      const dataCategory = eventType === "replay_event" ? "replay" : eventType;
      return this._prepareEvent(event, hint, scope).then((prepared) => {
        if (prepared === null) {
          this.recordDroppedEvent("event_processor", dataCategory, event);
          throw new SentryError("An event processor returned `null`, will not send event.", "log");
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }
        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      }).then((processedEvent) => {
        if (processedEvent === null) {
          this.recordDroppedEvent("before_send", dataCategory, event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
        }
        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = "custom";
          processedEvent.transaction_info = {
            ...transactionInfo,
            source
          };
        }
        this.sendEvent(processedEvent, hint);
        return processedEvent;
      }).then(null, (reason) => {
        if (reason instanceof SentryError) {
          throw reason;
        }
        this.captureException(reason, {
          data: {
            __sentry__: true
          },
          originalException: reason
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
        );
      });
    }
    _process(promise) {
      this._numProcessing++;
      void promise.then(
        (value) => {
          this._numProcessing--;
          return value;
        },
        (reason) => {
          this._numProcessing--;
          return reason;
        }
      );
    }
    _sendEnvelope(envelope) {
      if (this._transport && this._dsn) {
        this._transport.send(envelope).then(null, (reason) => {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Error while sending event:", reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Transport disabled");
      }
    }
    _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map((key) => {
        const [reason, category] = key.split(":");
        return {
          reason,
          category,
          quantity: outcomes[key]
        };
      });
    }
  };
  function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if (isThenable(beforeSendResult)) {
      return beforeSendResult.then(
        (event) => {
          if (!isPlainObject(event) && event !== null) {
            throw new SentryError(invalidValueError);
          }
          return event;
        },
        (e2) => {
          throw new SentryError(`${beforeSendLabel} rejected with ${e2}`);
        }
      );
    } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
      throw new SentryError(invalidValueError);
    }
    return beforeSendResult;
  }
  function processBeforeSend(options, event, hint) {
    const { beforeSend, beforeSendTransaction } = options;
    if (isErrorEvent2(event) && beforeSend) {
      return beforeSend(event, hint);
    }
    if (isTransactionEvent(event) && beforeSendTransaction) {
      return beforeSendTransaction(event, hint);
    }
    return event;
  }
  function isErrorEvent2(event) {
    return event.type === void 0;
  }
  function isTransactionEvent(event) {
    return event.type === "transaction";
  }

  // node_modules/@sentry/core/esm/sdk.js
  function initAndBind(clientClass, options) {
    if (options.debug === true) {
      if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
        logger.enable();
      } else {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      }
    }
    const hub = getCurrentHub();
    const scope = hub.getScope();
    if (scope) {
      scope.update(options.initialScope);
    }
    const client = new clientClass(options);
    hub.bindClient(client);
  }

  // node_modules/@sentry/core/esm/transports/base.js
  var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
  function createTransport(options, makeRequest, buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
  )) {
    let rateLimits = {};
    const flush2 = (timeout) => buffer.drain(timeout);
    function send(envelope) {
      const filteredEnvelopeItems = [];
      forEachEnvelopeItem(envelope, (item, type) => {
        const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
        if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
        } else {
          filteredEnvelopeItems.push(item);
        }
      });
      if (filteredEnvelopeItems.length === 0) {
        return resolvedSyncPromise();
      }
      const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
      const recordEnvelopeLoss = (reason) => {
        forEachEnvelopeItem(filteredEnvelope, (item, type) => {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
        });
      };
      const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        (response) => {
          if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }
          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        (error) => {
          recordEnvelopeLoss("network_error");
          throw error;
        }
      );
      return buffer.add(requestTask).then(
        (result) => result,
        (error) => {
          if (error instanceof SentryError) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Skipped sending event because buffer is full.");
            recordEnvelopeLoss("queue_overflow");
            return resolvedSyncPromise();
          } else {
            throw error;
          }
        }
      );
    }
    return {
      send,
      flush: flush2
    };
  }
  function getEventForEnvelopeItem(item, type) {
    if (type !== "event" && type !== "transaction") {
      return void 0;
    }
    return Array.isArray(item) ? item[1] : void 0;
  }

  // node_modules/@sentry/core/esm/version.js
  var SDK_VERSION = "7.38.0";

  // node_modules/@sentry/core/esm/integrations/index.js
  var integrations_exports = {};
  __export(integrations_exports, {
    FunctionToString: () => FunctionToString,
    InboundFilters: () => InboundFilters
  });

  // node_modules/@sentry/core/esm/integrations/functiontostring.js
  var originalFunctionToString;
  var FunctionToString = class {
    constructor() {
      FunctionToString.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "FunctionToString";
    }
    __init() {
      this.name = FunctionToString.id;
    }
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      Function.prototype.toString = function(...args) {
        const context = getOriginalFunction(this) || this;
        return originalFunctionToString.apply(context, args);
      };
    }
  };
  FunctionToString.__initStatic();

  // node_modules/@sentry/core/esm/integrations/inboundfilters.js
  var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
  var InboundFilters = class {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    __init() {
      this.name = InboundFilters.id;
    }
    constructor(_options = {}) {
      this._options = _options;
      InboundFilters.prototype.__init.call(this);
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcess = (event) => {
        const hub = getCurrentHub2();
        if (hub) {
          const self2 = hub.getIntegration(InboundFilters);
          if (self2) {
            const client = hub.getClient();
            const clientOptions = client ? client.getOptions() : {};
            const options = _mergeOptions(self2._options, clientOptions);
            return _shouldDropEvent(event, options) ? null : event;
          }
        }
        return event;
      };
      eventProcess.id = this.name;
      addGlobalEventProcessor2(eventProcess);
    }
  };
  InboundFilters.__initStatic();
  function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
      allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
      denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
      ignoreErrors: [
        ...internalOptions.ignoreErrors || [],
        ...clientOptions.ignoreErrors || [],
        ...DEFAULT_IGNORE_ERRORS
      ],
      ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
    };
  }
  function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    return false;
  }
  function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) {
      return false;
    }
    return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
  }
  function _isDeniedUrl(event, denyUrls) {
    if (!denyUrls || !denyUrls.length) {
      return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : stringMatchesSomePattern(url, denyUrls);
  }
  function _isAllowedUrl(event, allowUrls) {
    if (!allowUrls || !allowUrls.length) {
      return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : stringMatchesSomePattern(url, allowUrls);
  }
  function _getPossibleEventMessages(event) {
    if (event.message) {
      return [event.message];
    }
    if (event.exception) {
      try {
        const { type = "", value = "" } = event.exception.values && event.exception.values[0] || {};
        return [`${value}`, `${type}: ${value}`];
      } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
        return [];
      }
    }
    return [];
  }
  function _isSentryError(event) {
    try {
      return event.exception.values[0].type === "SentryError";
    } catch (e2) {
    }
    return false;
  }
  function _getLastValidUrl(frames = []) {
    for (let i3 = frames.length - 1; i3 >= 0; i3--) {
      const frame = frames[i3];
      if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
        return frame.filename || null;
      }
    }
    return null;
  }
  function _getEventFilterUrl(event) {
    try {
      let frames;
      try {
        frames = event.exception.values[0].stacktrace.frames;
      } catch (e2) {
      }
      return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
      return null;
    }
  }

  // node_modules/@sentry/browser/esm/helpers.js
  var WINDOW5 = GLOBAL_OBJ;
  var ignoreOnError = 0;
  function shouldIgnoreOnError() {
    return ignoreOnError > 0;
  }
  function ignoreNextOnError() {
    ignoreOnError++;
    setTimeout(() => {
      ignoreOnError--;
    });
  }
  function wrap(fn, options = {}, before) {
    if (typeof fn !== "function") {
      return fn;
    }
    try {
      const wrapper = fn.__sentry_wrapped__;
      if (wrapper) {
        return wrapper;
      }
      if (getOriginalFunction(fn)) {
        return fn;
      }
    } catch (e2) {
      return fn;
    }
    const sentryWrapped = function() {
      const args = Array.prototype.slice.call(arguments);
      try {
        if (before && typeof before === "function") {
          before.apply(this, arguments);
        }
        const wrappedArguments = args.map((arg) => wrap(arg, options));
        return fn.apply(this, wrappedArguments);
      } catch (ex) {
        ignoreNextOnError();
        withScope((scope) => {
          scope.addEventProcessor((event) => {
            if (options.mechanism) {
              addExceptionTypeValue(event, void 0, void 0);
              addExceptionMechanism(event, options.mechanism);
            }
            event.extra = {
              ...event.extra,
              arguments: args
            };
            return event;
          });
          captureException(ex);
        });
        throw ex;
      }
    };
    try {
      for (const property in fn) {
        if (Object.prototype.hasOwnProperty.call(fn, property)) {
          sentryWrapped[property] = fn[property];
        }
      }
    } catch (_oO) {
    }
    markFunctionWrapped(sentryWrapped, fn);
    addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
    try {
      const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
      if (descriptor.configurable) {
        Object.defineProperty(sentryWrapped, "name", {
          get() {
            return fn.name;
          }
        });
      }
    } catch (_oO) {
    }
    return sentryWrapped;
  }

  // node_modules/@sentry/browser/esm/eventbuilder.js
  function exceptionFromError(stackParser, ex) {
    const frames = parseStackFrames(stackParser, ex);
    const exception = {
      type: ex && ex.name,
      value: extractMessage(ex)
    };
    if (frames.length) {
      exception.stacktrace = { frames };
    }
    if (exception.type === void 0 && exception.value === "") {
      exception.value = "Unrecoverable error caught";
    }
    return exception;
  }
  function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    const event = {
      exception: {
        values: [
          {
            type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
            value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${extractExceptionKeysForMessage(exception)}`
          }
        ]
      },
      extra: {
        __serialized__: normalizeToSize(exception, normalizeDepth)
      }
    };
    if (syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception.values[0].stacktrace = { frames };
      }
    }
    return event;
  }
  function eventFromError(stackParser, ex) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, ex)]
      }
    };
  }
  function parseStackFrames(stackParser, ex) {
    const stacktrace = ex.stacktrace || ex.stack || "";
    const popSize = getPopSize(ex);
    try {
      return stackParser(stacktrace, popSize);
    } catch (e2) {
    }
    return [];
  }
  var reactMinifiedRegexp = /Minified React error #\d+;/i;
  function getPopSize(ex) {
    if (ex) {
      if (typeof ex.framesToPop === "number") {
        return ex.framesToPop;
      }
      if (reactMinifiedRegexp.test(ex.message)) {
        return 1;
      }
    }
    return 0;
  }
  function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
      return "No error message";
    }
    if (message.error && typeof message.error.message === "string") {
      return message.error.message;
    }
    return message;
  }
  function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionMechanism(event);
    event.level = "error";
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if (isErrorEvent(exception) && exception.error) {
      const errorEvent = exception;
      return eventFromError(stackParser, errorEvent.error);
    }
    if (isDOMError(exception) || isDOMException(exception)) {
      const domException = exception;
      if ("stack" in exception) {
        event = eventFromError(stackParser, exception);
      } else {
        const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
        const message = domException.message ? `${name}: ${domException.message}` : name;
        event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
        addExceptionTypeValue(event, message);
      }
      if ("code" in domException) {
        event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
      }
      return event;
    }
    if (isError(exception)) {
      return eventFromError(stackParser, exception);
    }
    if (isPlainObject(exception) || isEvent(exception)) {
      const objectException = exception;
      event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
      addExceptionMechanism(event, {
        synthetic: true
      });
      return event;
    }
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionTypeValue(event, `${exception}`, void 0);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    const event = {
      message: input
    };
    if (attachStacktrace && syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception = {
          values: [{ value: input, stacktrace: { frames } }]
        };
      }
    }
    return event;
  }

  // node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
  var MAX_ALLOWED_STRING_LENGTH = 1024;
  var BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
  var Breadcrumbs = class {
    static __initStatic() {
      this.id = BREADCRUMB_INTEGRATION_ID;
    }
    __init() {
      this.name = Breadcrumbs.id;
    }
    constructor(options) {
      Breadcrumbs.prototype.__init.call(this);
      this.options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options
      };
    }
    setupOnce() {
      if (this.options.console) {
        addInstrumentationHandler("console", _consoleBreadcrumb);
      }
      if (this.options.dom) {
        addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        addInstrumentationHandler("xhr", _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        addInstrumentationHandler("fetch", _fetchBreadcrumb);
      }
      if (this.options.history) {
        addInstrumentationHandler("history", _historyBreadcrumb);
      }
    }
    addSentryBreadcrumb(event) {
      if (this.options.sentry) {
        getCurrentHub().addBreadcrumb(
          {
            category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
            event_id: event.event_id,
            level: event.level,
            message: getEventDescription(event)
          },
          {
            event
          }
        );
      }
    }
  };
  Breadcrumbs.__initStatic();
  function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
      let target;
      let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
      let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
      if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
        );
        maxStringLength = MAX_ALLOWED_STRING_LENGTH;
      }
      if (typeof keyAttrs === "string") {
        keyAttrs = [keyAttrs];
      }
      try {
        target = handlerData.event.target ? htmlTreeAsString(handlerData.event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(handlerData.event, { keyAttrs, maxStringLength });
      } catch (e2) {
        target = "<unknown>";
      }
      if (target.length === 0) {
        return;
      }
      getCurrentHub().addBreadcrumb(
        {
          category: `ui.${handlerData.name}`,
          message: target
        },
        {
          event: handlerData.event,
          name: handlerData.name,
          global: handlerData.global
        }
      );
    }
    return _innerDomBreadcrumb;
  }
  function _consoleBreadcrumb(handlerData) {
    for (let i3 = 0; i3 < handlerData.args.length; i3++) {
      if (handlerData.args[i3] === "ref=Ref<") {
        handlerData.args[i3 + 1] = "viewRef";
        break;
      }
    }
    const breadcrumb = {
      category: "console",
      data: {
        arguments: handlerData.args,
        logger: "console"
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        return;
      }
    }
    getCurrentHub().addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level
    });
  }
  function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
      if (handlerData.xhr.__sentry_own_request__) {
        return;
      }
      const { method, url, status_code, body: body2 } = handlerData.xhr.__sentry_xhr__ || {};
      getCurrentHub().addBreadcrumb(
        {
          category: "xhr",
          data: {
            method,
            url,
            status_code
          },
          type: "http"
        },
        {
          xhr: handlerData.xhr,
          input: body2
        }
      );
      return;
    }
  }
  function _fetchBreadcrumb(handlerData) {
    if (!handlerData.endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    if (handlerData.error) {
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data: handlerData.fetchData,
          level: "error",
          type: "http"
        },
        {
          data: handlerData.error,
          input: handlerData.args
        }
      );
    } else {
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data: {
            ...handlerData.fetchData,
            status_code: handlerData.response.status
          },
          type: "http"
        },
        {
          input: handlerData.args,
          response: handlerData.response
        }
      );
    }
  }
  function _historyBreadcrumb(handlerData) {
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW5.location.href);
    let parsedFrom = parseUrl(from);
    const parsedTo = parseUrl(to);
    if (!parsedFrom.path) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }
    getCurrentHub().addBreadcrumb({
      category: "navigation",
      data: {
        from,
        to
      }
    });
  }

  // node_modules/@sentry/browser/esm/client.js
  var BrowserClient = class extends BaseClient {
    constructor(options) {
      const sdkSource = WINDOW5.SENTRY_SDK_SOURCE || getSDKSource();
      options._metadata = options._metadata || {};
      options._metadata.sdk = options._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [
          {
            name: `${sdkSource}:@sentry/browser`,
            version: SDK_VERSION
          }
        ],
        version: SDK_VERSION
      };
      super(options);
      if (options.sendClientReports && WINDOW5.document) {
        WINDOW5.document.addEventListener("visibilitychange", () => {
          if (WINDOW5.document.visibilityState === "hidden") {
            this._flushOutcomes();
          }
        });
      }
    }
    eventFromException(exception, hint) {
      return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    eventFromMessage(message, level = "info", hint) {
      return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    sendEvent(event, hint) {
      const breadcrumbIntegration = this.getIntegrationById(BREADCRUMB_INTEGRATION_ID);
      if (breadcrumbIntegration && breadcrumbIntegration.addSentryBreadcrumb) {
        breadcrumbIntegration.addSentryBreadcrumb(event);
      }
      super.sendEvent(event, hint);
    }
    _prepareEvent(event, hint, scope) {
      event.platform = event.platform || "javascript";
      return super._prepareEvent(event, hint, scope);
    }
    _flushOutcomes() {
      const outcomes = this._clearOutcomes();
      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No dsn provided, will not send outcomes");
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Sending outcomes:", outcomes);
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, this._options);
      const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
      try {
        const isRealNavigator = Object.prototype.toString.call(WINDOW5 && WINDOW5.navigator) === "[object Navigator]";
        const hasSendBeacon = isRealNavigator && typeof WINDOW5.navigator.sendBeacon === "function";
        if (hasSendBeacon && !this._options.transportOptions) {
          const sendBeacon = WINDOW5.navigator.sendBeacon.bind(WINDOW5.navigator);
          sendBeacon(url, serializeEnvelope(envelope));
        } else {
          this._sendEnvelope(envelope);
        }
      } catch (e2) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(e2);
      }
    }
  };

  // node_modules/@sentry/browser/esm/transports/utils.js
  var cachedFetchImpl = void 0;
  function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
      return cachedFetchImpl;
    }
    if (isNativeFetch(WINDOW5.fetch)) {
      return cachedFetchImpl = WINDOW5.fetch.bind(WINDOW5);
    }
    const document2 = WINDOW5.document;
    let fetchImpl = WINDOW5.fetch;
    if (document2 && typeof document2.createElement === "function") {
      try {
        const sandbox = document2.createElement("iframe");
        sandbox.hidden = true;
        document2.head.appendChild(sandbox);
        const contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) {
          fetchImpl = contentWindow.fetch;
        }
        document2.head.removeChild(sandbox);
      } catch (e2) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e2);
      }
    }
    return cachedFetchImpl = fetchImpl.bind(WINDOW5);
  }
  function clearCachedFetchImplementation() {
    cachedFetchImpl = void 0;
  }

  // node_modules/@sentry/browser/esm/transports/fetch.js
  function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
    function makeRequest(request) {
      const requestOptions = {
        body: request.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: options.headers,
        keepalive: request.body.length <= 65536,
        ...options.fetchOptions
      };
      try {
        return nativeFetch(options.url, requestOptions).then((response) => ({
          statusCode: response.status,
          headers: {
            "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": response.headers.get("Retry-After")
          }
        }));
      } catch (e2) {
        clearCachedFetchImplementation();
        return rejectedSyncPromise(e2);
      }
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/transports/xhr.js
  var XHR_READYSTATE_DONE = 4;
  function makeXHRTransport(options) {
    function makeRequest(request) {
      return new SyncPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XHR_READYSTATE_DONE) {
            resolve({
              statusCode: xhr.status,
              headers: {
                "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                "retry-after": xhr.getResponseHeader("Retry-After")
              }
            });
          }
        };
        xhr.open("POST", options.url);
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
        xhr.send(request.body);
      });
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/stack-parsers.js
  var UNKNOWN_FUNCTION = "?";
  var CHROME_PRIORITY = 30;
  var WINJS_PRIORITY = 40;
  var GECKO_PRIORITY = 50;
  function createFrame(filename, func, lineno, colno) {
    const frame = {
      filename,
      abs_path: filename,
      function: func,
      in_app: true
    };
    if (lineno !== void 0) {
      frame.lineno = lineno;
    }
    if (colno !== void 0) {
      frame.colno = colno;
    }
    return frame;
  }
  var chromeRegex = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var chrome2 = (line) => {
    const parts = chromeRegex.exec(line);
    if (parts) {
      const isEval = parts[2] && parts[2].indexOf("eval") === 0;
      if (isEval) {
        const subMatch = chromeEvalRegex.exec(parts[2]);
        if (subMatch) {
          parts[2] = subMatch[1];
          parts[3] = subMatch[2];
          parts[4] = subMatch[3];
        }
      }
      const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
      return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
    }
    return;
  };
  var chromeStackLineParser = [CHROME_PRIORITY, chrome2];
  var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var gecko = (line) => {
    const parts = geckoREgex.exec(line);
    if (parts) {
      const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
      if (isEval) {
        const subMatch = geckoEvalRegex.exec(parts[3]);
        if (subMatch) {
          parts[1] = parts[1] || "eval";
          parts[3] = subMatch[1];
          parts[4] = subMatch[2];
          parts[5] = "";
        }
      }
      let filename = parts[3];
      let func = parts[1] || UNKNOWN_FUNCTION;
      [func, filename] = extractSafariExtensionDetails(func, filename);
      return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
    }
    return;
  };
  var geckoStackLineParser = [GECKO_PRIORITY, gecko];
  var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var winjs = (line) => {
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
  };
  var winjsStackLineParser = [WINJS_PRIORITY, winjs];
  var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
  var defaultStackParser = createStackParser(...defaultStackLineParsers);
  var extractSafariExtensionDetails = (func, filename) => {
    const isSafariExtension = func.indexOf("safari-extension") !== -1;
    const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
      func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
      isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [func, filename];
  };

  // node_modules/@sentry/browser/esm/integrations/globalhandlers.js
  var GlobalHandlers = class {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = GlobalHandlers.id;
    }
    __init2() {
      this._installFunc = {
        onerror: _installGlobalOnErrorHandler,
        onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
      };
    }
    constructor(options) {
      GlobalHandlers.prototype.__init.call(this);
      GlobalHandlers.prototype.__init2.call(this);
      this._options = {
        onerror: true,
        onunhandledrejection: true,
        ...options
      };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;
      for (const key in options) {
        const installFunc = this._installFunc[key];
        if (installFunc && options[key]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key] = void 0;
        }
      }
    }
  };
  GlobalHandlers.__initStatic();
  function _installGlobalOnErrorHandler() {
    addInstrumentationHandler(
      "error",
      (data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url, line, column, error } = data;
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return;
        }
        const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
          eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
          url,
          line,
          column
        );
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
      }
    );
  }
  function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler(
      "unhandledrejection",
      (e2) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        let error = e2;
        try {
          if ("reason" in e2) {
            error = e2.reason;
          } else if ("detail" in e2 && "reason" in e2.detail) {
            error = e2.detail.reason;
          }
        } catch (_oO) {
        }
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return true;
        }
        const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
      }
    );
  }
  function _eventFromRejectionWithPrimitive(reason) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(reason)}`
          }
        ]
      }
    };
  }
  function _eventFromIncompleteOnError(msg, url, line, column) {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    let message = isErrorEvent(msg) ? msg.message : msg;
    let name = "Error";
    const groups = message.match(ERROR_TYPES_RE);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }
    const event = {
      exception: {
        values: [
          {
            type: name,
            value: message
          }
        ]
      }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
  }
  function _enhanceEventWithInitialFrame(event, url, line, column) {
    const e2 = event.exception = event.exception || {};
    const ev = e2.values = e2.values || [];
    const ev0 = ev[0] = ev[0] || {};
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
    const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();
    if (ev0sf.length === 0) {
      ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
      });
    }
    return event;
  }
  function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
  }
  function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
      handled: false,
      type
    });
    hub.captureEvent(event, {
      originalException: error
    });
  }
  function getHubAndOptions() {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const options = client && client.getOptions() || {
      stackParser: () => [],
      attachStacktrace: false
    };
    return [hub, options.stackParser, options.attachStacktrace];
  }

  // node_modules/@sentry/browser/esm/integrations/trycatch.js
  var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
  ];
  var TryCatch = class {
    static __initStatic() {
      this.id = "TryCatch";
    }
    __init() {
      this.name = TryCatch.id;
    }
    constructor(options) {
      TryCatch.prototype.__init.call(this);
      this._options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options
      };
    }
    setupOnce() {
      if (this._options.setTimeout) {
        fill(WINDOW5, "setTimeout", _wrapTimeFunction);
      }
      if (this._options.setInterval) {
        fill(WINDOW5, "setInterval", _wrapTimeFunction);
      }
      if (this._options.requestAnimationFrame) {
        fill(WINDOW5, "requestAnimationFrame", _wrapRAF);
      }
      if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW5) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  };
  TryCatch.__initStatic();
  function _wrapTimeFunction(original) {
    return function(...args) {
      const originalCallback = args[0];
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: true,
          type: "instrument"
        }
      });
      return original.apply(this, args);
    };
  }
  function _wrapRAF(original) {
    return function(callback) {
      return original.apply(this, [
        wrap(callback, {
          mechanism: {
            data: {
              function: "requestAnimationFrame",
              handler: getFunctionName(original)
            },
            handled: true,
            type: "instrument"
          }
        })
      ]);
    };
  }
  function _wrapXHR(originalSend) {
    return function(...args) {
      const xhr = this;
      const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
      xmlHttpRequestProps.forEach((prop) => {
        if (prop in xhr && typeof xhr[prop] === "function") {
          fill(xhr, prop, function(original) {
            const wrapOptions = {
              mechanism: {
                data: {
                  function: prop,
                  handler: getFunctionName(original)
                },
                handled: true,
                type: "instrument"
              }
            };
            const originalFunction = getOriginalFunction(original);
            if (originalFunction) {
              wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
            }
            return wrap(original, wrapOptions);
          });
        }
      });
      return originalSend.apply(this, args);
    };
  }
  function _wrapEventTarget(target) {
    const globalObject = WINDOW5;
    const proto = globalObject[target] && globalObject[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(original) {
      return function(eventName, fn, options) {
        try {
          if (typeof fn.handleEvent === "function") {
            fn.handleEvent = wrap(fn.handleEvent, {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: getFunctionName(fn),
                  target
                },
                handled: true,
                type: "instrument"
              }
            });
          }
        } catch (err) {
        }
        return original.apply(this, [
          eventName,
          wrap(fn, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: getFunctionName(fn),
                target
              },
              handled: true,
              type: "instrument"
            }
          }),
          options
        ]);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
          const wrappedEventHandler = fn;
          try {
            const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
            if (originalEventHandler) {
              originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            }
          } catch (e2) {
          }
          return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
      }
    );
  }

  // node_modules/@sentry/browser/esm/integrations/linkederrors.js
  var DEFAULT_KEY = "cause";
  var DEFAULT_LIMIT = 5;
  var LinkedErrors = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    __init() {
      this.name = LinkedErrors.id;
    }
    constructor(options = {}) {
      LinkedErrors.prototype.__init.call(this);
      this._key = options.key || DEFAULT_KEY;
      this._limit = options.limit || DEFAULT_LIMIT;
    }
    setupOnce() {
      const client = getCurrentHub().getClient();
      if (!client) {
        return;
      }
      addGlobalEventProcessor((event, hint) => {
        const self2 = getCurrentHub().getIntegration(LinkedErrors);
        return self2 ? _handler(client.getOptions().stackParser, self2._key, self2._limit, event, hint) : event;
      });
    }
  };
  LinkedErrors.__initStatic();
  function _handler(parser, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
      return event;
    }
    const linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
    event.exception.values = [...linkedErrors, ...event.exception.values];
    return event;
  }
  function _walkErrorTree(parser, limit, error, key, stack = []) {
    if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
      return stack;
    }
    const exception = exceptionFromError(parser, error[key]);
    return _walkErrorTree(parser, limit, error[key], key, [exception, ...stack]);
  }

  // node_modules/@sentry/browser/esm/integrations/httpcontext.js
  var HttpContext = class {
    constructor() {
      HttpContext.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = HttpContext.id;
    }
    setupOnce() {
      addGlobalEventProcessor((event) => {
        if (getCurrentHub().getIntegration(HttpContext)) {
          if (!WINDOW5.navigator && !WINDOW5.location && !WINDOW5.document) {
            return event;
          }
          const url = event.request && event.request.url || WINDOW5.location && WINDOW5.location.href;
          const { referrer } = WINDOW5.document || {};
          const { userAgent } = WINDOW5.navigator || {};
          const headers = {
            ...event.request && event.request.headers,
            ...referrer && { Referer: referrer },
            ...userAgent && { "User-Agent": userAgent }
          };
          const request = { ...event.request, ...url && { url }, headers };
          return { ...event, request };
        }
        return event;
      });
    }
  };
  HttpContext.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/dedupe.js
  var Dedupe = class {
    constructor() {
      Dedupe.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = Dedupe.id;
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcessor = (currentEvent) => {
        if (currentEvent.type) {
          return currentEvent;
        }
        const self2 = getCurrentHub2().getIntegration(Dedupe);
        if (self2) {
          try {
            if (_shouldDropEvent2(currentEvent, self2._previousEvent)) {
              (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
              return null;
            }
          } catch (_oO) {
            return self2._previousEvent = currentEvent;
          }
          return self2._previousEvent = currentEvent;
        }
        return currentEvent;
      };
      eventProcessor.id = this.name;
      addGlobalEventProcessor2(eventProcessor);
    }
  };
  Dedupe.__initStatic();
  function _shouldDropEvent2(currentEvent, previousEvent) {
    if (!previousEvent) {
      return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
      return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
      return true;
    }
    return false;
  }
  function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;
    if (!currentMessage && !previousMessage) {
      return false;
    }
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
      return false;
    }
    if (currentMessage !== previousMessage) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
      return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    if (!currentFrames && !previousFrames) {
      return true;
    }
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
      return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    if (previousFrames.length !== currentFrames.length) {
      return false;
    }
    for (let i3 = 0; i3 < previousFrames.length; i3++) {
      const frameA = previousFrames[i3];
      const frameB = currentFrames[i3];
      if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
        return false;
      }
    }
    return true;
  }
  function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    if (!currentFingerprint && !previousFingerprint) {
      return true;
    }
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
      return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    try {
      return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
      return false;
    }
  }
  function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
  }
  function _getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
      try {
        return exception.values[0].stacktrace.frames;
      } catch (_oO) {
        return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@sentry/browser/esm/sdk.js
  var defaultIntegrations = [
    new integrations_exports.InboundFilters(),
    new integrations_exports.FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors(),
    new Dedupe(),
    new HttpContext()
  ];
  function init(options = {}) {
    if (options.defaultIntegrations === void 0) {
      options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === void 0) {
      if (typeof __SENTRY_RELEASE__ === "string") {
        options.release = __SENTRY_RELEASE__;
      }
      if (WINDOW5.SENTRY_RELEASE && WINDOW5.SENTRY_RELEASE.id) {
        options.release = WINDOW5.SENTRY_RELEASE.id;
      }
    }
    if (options.autoSessionTracking === void 0) {
      options.autoSessionTracking = true;
    }
    if (options.sendClientReports === void 0) {
      options.sendClientReports = true;
    }
    const clientOptions = {
      ...options,
      stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
      integrations: getIntegrationsToSetup(options),
      transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
    };
    initAndBind(BrowserClient, clientOptions);
    if (options.autoSessionTracking) {
      startSessionTracking();
    }
  }
  function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
  }
  function startSessionTracking() {
    if (typeof WINDOW5.document === "undefined") {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return;
    }
    const hub = getCurrentHub();
    if (!hub.captureSession) {
      return;
    }
    startSessionOnHub(hub);
    addInstrumentationHandler("history", ({ from, to }) => {
      if (!(from === void 0 || from === to)) {
        startSessionOnHub(getCurrentHub());
      }
    });
  }

  // node_modules/@sentry/browser/esm/integrations/index.js
  var integrations_exports2 = {};
  __export(integrations_exports2, {
    Breadcrumbs: () => Breadcrumbs,
    Dedupe: () => Dedupe,
    GlobalHandlers: () => GlobalHandlers,
    HttpContext: () => HttpContext,
    LinkedErrors: () => LinkedErrors,
    TryCatch: () => TryCatch
  });

  // node_modules/@sentry/browser/esm/index.js
  var windowIntegrations = {};
  if (WINDOW5.Sentry && WINDOW5.Sentry.Integrations) {
    windowIntegrations = WINDOW5.Sentry.Integrations;
  }
  var INTEGRATIONS = {
    ...windowIntegrations,
    ...integrations_exports,
    ...integrations_exports2
  };

  // node_modules/@sentry/tracing/esm/utils.js
  function hasTracingEnabled(maybeOptions) {
    const client = getCurrentHub().getClient();
    const options = maybeOptions || client && client.getOptions();
    return !!options && ("tracesSampleRate" in options || "tracesSampler" in options);
  }
  function getActiveTransaction(maybeHub) {
    const hub = maybeHub || getCurrentHub();
    const scope = hub.getScope();
    return scope && scope.getTransaction();
  }
  function msToSec(time) {
    return time / 1e3;
  }

  // node_modules/@sentry/tracing/esm/errors.js
  function registerErrorInstrumentation() {
    addInstrumentationHandler("error", errorCallback);
    addInstrumentationHandler("unhandledrejection", errorCallback);
  }
  function errorCallback() {
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      const status = "internal_error";
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
      activeTransaction.setStatus(status);
    }
  }

  // node_modules/@sentry/tracing/esm/span.js
  var SpanRecorder = class {
    __init() {
      this.spans = [];
    }
    constructor(maxlen = 1e3) {
      SpanRecorder.prototype.__init.call(this);
      this._maxlen = maxlen;
    }
    add(span) {
      if (this.spans.length > this._maxlen) {
        span.spanRecorder = void 0;
      } else {
        this.spans.push(span);
      }
    }
  };
  var Span = class {
    __init2() {
      this.traceId = uuid4();
    }
    __init3() {
      this.spanId = uuid4().substring(16);
    }
    __init4() {
      this.startTimestamp = timestampWithMs();
    }
    __init5() {
      this.tags = {};
    }
    __init6() {
      this.data = {};
    }
    __init7() {
      this.instrumenter = "sentry";
    }
    constructor(spanContext) {
      Span.prototype.__init2.call(this);
      Span.prototype.__init3.call(this);
      Span.prototype.__init4.call(this);
      Span.prototype.__init5.call(this);
      Span.prototype.__init6.call(this);
      Span.prototype.__init7.call(this);
      if (!spanContext) {
        return this;
      }
      if (spanContext.traceId) {
        this.traceId = spanContext.traceId;
      }
      if (spanContext.spanId) {
        this.spanId = spanContext.spanId;
      }
      if (spanContext.parentSpanId) {
        this.parentSpanId = spanContext.parentSpanId;
      }
      if ("sampled" in spanContext) {
        this.sampled = spanContext.sampled;
      }
      if (spanContext.op) {
        this.op = spanContext.op;
      }
      if (spanContext.description) {
        this.description = spanContext.description;
      }
      if (spanContext.data) {
        this.data = spanContext.data;
      }
      if (spanContext.tags) {
        this.tags = spanContext.tags;
      }
      if (spanContext.status) {
        this.status = spanContext.status;
      }
      if (spanContext.startTimestamp) {
        this.startTimestamp = spanContext.startTimestamp;
      }
      if (spanContext.endTimestamp) {
        this.endTimestamp = spanContext.endTimestamp;
      }
      if (spanContext.instrumenter) {
        this.instrumenter = spanContext.instrumenter;
      }
    }
    startChild(spanContext) {
      const childSpan = new Span({
        ...spanContext,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId
      });
      childSpan.spanRecorder = this.spanRecorder;
      if (childSpan.spanRecorder) {
        childSpan.spanRecorder.add(childSpan);
      }
      childSpan.transaction = this.transaction;
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && childSpan.transaction) {
        const opStr = spanContext && spanContext.op || "< unknown op >";
        const nameStr = childSpan.transaction.name || "< unknown name >";
        const idStr = childSpan.transaction.spanId;
        const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
        childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
        logger.log(logMessage);
      }
      return childSpan;
    }
    setTag(key, value) {
      this.tags = { ...this.tags, [key]: value };
      return this;
    }
    setData(key, value) {
      this.data = { ...this.data, [key]: value };
      return this;
    }
    setStatus(value) {
      this.status = value;
      return this;
    }
    setHttpStatus(httpStatus) {
      this.setTag("http.status_code", String(httpStatus));
      const spanStatus = spanStatusfromHttpCode(httpStatus);
      if (spanStatus !== "unknown_error") {
        this.setStatus(spanStatus);
      }
      return this;
    }
    isSuccess() {
      return this.status === "ok";
    }
    finish(endTimestamp) {
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
        const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
        if (logMessage) {
          logger.log(logMessage.replace("Starting", "Finishing"));
        }
      }
      this.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
    }
    toTraceparent() {
      let sampledString = "";
      if (this.sampled !== void 0) {
        sampledString = this.sampled ? "-1" : "-0";
      }
      return `${this.traceId}-${this.spanId}${sampledString}`;
    }
    toContext() {
      return dropUndefinedKeys({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId
      });
    }
    updateWithContext(spanContext) {
      this.data = spanContext.data || {};
      this.description = spanContext.description;
      this.endTimestamp = spanContext.endTimestamp;
      this.op = spanContext.op;
      this.parentSpanId = spanContext.parentSpanId;
      this.sampled = spanContext.sampled;
      this.spanId = spanContext.spanId || this.spanId;
      this.startTimestamp = spanContext.startTimestamp || this.startTimestamp;
      this.status = spanContext.status;
      this.tags = spanContext.tags || {};
      this.traceId = spanContext.traceId || this.traceId;
      return this;
    }
    getTraceContext() {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        trace_id: this.traceId
      });
    }
    toJSON() {
      return dropUndefinedKeys({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this.endTimestamp,
        trace_id: this.traceId
      });
    }
  };
  function spanStatusfromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) {
      return "ok";
    }
    if (httpStatus >= 400 && httpStatus < 500) {
      switch (httpStatus) {
        case 401:
          return "unauthenticated";
        case 403:
          return "permission_denied";
        case 404:
          return "not_found";
        case 409:
          return "already_exists";
        case 413:
          return "failed_precondition";
        case 429:
          return "resource_exhausted";
        default:
          return "invalid_argument";
      }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
      switch (httpStatus) {
        case 501:
          return "unimplemented";
        case 503:
          return "unavailable";
        case 504:
          return "deadline_exceeded";
        default:
          return "internal_error";
      }
    }
    return "unknown_error";
  }

  // node_modules/@sentry/tracing/esm/transaction.js
  var Transaction = class extends Span {
    __init() {
      this._measurements = {};
    }
    __init2() {
      this._contexts = {};
    }
    __init3() {
      this._frozenDynamicSamplingContext = void 0;
    }
    constructor(transactionContext, hub) {
      super(transactionContext);
      Transaction.prototype.__init.call(this);
      Transaction.prototype.__init2.call(this);
      Transaction.prototype.__init3.call(this);
      this._hub = hub || getCurrentHub();
      this._name = transactionContext.name || "";
      this.metadata = {
        source: "custom",
        ...transactionContext.metadata,
        spanMetadata: {}
      };
      this._trimEnd = transactionContext.trimEnd;
      this.transaction = this;
      const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
      if (incomingDynamicSamplingContext) {
        this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
      }
    }
    get name() {
      return this._name;
    }
    set name(newName) {
      this.setName(newName);
    }
    setName(name, source = "custom") {
      this._name = name;
      this.metadata.source = source;
    }
    initSpanRecorder(maxlen = 1e3) {
      if (!this.spanRecorder) {
        this.spanRecorder = new SpanRecorder(maxlen);
      }
      this.spanRecorder.add(this);
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
    }
    setMeasurement(name, value, unit = "") {
      this._measurements[name] = { value, unit };
    }
    setMetadata(newMetadata) {
      this.metadata = { ...this.metadata, ...newMetadata };
    }
    finish(endTimestamp) {
      if (this.endTimestamp !== void 0) {
        return void 0;
      }
      if (!this.name) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
        this.name = "<unlabeled transaction>";
      }
      super.finish(endTimestamp);
      if (this.sampled !== true) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
        const client = this._hub.getClient();
        if (client) {
          client.recordDroppedEvent("sample_rate", "transaction");
        }
        return void 0;
      }
      const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((s3) => s3 !== this && s3.endTimestamp) : [];
      if (this._trimEnd && finishedSpans.length > 0) {
        this.endTimestamp = finishedSpans.reduce((prev, current) => {
          if (prev.endTimestamp && current.endTimestamp) {
            return prev.endTimestamp > current.endTimestamp ? prev : current;
          }
          return prev;
        }).endTimestamp;
      }
      const metadata = this.metadata;
      const transaction = {
        contexts: {
          ...this._contexts,
          trace: this.getTraceContext()
        },
        spans: finishedSpans,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...metadata,
          dynamicSamplingContext: this.getDynamicSamplingContext()
        },
        ...metadata.source && {
          transaction_info: {
            source: metadata.source
          }
        }
      };
      const hasMeasurements = Object.keys(this._measurements).length > 0;
      if (hasMeasurements) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
          "[Measurements] Adding measurements to transaction",
          JSON.stringify(this._measurements, void 0, 2)
        );
        transaction.measurements = this._measurements;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
      return this._hub.captureEvent(transaction);
    }
    toContext() {
      const spanContext = super.toContext();
      return dropUndefinedKeys({
        ...spanContext,
        name: this.name,
        trimEnd: this._trimEnd
      });
    }
    updateWithContext(transactionContext) {
      super.updateWithContext(transactionContext);
      this.name = transactionContext.name || "";
      this._trimEnd = transactionContext.trimEnd;
      return this;
    }
    getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) {
        return this._frozenDynamicSamplingContext;
      }
      const hub = this._hub || getCurrentHub();
      const client = hub && hub.getClient();
      if (!client)
        return {};
      const { environment, release } = client.getOptions() || {};
      const { publicKey: public_key } = client.getDsn() || {};
      const maybeSampleRate = this.metadata.sampleRate;
      const sample_rate = maybeSampleRate !== void 0 ? maybeSampleRate.toString() : void 0;
      const scope = hub.getScope();
      const { segment: user_segment } = scope && scope.getUser() || {};
      const source = this.metadata.source;
      const transaction = source && source !== "url" ? this.name : void 0;
      const dsc = dropUndefinedKeys({
        environment,
        release,
        transaction,
        user_segment,
        public_key,
        trace_id: this.traceId,
        sample_rate
      });
      return dsc;
    }
  };

  // node_modules/@sentry/tracing/esm/idletransaction.js
  var DEFAULT_IDLE_TIMEOUT = 1e3;
  var DEFAULT_FINAL_TIMEOUT = 3e4;
  var DEFAULT_HEARTBEAT_INTERVAL = 5e3;
  var IdleTransactionSpanRecorder = class extends SpanRecorder {
    constructor(_pushActivity, _popActivity, transactionSpanId, maxlen) {
      super(maxlen);
      this._pushActivity = _pushActivity;
      this._popActivity = _popActivity;
      this.transactionSpanId = transactionSpanId;
    }
    add(span) {
      if (span.spanId !== this.transactionSpanId) {
        span.finish = (endTimestamp) => {
          span.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
          this._popActivity(span.spanId);
        };
        if (span.endTimestamp === void 0) {
          this._pushActivity(span.spanId);
        }
      }
      super.add(span);
    }
  };
  var IdleTransaction = class extends Transaction {
    __init() {
      this.activities = {};
    }
    __init2() {
      this._heartbeatCounter = 0;
    }
    __init3() {
      this._finished = false;
    }
    __init4() {
      this._beforeFinishCallbacks = [];
    }
    constructor(transactionContext, _idleHub, _idleTimeout = DEFAULT_IDLE_TIMEOUT, _finalTimeout = DEFAULT_FINAL_TIMEOUT, _heartbeatInterval = DEFAULT_HEARTBEAT_INTERVAL, _onScope = false) {
      super(transactionContext, _idleHub);
      this._idleHub = _idleHub;
      this._idleTimeout = _idleTimeout;
      this._finalTimeout = _finalTimeout;
      this._heartbeatInterval = _heartbeatInterval;
      this._onScope = _onScope;
      IdleTransaction.prototype.__init.call(this);
      IdleTransaction.prototype.__init2.call(this);
      IdleTransaction.prototype.__init3.call(this);
      IdleTransaction.prototype.__init4.call(this);
      if (_onScope) {
        clearActiveTransaction(_idleHub);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
        _idleHub.configureScope((scope) => scope.setSpan(this));
      }
      this._startIdleTimeout();
      setTimeout(() => {
        if (!this._finished) {
          this.setStatus("deadline_exceeded");
          this.finish();
        }
      }, this._finalTimeout);
    }
    finish(endTimestamp = timestampWithMs()) {
      this._finished = true;
      this.activities = {};
      if (this.spanRecorder) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] finishing IdleTransaction", new Date(endTimestamp * 1e3).toISOString(), this.op);
        for (const callback of this._beforeFinishCallbacks) {
          callback(this, endTimestamp);
        }
        this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
          if (span.spanId === this.spanId) {
            return true;
          }
          if (!span.endTimestamp) {
            span.endTimestamp = endTimestamp;
            span.setStatus("cancelled");
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, void 0, 2));
          }
          const keepSpan = span.startTimestamp < endTimestamp;
          if (!keepSpan) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
              "[Tracing] discarding Span since it happened after Transaction was finished",
              JSON.stringify(span, void 0, 2)
            );
          }
          return keepSpan;
        });
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] flushing IdleTransaction");
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] No active IdleTransaction");
      }
      if (this._onScope) {
        clearActiveTransaction(this._idleHub);
      }
      return super.finish(endTimestamp);
    }
    registerBeforeFinishCallback(callback) {
      this._beforeFinishCallbacks.push(callback);
    }
    initSpanRecorder(maxlen) {
      if (!this.spanRecorder) {
        const pushActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._pushActivity(id);
        };
        const popActivity = (id) => {
          if (this._finished) {
            return;
          }
          this._popActivity(id);
        };
        this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Starting heartbeat");
        this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }
    _cancelIdleTimeout() {
      if (this._idleTimeoutID) {
        clearTimeout(this._idleTimeoutID);
        this._idleTimeoutID = void 0;
      }
    }
    _startIdleTimeout(endTimestamp) {
      this._cancelIdleTimeout();
      this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0) {
          this.finish(endTimestamp);
        }
      }, this._idleTimeout);
    }
    _pushActivity(spanId) {
      this._cancelIdleTimeout();
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] pushActivity: ${spanId}`);
      this.activities[spanId] = true;
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    _popActivity(spanId) {
      if (this.activities[spanId]) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] popActivity ${spanId}`);
        delete this.activities[spanId];
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
      }
      if (Object.keys(this.activities).length === 0) {
        const endTimestamp = timestampWithMs() + this._idleTimeout / 1e3;
        this._startIdleTimeout(endTimestamp);
      }
    }
    _beat() {
      if (this._finished) {
        return;
      }
      const heartbeatString = Object.keys(this.activities).join("");
      if (heartbeatString === this._prevHeartbeatString) {
        this._heartbeatCounter++;
      } else {
        this._heartbeatCounter = 1;
      }
      this._prevHeartbeatString = heartbeatString;
      if (this._heartbeatCounter >= 3) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
        this.setStatus("deadline_exceeded");
        this.finish();
      } else {
        this._pingHeartbeat();
      }
    }
    _pingHeartbeat() {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
    }
  };
  function clearActiveTransaction(hub) {
    const scope = hub.getScope();
    if (scope) {
      const transaction = scope.getTransaction();
      if (transaction) {
        scope.setSpan(void 0);
      }
    }
  }

  // node_modules/@sentry/tracing/esm/hubextensions.js
  function traceHeaders() {
    const scope = this.getScope();
    if (scope) {
      const span = scope.getSpan();
      if (span) {
        return {
          "sentry-trace": span.toTraceparent()
        };
      }
    }
    return {};
  }
  function sample(transaction, options, samplingContext) {
    if (!hasTracingEnabled(options)) {
      transaction.sampled = false;
      return transaction;
    }
    if (transaction.sampled !== void 0) {
      transaction.setMetadata({
        sampleRate: Number(transaction.sampled)
      });
      return transaction;
    }
    let sampleRate;
    if (typeof options.tracesSampler === "function") {
      sampleRate = options.tracesSampler(samplingContext);
      transaction.setMetadata({
        sampleRate: Number(sampleRate)
      });
    } else if (samplingContext.parentSampled !== void 0) {
      sampleRate = samplingContext.parentSampled;
    } else {
      sampleRate = options.tracesSampleRate;
      transaction.setMetadata({
        sampleRate: Number(sampleRate)
      });
    }
    if (!isValidSampleRate(sampleRate)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
      transaction.sampled = false;
      return transaction;
    }
    if (!sampleRate) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
      );
      transaction.sampled = false;
      return transaction;
    }
    transaction.sampled = Math.random() < sampleRate;
    if (!transaction.sampled) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate
        )})`
      );
      return transaction;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
    return transaction;
  }
  function isValidSampleRate(rate) {
    if (isNaN2(rate) || !(typeof rate === "number" || typeof rate === "boolean")) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate
        )} of type ${JSON.stringify(typeof rate)}.`
      );
      return false;
    }
    if (rate < 0 || rate > 1) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
      return false;
    }
    return true;
  }
  function _startTransaction(transactionContext, customSamplingContext) {
    const client = this.getClient();
    const options = client && client.getOptions() || {};
    const configInstrumenter = options.instrumenter || "sentry";
    const transactionInstrumenter = transactionContext.instrumenter || "sentry";
    if (configInstrumenter !== transactionInstrumenter) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
        `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`
      );
      transactionContext.sampled = false;
    }
    let transaction = new Transaction(transactionContext, this);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    }
    return transaction;
  }
  function startIdleTransaction(hub, transactionContext, idleTimeout, finalTimeout, onScope, customSamplingContext, heartbeatInterval) {
    const client = hub.getClient();
    const options = client && client.getOptions() || {};
    let transaction = new IdleTransaction(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
    transaction = sample(transaction, options, {
      parentSampled: transactionContext.parentSampled,
      transactionContext,
      ...customSamplingContext
    });
    if (transaction.sampled) {
      transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    }
    return transaction;
  }
  function _addTracingExtensions() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) {
      carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    }
    if (!carrier.__SENTRY__.extensions.traceHeaders) {
      carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
    }
  }
  function _autoloadDatabaseIntegrations() {
    const carrier = getMainCarrier();
    if (!carrier.__SENTRY__) {
      return;
    }
    const packageToIntegrationMapping = {
      mongodb() {
        const integration = dynamicRequire(module, "./integrations/node/mongo");
        return new integration.Mongo();
      },
      mongoose() {
        const integration = dynamicRequire(module, "./integrations/node/mongo");
        return new integration.Mongo({ mongoose: true });
      },
      mysql() {
        const integration = dynamicRequire(module, "./integrations/node/mysql");
        return new integration.Mysql();
      },
      pg() {
        const integration = dynamicRequire(module, "./integrations/node/postgres");
        return new integration.Postgres();
      }
    };
    const mappedPackages = Object.keys(packageToIntegrationMapping).filter((moduleName) => !!loadModule(moduleName)).map((pkg) => {
      try {
        return packageToIntegrationMapping[pkg]();
      } catch (e2) {
        return void 0;
      }
    }).filter((p3) => p3);
    if (mappedPackages.length > 0) {
      carrier.__SENTRY__.integrations = [...carrier.__SENTRY__.integrations || [], ...mappedPackages];
    }
  }
  function addExtensionMethods() {
    _addTracingExtensions();
    if (isNodeEnv()) {
      _autoloadDatabaseIntegrations();
    }
    registerErrorInstrumentation();
  }

  // node_modules/@sentry/tracing/esm/browser/types.js
  var WINDOW6 = GLOBAL_OBJ;

  // node_modules/@sentry/tracing/esm/browser/backgroundtab.js
  function registerBackgroundTabDetection() {
    if (WINDOW6 && WINDOW6.document) {
      WINDOW6.document.addEventListener("visibilitychange", () => {
        const activeTransaction = getActiveTransaction();
        if (WINDOW6.document.hidden && activeTransaction) {
          const statusType = "cancelled";
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
            `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`
          );
          if (!activeTransaction.status) {
            activeTransaction.setStatus(statusType);
          }
          activeTransaction.setTag("visibilitychange", "document.hidden");
          activeTransaction.finish();
        }
      });
    } else {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
    }
  }

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js
  var bindReporter = (callback, metric, reportAllChanges) => {
    let prevValue;
    let delta;
    return (forceReport) => {
      if (metric.value >= 0) {
        if (forceReport || reportAllChanges) {
          delta = metric.value - (prevValue || 0);
          if (delta || prevValue === void 0) {
            prevValue = metric.value;
            metric.delta = delta;
            callback(metric);
          }
        }
      }
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js
  var generateUniqueID = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getNavigationEntry.js
  var getNavigationEntryFromPerformanceTiming = () => {
    const timing = WINDOW6.performance.timing;
    const type = WINDOW6.performance.navigation.type;
    const navigationEntry = {
      entryType: "navigation",
      startTime: 0,
      type: type == 2 ? "back_forward" : type === 1 ? "reload" : "navigate"
    };
    for (const key in timing) {
      if (key !== "navigationStart" && key !== "toJSON") {
        navigationEntry[key] = Math.max(timing[key] - timing.navigationStart, 0);
      }
    }
    return navigationEntry;
  };
  var getNavigationEntry = () => {
    if (WINDOW6.__WEB_VITALS_POLYFILL__) {
      return WINDOW6.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || getNavigationEntryFromPerformanceTiming());
    } else {
      return WINDOW6.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getActivationStart.js
  var getActivationStart = () => {
    const navEntry = getNavigationEntry();
    return navEntry && navEntry.activationStart || 0;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js
  var initMetric = (name, value) => {
    const navEntry = getNavigationEntry();
    let navigationType = "navigate";
    if (navEntry) {
      if (WINDOW6.document.prerendering || getActivationStart() > 0) {
        navigationType = "prerender";
      } else {
        navigationType = navEntry.type.replace(/_/g, "-");
      }
    }
    return {
      name,
      value: typeof value === "undefined" ? -1 : value,
      rating: "good",
      delta: 0,
      entries: [],
      id: generateUniqueID(),
      navigationType
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js
  var observe = (type, callback, opts) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(type)) {
        const po = new PerformanceObserver((list) => {
          callback(list.getEntries());
        });
        po.observe(
          Object.assign(
            {
              type,
              buffered: true
            },
            opts || {}
          )
        );
        return po;
      }
    } catch (e2) {
    }
    return;
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js
  var onHidden = (cb, once) => {
    const onHiddenOrPageHide = (event) => {
      if (event.type === "pagehide" || WINDOW6.document.visibilityState === "hidden") {
        cb(event);
        if (once) {
          removeEventListener("visibilitychange", onHiddenOrPageHide, true);
          removeEventListener("pagehide", onHiddenOrPageHide, true);
        }
      }
    };
    addEventListener("visibilitychange", onHiddenOrPageHide, true);
    addEventListener("pagehide", onHiddenOrPageHide, true);
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js
  var onCLS = (onReport) => {
    const metric = initMetric("CLS", 0);
    let report;
    let sessionValue = 0;
    let sessionEntries = [];
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (sessionValue && sessionEntries.length !== 0 && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          if (sessionValue > metric.value) {
            metric.value = sessionValue;
            metric.entries = sessionEntries;
            if (report) {
              report();
            }
          }
        }
      });
    };
    const po = observe("layout-shift", handleEntries);
    if (po) {
      report = bindReporter(onReport, metric);
      onHidden(() => {
        handleEntries(po.takeRecords());
        report(true);
      });
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js
  var firstHiddenTime = -1;
  var initHiddenTime = () => {
    return WINDOW6.document.visibilityState === "hidden" && !WINDOW6.document.prerendering ? 0 : Infinity;
  };
  var trackChanges = () => {
    onHidden(({ timeStamp }) => {
      firstHiddenTime = timeStamp;
    }, true);
  };
  var getVisibilityWatcher = () => {
    if (firstHiddenTime < 0) {
      firstHiddenTime = initHiddenTime();
      trackChanges();
    }
    return {
      get firstHiddenTime() {
        return firstHiddenTime;
      }
    };
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js
  var onFID = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("FID");
    let report;
    const handleEntry = (entry) => {
      if (entry.startTime < visibilityWatcher.firstHiddenTime) {
        metric.value = entry.processingStart - entry.startTime;
        metric.entries.push(entry);
        report(true);
      }
    };
    const handleEntries = (entries) => {
      entries.forEach(handleEntry);
    };
    const po = observe("first-input", handleEntries);
    report = bindReporter(onReport, metric);
    if (po) {
      onHidden(() => {
        handleEntries(po.takeRecords());
        po.disconnect();
      }, true);
    }
  };

  // node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js
  var reportedMetricIDs = {};
  var onLCP = (onReport) => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("LCP");
    let report;
    const handleEntries = (entries) => {
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const value = Math.max(lastEntry.startTime - getActivationStart(), 0);
        if (value < visibilityWatcher.firstHiddenTime) {
          metric.value = value;
          metric.entries = [lastEntry];
          report();
        }
      }
    };
    const po = observe("largest-contentful-paint", handleEntries);
    if (po) {
      report = bindReporter(onReport, metric);
      const stopListening = () => {
        if (!reportedMetricIDs[metric.id]) {
          handleEntries(po.takeRecords());
          po.disconnect();
          reportedMetricIDs[metric.id] = true;
          report(true);
        }
      };
      ["keydown", "click"].forEach((type) => {
        addEventListener(type, stopListening, { once: true, capture: true });
      });
      onHidden(stopListening, true);
    }
  };

  // node_modules/@sentry/tracing/esm/browser/metrics/utils.js
  function isMeasurementValue(value) {
    return typeof value === "number" && isFinite(value);
  }
  function _startChild(transaction, { startTimestamp, ...ctx }) {
    if (startTimestamp && transaction.startTimestamp > startTimestamp) {
      transaction.startTimestamp = startTimestamp;
    }
    return transaction.startChild({
      startTimestamp,
      ...ctx
    });
  }

  // node_modules/@sentry/tracing/esm/browser/metrics/index.js
  function getBrowserPerformanceAPI() {
    return WINDOW6 && WINDOW6.addEventListener && WINDOW6.performance;
  }
  var _performanceCursor = 0;
  var _measurements = {};
  var _lcpEntry;
  var _clsEntry;
  function startTrackingWebVitals() {
    const performance2 = getBrowserPerformanceAPI();
    if (performance2 && browserPerformanceTimeOrigin) {
      if (performance2.mark) {
        WINDOW6.performance.mark("sentry-tracing-init");
      }
      _trackCLS();
      _trackLCP();
      _trackFID();
    }
  }
  function startTrackingLongTasks() {
    const entryHandler = (entries) => {
      for (const entry of entries) {
        const transaction = getActiveTransaction();
        if (!transaction) {
          return;
        }
        const startTime = msToSec(browserPerformanceTimeOrigin + entry.startTime);
        const duration = msToSec(entry.duration);
        transaction.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          startTimestamp: startTime,
          endTimestamp: startTime + duration
        });
      }
    };
    observe("longtask", entryHandler);
  }
  function _trackCLS() {
    onCLS((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS");
      _measurements["cls"] = { value: metric.value, unit: "" };
      _clsEntry = entry;
    });
  }
  function _trackLCP() {
    onLCP((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP");
      _measurements["lcp"] = { value: metric.value, unit: "millisecond" };
      _lcpEntry = entry;
    });
  }
  function _trackFID() {
    onFID((metric) => {
      const entry = metric.entries.pop();
      if (!entry) {
        return;
      }
      const timeOrigin = msToSec(browserPerformanceTimeOrigin);
      const startTime = msToSec(entry.startTime);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FID");
      _measurements["fid"] = { value: metric.value, unit: "millisecond" };
      _measurements["mark.fid"] = { value: timeOrigin + startTime, unit: "second" };
    });
  }
  function addPerformanceEntries(transaction) {
    const performance2 = getBrowserPerformanceAPI();
    if (!performance2 || !WINDOW6.performance.getEntries || !browserPerformanceTimeOrigin) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Adding & adjusting spans using Performance API");
    const timeOrigin = msToSec(browserPerformanceTimeOrigin);
    const performanceEntries = performance2.getEntries();
    let responseStartTimestamp;
    let requestStartTimestamp;
    performanceEntries.slice(_performanceCursor).forEach((entry) => {
      const startTime = msToSec(entry.startTime);
      const duration = msToSec(entry.duration);
      if (transaction.op === "navigation" && timeOrigin + startTime < transaction.startTimestamp) {
        return;
      }
      switch (entry.entryType) {
        case "navigation": {
          _addNavigationSpans(transaction, entry, timeOrigin);
          responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
          requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
          break;
        }
        case "mark":
        case "paint":
        case "measure": {
          _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
          const firstHidden = getVisibilityWatcher();
          const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
          if (entry.name === "first-paint" && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FP");
            _measurements["fp"] = { value: entry.startTime, unit: "millisecond" };
          }
          if (entry.name === "first-contentful-paint" && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FCP");
            _measurements["fcp"] = { value: entry.startTime, unit: "millisecond" };
          }
          break;
        }
        case "resource": {
          const resourceName = entry.name.replace(WINDOW6.location.origin, "");
          _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
          break;
        }
      }
    });
    _performanceCursor = Math.max(performanceEntries.length - 1, 0);
    _trackNavigator(transaction);
    if (transaction.op === "pageload") {
      if (typeof responseStartTimestamp === "number") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding TTFB");
        _measurements["ttfb"] = {
          value: (responseStartTimestamp - transaction.startTimestamp) * 1e3,
          unit: "millisecond"
        };
        if (typeof requestStartTimestamp === "number" && requestStartTimestamp <= responseStartTimestamp) {
          _measurements["ttfb.requestTime"] = {
            value: (responseStartTimestamp - requestStartTimestamp) * 1e3,
            unit: "millisecond"
          };
        }
      }
      ["fcp", "fp", "lcp"].forEach((name) => {
        if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
          return;
        }
        const oldValue = _measurements[name].value;
        const measurementTimestamp = timeOrigin + msToSec(oldValue);
        const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1e3);
        const delta = normalizedValue - oldValue;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
        _measurements[name].value = normalizedValue;
      });
      const fidMark = _measurements["mark.fid"];
      if (fidMark && _measurements["fid"]) {
        _startChild(transaction, {
          description: "first input delay",
          endTimestamp: fidMark.value + msToSec(_measurements["fid"].value),
          op: "ui.action",
          startTimestamp: fidMark.value
        });
        delete _measurements["mark.fid"];
      }
      if (!("fcp" in _measurements)) {
        delete _measurements.cls;
      }
      Object.keys(_measurements).forEach((measurementName) => {
        transaction.setMeasurement(
          measurementName,
          _measurements[measurementName].value,
          _measurements[measurementName].unit
        );
      });
      _tagMetricInfo(transaction);
    }
    _lcpEntry = void 0;
    _clsEntry = void 0;
    _measurements = {};
  }
  function _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    const measureStartTimestamp = timeOrigin + startTime;
    const measureEndTimestamp = measureStartTimestamp + duration;
    _startChild(transaction, {
      description: entry.name,
      endTimestamp: measureEndTimestamp,
      op: entry.entryType,
      startTimestamp: measureStartTimestamp
    });
    return measureStartTimestamp;
  }
  function _addNavigationSpans(transaction, entry, timeOrigin) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((event) => {
      _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(transaction, entry, "secureConnection", timeOrigin, "TLS/SSL", "connectEnd");
    _addPerformanceNavigationTiming(transaction, entry, "fetch", timeOrigin, "cache", "domainLookupStart");
    _addPerformanceNavigationTiming(transaction, entry, "domainLookup", timeOrigin, "DNS");
    _addRequest(transaction, entry, timeOrigin);
  }
  function _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin, description, eventEnd) {
    const end = eventEnd ? entry[eventEnd] : entry[`${event}End`];
    const start = entry[`${event}Start`];
    if (!start || !end) {
      return;
    }
    _startChild(transaction, {
      op: "browser",
      description: description || event,
      startTimestamp: timeOrigin + msToSec(start),
      endTimestamp: timeOrigin + msToSec(end)
    });
  }
  function _addRequest(transaction, entry, timeOrigin) {
    _startChild(transaction, {
      op: "browser",
      description: "request",
      startTimestamp: timeOrigin + msToSec(entry.requestStart),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd)
    });
    _startChild(transaction, {
      op: "browser",
      description: "response",
      startTimestamp: timeOrigin + msToSec(entry.responseStart),
      endTimestamp: timeOrigin + msToSec(entry.responseEnd)
    });
  }
  function _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
      return;
    }
    const data = {};
    if ("transferSize" in entry) {
      data["Transfer Size"] = entry.transferSize;
    }
    if ("encodedBodySize" in entry) {
      data["Encoded Body Size"] = entry.encodedBodySize;
    }
    if ("decodedBodySize" in entry) {
      data["Decoded Body Size"] = entry.decodedBodySize;
    }
    if ("renderBlockingStatus" in entry) {
      data["resource.render_blocking_status"] = entry.renderBlockingStatus;
    }
    const startTimestamp = timeOrigin + startTime;
    const endTimestamp = startTimestamp + duration;
    _startChild(transaction, {
      description: resourceName,
      endTimestamp,
      op: entry.initiatorType ? `resource.${entry.initiatorType}` : "resource.other",
      startTimestamp,
      data
    });
  }
  function _trackNavigator(transaction) {
    const navigator2 = WINDOW6.navigator;
    if (!navigator2) {
      return;
    }
    const connection = navigator2.connection;
    if (connection) {
      if (connection.effectiveType) {
        transaction.setTag("effectiveConnectionType", connection.effectiveType);
      }
      if (connection.type) {
        transaction.setTag("connectionType", connection.type);
      }
      if (isMeasurementValue(connection.rtt)) {
        _measurements["connection.rtt"] = { value: connection.rtt, unit: "millisecond" };
      }
    }
    if (isMeasurementValue(navigator2.deviceMemory)) {
      transaction.setTag("deviceMemory", `${navigator2.deviceMemory} GB`);
    }
    if (isMeasurementValue(navigator2.hardwareConcurrency)) {
      transaction.setTag("hardwareConcurrency", String(navigator2.hardwareConcurrency));
    }
  }
  function _tagMetricInfo(transaction) {
    if (_lcpEntry) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP Data");
      if (_lcpEntry.element) {
        transaction.setTag("lcp.element", htmlTreeAsString(_lcpEntry.element));
      }
      if (_lcpEntry.id) {
        transaction.setTag("lcp.id", _lcpEntry.id);
      }
      if (_lcpEntry.url) {
        transaction.setTag("lcp.url", _lcpEntry.url.trim().slice(0, 200));
      }
      transaction.setTag("lcp.size", _lcpEntry.size);
    }
    if (_clsEntry && _clsEntry.sources) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS Data");
      _clsEntry.sources.forEach(
        (source, index) => transaction.setTag(`cls.source.${index + 1}`, htmlTreeAsString(source.node))
      );
    }
  }

  // node_modules/@sentry/tracing/esm/browser/request.js
  var DEFAULT_TRACE_PROPAGATION_TARGETS = ["localhost", /^\//];
  var defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
    tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS
  };
  function instrumentOutgoingRequests(_options) {
    const { traceFetch, traceXHR, tracePropagationTargets, tracingOrigins, shouldCreateSpanForRequest } = {
      traceFetch: defaultRequestInstrumentationOptions.traceFetch,
      traceXHR: defaultRequestInstrumentationOptions.traceXHR,
      ..._options
    };
    const shouldCreateSpan = typeof shouldCreateSpanForRequest === "function" ? shouldCreateSpanForRequest : (_) => true;
    const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);
    const spans = {};
    if (traceFetch) {
      addInstrumentationHandler("fetch", (handlerData) => {
        fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }
    if (traceXHR) {
      addInstrumentationHandler("xhr", (handlerData) => {
        xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      });
    }
  }
  function shouldAttachHeaders(url, tracePropagationTargets) {
    return stringMatchesSomePattern(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
  }
  function fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
    if (!hasTracingEnabled() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
      return;
    }
    if (handlerData.endTimestamp) {
      const spanId = handlerData.fetchData.__span;
      if (!spanId)
        return;
      const span = spans[spanId];
      if (span) {
        if (handlerData.response) {
          span.setHttpStatus(handlerData.response.status);
        } else if (handlerData.error) {
          span.setStatus("internal_error");
        }
        span.finish();
        delete spans[spanId];
      }
      return;
    }
    const currentScope = getCurrentHub().getScope();
    const currentSpan = currentScope && currentScope.getSpan();
    const activeTransaction = currentSpan && currentSpan.transaction;
    if (currentSpan && activeTransaction) {
      const span = currentSpan.startChild({
        data: {
          ...handlerData.fetchData,
          type: "fetch"
        },
        description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
        op: "http.client"
      });
      handlerData.fetchData.__span = span.spanId;
      spans[span.spanId] = span;
      const request = handlerData.args[0];
      handlerData.args[1] = handlerData.args[1] || {};
      const options = handlerData.args[1];
      if (shouldAttachHeaders2(handlerData.fetchData.url)) {
        options.headers = addTracingHeadersToFetchRequest(
          request,
          activeTransaction.getDynamicSamplingContext(),
          span,
          options
        );
      }
    }
  }
  function addTracingHeadersToFetchRequest(request, dynamicSamplingContext, span, options) {
    const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
    const sentryTraceHeader = span.toTraceparent();
    const headers = typeof Request !== "undefined" && isInstanceOf(request, Request) ? request.headers : options.headers;
    if (!headers) {
      return { "sentry-trace": sentryTraceHeader, baggage: sentryBaggageHeader };
    } else if (typeof Headers !== "undefined" && isInstanceOf(headers, Headers)) {
      const newHeaders = new Headers(headers);
      newHeaders.append("sentry-trace", sentryTraceHeader);
      if (sentryBaggageHeader) {
        newHeaders.append(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
      }
      return newHeaders;
    } else if (Array.isArray(headers)) {
      const newHeaders = [...headers, ["sentry-trace", sentryTraceHeader]];
      if (sentryBaggageHeader) {
        newHeaders.push([BAGGAGE_HEADER_NAME, sentryBaggageHeader]);
      }
      return newHeaders;
    } else {
      const existingBaggageHeader = "baggage" in headers ? headers.baggage : void 0;
      const newBaggageHeaders = [];
      if (Array.isArray(existingBaggageHeader)) {
        newBaggageHeaders.push(...existingBaggageHeader);
      } else if (existingBaggageHeader) {
        newBaggageHeaders.push(existingBaggageHeader);
      }
      if (sentryBaggageHeader) {
        newBaggageHeaders.push(sentryBaggageHeader);
      }
      return {
        ...headers,
        "sentry-trace": sentryTraceHeader,
        baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
      };
    }
  }
  function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
    if (!hasTracingEnabled() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
      return;
    }
    const xhr = handlerData.xhr.__sentry_xhr__;
    if (handlerData.endTimestamp) {
      const spanId = handlerData.xhr.__sentry_xhr_span_id__;
      if (!spanId)
        return;
      const span = spans[spanId];
      if (span) {
        span.setHttpStatus(xhr.status_code);
        span.finish();
        delete spans[spanId];
      }
      return;
    }
    const currentScope = getCurrentHub().getScope();
    const currentSpan = currentScope && currentScope.getSpan();
    const activeTransaction = currentSpan && currentSpan.transaction;
    if (currentSpan && activeTransaction) {
      const span = currentSpan.startChild({
        data: {
          ...xhr.data,
          type: "xhr",
          method: xhr.method,
          url: xhr.url
        },
        description: `${xhr.method} ${xhr.url}`,
        op: "http.client"
      });
      handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
      spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
      if (handlerData.xhr.setRequestHeader && shouldAttachHeaders2(handlerData.xhr.__sentry_xhr__.url)) {
        try {
          handlerData.xhr.setRequestHeader("sentry-trace", span.toTraceparent());
          const dynamicSamplingContext = activeTransaction.getDynamicSamplingContext();
          const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
          if (sentryBaggageHeader) {
            handlerData.xhr.setRequestHeader(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
          }
        } catch (_) {
        }
      }
    }
  }

  // node_modules/@sentry/tracing/esm/browser/router.js
  function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad = true, startTransactionOnLocationChange = true) {
    if (!WINDOW6 || !WINDOW6.location) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not initialize routing instrumentation due to invalid location");
      return;
    }
    let startingUrl = WINDOW6.location.href;
    let activeTransaction;
    if (startTransactionOnPageLoad) {
      activeTransaction = customStartTransaction({
        name: WINDOW6.location.pathname,
        op: "pageload",
        metadata: { source: "url" }
      });
    }
    if (startTransactionOnLocationChange) {
      addInstrumentationHandler("history", ({ to, from }) => {
        if (from === void 0 && startingUrl && startingUrl.indexOf(to) !== -1) {
          startingUrl = void 0;
          return;
        }
        if (from !== to) {
          startingUrl = void 0;
          if (activeTransaction) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
            activeTransaction.finish();
          }
          activeTransaction = customStartTransaction({
            name: WINDOW6.location.pathname,
            op: "navigation",
            metadata: { source: "url" }
          });
        }
      });
    }
  }

  // node_modules/@sentry/tracing/esm/browser/browsertracing.js
  var BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
  var DEFAULT_BROWSER_TRACING_OPTIONS = {
    idleTimeout: DEFAULT_IDLE_TIMEOUT,
    finalTimeout: DEFAULT_FINAL_TIMEOUT,
    heartbeatInterval: DEFAULT_HEARTBEAT_INTERVAL,
    markBackgroundTransactions: true,
    routingInstrumentation: instrumentRoutingWithDefaults,
    startTransactionOnLocationChange: true,
    startTransactionOnPageLoad: true,
    enableLongTask: true,
    _experiments: {},
    ...defaultRequestInstrumentationOptions
  };
  var BrowserTracing = class {
    __init() {
      this.name = BROWSER_TRACING_INTEGRATION_ID;
    }
    constructor(_options) {
      BrowserTracing.prototype.__init.call(this);
      this.options = {
        ...DEFAULT_BROWSER_TRACING_OPTIONS,
        ..._options
      };
      if (this.options._experiments.enableLongTask !== void 0) {
        this.options.enableLongTask = this.options._experiments.enableLongTask;
      }
      if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
        this.options.tracePropagationTargets = _options.tracingOrigins;
      }
      startTrackingWebVitals();
      if (this.options.enableLongTask) {
        startTrackingLongTasks();
      }
    }
    setupOnce(_, getCurrentHub2) {
      this._getCurrentHub = getCurrentHub2;
      const {
        routingInstrumentation: instrumentRouting,
        startTransactionOnLocationChange,
        startTransactionOnPageLoad,
        markBackgroundTransactions,
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest,
        _experiments
      } = this.options;
      instrumentRouting(
        (context) => this._createRouteTransaction(context),
        startTransactionOnPageLoad,
        startTransactionOnLocationChange
      );
      if (markBackgroundTransactions) {
        registerBackgroundTabDetection();
      }
      if (_experiments.enableInteractions) {
        this._registerInteractionListener();
      }
      instrumentOutgoingRequests({
        traceFetch,
        traceXHR,
        tracePropagationTargets,
        shouldCreateSpanForRequest
      });
    }
    _createRouteTransaction(context) {
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
        return void 0;
      }
      const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;
      const isPageloadTransaction = context.op === "pageload";
      const sentryTraceMetaTagValue = isPageloadTransaction ? getMetaContent("sentry-trace") : null;
      const baggageMetaTagValue = isPageloadTransaction ? getMetaContent("baggage") : null;
      const traceParentData = sentryTraceMetaTagValue ? extractTraceparentData(sentryTraceMetaTagValue) : void 0;
      const dynamicSamplingContext = baggageMetaTagValue ? baggageHeaderToDynamicSamplingContext(baggageMetaTagValue) : void 0;
      const expandedContext = {
        ...context,
        ...traceParentData,
        metadata: {
          ...context.metadata,
          dynamicSamplingContext: traceParentData && !dynamicSamplingContext ? {} : dynamicSamplingContext
        },
        trimEnd: true
      };
      const modifiedContext = typeof beforeNavigate === "function" ? beforeNavigate(expandedContext) : expandedContext;
      const finalContext = modifiedContext === void 0 ? { ...expandedContext, sampled: false } : modifiedContext;
      finalContext.metadata = finalContext.name !== expandedContext.name ? { ...finalContext.metadata, source: "custom" } : finalContext.metadata;
      this._latestRouteName = finalContext.name;
      this._latestRouteSource = finalContext.metadata && finalContext.metadata.source;
      if (finalContext.sampled === false) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);
      const hub = this._getCurrentHub();
      const { location } = WINDOW6;
      const idleTransaction = startIdleTransaction(
        hub,
        finalContext,
        idleTimeout,
        finalTimeout,
        true,
        { location },
        heartbeatInterval
      );
      idleTransaction.registerBeforeFinishCallback((transaction) => {
        addPerformanceEntries(transaction);
      });
      return idleTransaction;
    }
    _registerInteractionListener() {
      let inflightInteractionTransaction;
      const registerInteractionTransaction = () => {
        const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;
        const op = "ui.action.click";
        if (inflightInteractionTransaction) {
          inflightInteractionTransaction.finish();
          inflightInteractionTransaction = void 0;
        }
        if (!this._getCurrentHub) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
          return void 0;
        }
        if (!this._latestRouteName) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
          return void 0;
        }
        const hub = this._getCurrentHub();
        const { location } = WINDOW6;
        const context = {
          name: this._latestRouteName,
          op,
          trimEnd: true,
          metadata: {
            source: this._latestRouteSource || "url"
          }
        };
        inflightInteractionTransaction = startIdleTransaction(
          hub,
          context,
          idleTimeout,
          finalTimeout,
          true,
          { location },
          heartbeatInterval
        );
      };
      ["click"].forEach((type) => {
        addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
      });
    }
  };
  function getMetaContent(metaName) {
    const metaTag = getDomElement(`meta[name=${metaName}]`);
    return metaTag ? metaTag.getAttribute("content") : null;
  }

  // node_modules/@sentry/tracing/esm/index.js
  if (typeof __SENTRY_TRACING__ === "undefined" || __SENTRY_TRACING__) {
    addExtensionMethods();
  }

  // src/logger.ts
  init({
    dsn: "https://11fa19323b3a48d5882f26d3a98c1864@o526305.ingest.sentry.io/4504743091699712",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.1,
    release: "floating-calculator@23.2.10",
    environment: "DEV"
  });
  var _Logger = class {
    constructor(tag) {
      this.tag = "";
      this.tag = tag;
    }
    debug(...messages) {
      this.internalLog(3 /* DEBUG */, ...messages);
    }
    log(...messages) {
      this.internalLog(2 /* INFO */, ...messages);
    }
    warn(...messages) {
      this.internalLog(1 /* WARNING */, ...messages);
    }
    error(...messages) {
      this.internalLog(0 /* ERROR */, ...messages);
    }
    internalLog(level, ...messages) {
      const d3 = new Date(Date.now());
      const output = [
        "%c%s %s",
        "color: blue",
        `[${d3.getHours()}:${d3.getMinutes()}:${d3.getSeconds()}]`,
        this.tag,
        ...messages
      ];
      if (!_Logger.debugMode) {
        switch (level) {
          case 1 /* WARNING */:
          case 2 /* INFO */:
            captureMessage(messages.join(" "));
            break;
          case 0 /* ERROR */:
            captureException(messages);
            break;
        }
        return;
      } else {
        switch (level) {
          case 3 /* DEBUG */:
            console.debug(...output);
            break;
          case 1 /* WARNING */:
            console.warn(...output);
            break;
          case 2 /* INFO */:
            console.log(...output);
            break;
          case 0 /* ERROR */:
            console.error(...output);
            break;
        }
      }
    }
  };
  var Logger = _Logger;
  Logger.debugMode = true;

  // src/utils/winbox/template.js
  var template = document.createElement("div");
  template.innerHTML = '<div class=wb-header><div class=wb-control><span title="Minimize" class=wb-min></span><span title="Maximize" class=wb-max></span><span title="Fullscreen" class=wb-full></span><span title="Close" class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>';
  function markup(tpl) {
    return (tpl || template).cloneNode(true);
  }
  var winboxcss = `
  .winbox {
    position: fixed;
    left: 0;
    top: 0;
    background: #0050ff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* using transform make contents blur when applied and requires more gpu memory */
    transition: width 0.3s, height 0.3s, left 0.3s, top 0.3s;
    transition-timing-function: cubic-bezier(0.3, 1, 0.3, 1);
    /* contain "strict" does not make overflow contents selectable */
    contain: layout size;
    /* explicitly set text align to left fixes an issue with iframes alignment when centered */
    text-align: left;
    /* workaround for using passive listeners */
    touch-action: none;
  }
  .wb-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    overflow: hidden;
    z-index: 1;
  }
  .wb-body {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    will-change: contents;
    background: #fff;
    /* when no border is set there is some thin line visible */
    /* always hide top border visually */
    margin-top: 0 !important;
    contain: strict;
    z-index: 0;
  }
  body > .wb-body {
    position: relative;
    display: inline-block;
    visibility: hidden;
    contain: none;
  }
  .wb-drag {
    height: 100%;
    padding-left: 10px;
    cursor: move;
  }
  .wb-title {
    font-family: Arial, sans-serif;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wb-icon {
    display: none;
    width: 20px;
    height: 100%;
    margin: -1px 8px 0 -3px;
    float: left;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .wb-n {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-e {
    position: absolute;
    top: 0;
    right: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-s {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-w {
    position: absolute;
    top: 0;
    left: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-nw {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-ne {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-sw {
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-se {
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-control {
    float: right;
    height: 100%;
    max-width: 100%;
    text-align: center;
  }
  .wb-control * {
    display: inline-block;
    width: 30px;
    height: 100%;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .wb-min {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);
    background-size: 14px auto;
    background-position: center calc(50% + 6px);
  }
  .wb-max {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);
    background-size: 17px auto;
  }
  .wb-close {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);
    background-size: 15px auto;
    background-position: 5px center;
  }
  .wb-full {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);
    background-size: 16px auto;
  }
  /*
  .winbox:not(.max) .wb-max {
    background-image: url(@restore);
    background-size: 20px auto;
    background-position: center bottom 5px;
  }
  */
  /*
  .winbox:fullscreen{
    transition: none !important;
  }
  .winbox:fullscreen .wb-full{
    background-image: url(@minimize);
  }
  .winbox:fullscreen > div,
  .winbox:fullscreen .wb-title,
  */
  .winbox.modal .wb-body ~ div,
  .winbox.modal .wb-drag,
  .winbox.min .wb-body ~ div,
  .winbox.max .wb-body ~ div {
    pointer-events: none;
  }
  .winbox.max .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-full,
  .winbox.min .wb-min {
    display: none;
  }
  .winbox.min .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-body > * {
    display: none;
  }
  .winbox.hide {
    display: none;
  }
  .winbox.max {
    box-shadow: none;
  }
  .winbox.max .wb-body {
    margin: 0 !important;
  }
  .winbox iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
  }
  body.wb-lock .winbox {
    will-change: left, top, width, height;
    transition: none;
  }
  body.wb-lock iframe {
    pointer-events: none;
  }
  .winbox.modal:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    border-radius: inherit;
  }
  .winbox.modal:after {
    content: '';
    position: absolute;
    top: -50vh;
    left: -50vw;
    right: -50vw;
    bottom: -50vh;
    background: #0d1117;
    animation: wb-fade-in 0.2s ease-out forwards;
    z-index: -1;
  }
  .winbox.modal .wb-min,
  .winbox.modal .wb-max,
  .winbox.modal .wb-full {
    display: none;
  }
  @keyframes wb-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.85;
    }
  }
  .no-animation {
    transition: none;
  }
  .no-shadow {
    box-shadow: none;
  }
  .no-header .wb-header {
    display: none;
  }
  .no-header .wb-body {
    top: 0;
  }
  .no-min .wb-min {
    display: none;
  }
  .no-max .wb-max {
    display: none;
  }
  .no-full .wb-full {
    display: none;
  }
  .no-close .wb-close {
    display: none;
  }
  .no-resize .wb-body ~ div {
    display: none;
  }
  .no-move:not(.min) .wb-title {
    pointer-events: none;
  }
  .wb-body .wb-hide {
    display: none;
  }
  .wb-show {
    display: none;
  }
  .wb-body .wb-show {
    display: revert;
  }
`;

  // src/utils/winbox/helper.js
  function addListener(node, event, fn, opt) {
    node && node.addEventListener(event, fn, opt || false);
  }
  function removeListener(node, event, fn, opt) {
    node && node.removeEventListener(event, fn, opt || false);
  }
  function preventEvent(event, prevent) {
    event.stopPropagation();
    event.cancelable && event.preventDefault();
  }
  function getByClass(root, name) {
    return root.getElementsByClassName(name)[0];
  }
  function addClass(node, classname) {
    node.classList.add(classname);
  }
  function hasClass(node, classname) {
    return node.classList.contains(classname);
  }
  function removeClass(node, classname) {
    node.classList.remove(classname);
  }
  function setStyle(node, style, value) {
    value = "" + value;
    if (node["_s_" + style] !== value) {
      node.style.setProperty(style, value);
      node["_s_" + style] = value;
    }
  }
  function setText(node, value) {
    const textnode = node.firstChild;
    textnode ? textnode.nodeValue = value : node.textContent = value;
  }

  // src/utils/winbox/winbox.js
  var use_raf = false;
  var stack_min = [];
  var eventOptions = { capture: true, passive: true };
  var body;
  var id_counter = 0;
  var index_counter = 10;
  var is_fullscreen;
  var last_focus;
  var prefix_request;
  var prefix_exit;
  var root_w;
  var root_h;
  var WinBox = class {
    constructor(params, _title) {
      if (!(this instanceof WinBox)) {
        return new WinBox(params);
      }
      body || setup();
      let id, index, root, tpl, title, icon, mount, html, url, shadowel, shadowdom, framename, cssurl, width, height, minwidth, minheight, maxwidth, maxheight, autosize, x3, y3, top, left, bottom, right, min, max, hidden, modal, background, border, header, classname, oncreate, onclose, onfocus, onblur, onmove, onresize, onfullscreen, onmaximize, onminimize, onrestore, onhide, onshow, onload;
      if (params) {
        if (_title) {
          title = params;
          params = _title;
        }
        if (typeof params === "string") {
          title = params;
        } else {
          id = params["id"];
          index = params["index"];
          root = params["root"];
          tpl = params["template"];
          title = title || params["title"];
          icon = params["icon"];
          mount = params["mount"];
          html = params["html"];
          url = params["url"];
          shadowel = params["shadowel"];
          framename = params["framename"];
          cssurl = params["cssurl"];
          width = params["width"];
          height = params["height"];
          minwidth = params["minwidth"];
          minheight = params["minheight"];
          maxwidth = params["maxwidth"];
          maxheight = params["maxheight"];
          autosize = params["autosize"];
          min = params["min"];
          max = params["max"];
          hidden = params["hidden"];
          modal = params["modal"];
          x3 = params["x"] || (modal ? "center" : 0);
          y3 = params["y"] || (modal ? "center" : 0);
          top = params["top"];
          left = params["left"];
          bottom = params["bottom"];
          right = params["right"];
          background = params["background"];
          border = params["border"];
          header = params["header"];
          classname = params["class"];
          onclose = params["onclose"];
          onfocus = params["onfocus"];
          onblur = params["onblur"];
          onmove = params["onmove"];
          onresize = params["onresize"];
          onfullscreen = params["onfullscreen"];
          onmaximize = params["onmaximize"];
          onminimize = params["onminimize"];
          onrestore = params["onrestore"];
          onhide = params["onhide"];
          onshow = params["onshow"];
          onload = params["onload"];
        }
      }
      this.dom = markup(tpl);
      this.dom.id = this.id = id || "winbox-" + ++id_counter;
      this.dom.className = "winbox" + (classname ? " " + (typeof classname === "string" ? classname : classname.join(" ")) : "") + (modal ? " modal" : "");
      this.dom["winbox"] = this;
      this.window = this.dom;
      this.body = getByClass(this.dom, "wb-body");
      this.header = header || 35;
      if (index || index === 0) {
        index_counter = index;
      }
      if (background) {
        this.setBackground(background);
      }
      if (border) {
        setStyle(this.body, "margin", border + (isNaN(border) ? "" : "px"));
      } else {
        border = 0;
      }
      if (header) {
        const node = getByClass(this.dom, "wb-header");
        setStyle(node, "height", header + "px");
        setStyle(node, "line-height", header + "px");
        setStyle(this.body, "top", header + "px");
      }
      if (title) {
        this.setTitle(title);
      }
      if (icon) {
        this.setIcon(icon);
      }
      if (mount) {
        this.mount(mount);
      } else if (html) {
        this.body.innerHTML = html;
      } else if (url) {
        this.setUrl(url, onload);
      }
      top = top ? parse(top, root_h) : 0;
      bottom = bottom ? parse(bottom, root_h) : 0;
      left = left ? parse(left, root_w) : 0;
      right = right ? parse(right, root_w) : 0;
      const viewport_w = root_w - left - right;
      const viewport_h = root_h - top - bottom;
      maxwidth = maxwidth ? parse(maxwidth, viewport_w) : viewport_w;
      maxheight = maxheight ? parse(maxheight, viewport_h) : viewport_h;
      minwidth = minwidth ? parse(minwidth, maxwidth) : 150;
      minheight = minheight ? parse(minheight, maxheight) : this.header;
      if (autosize) {
        (root || body).appendChild(this.body);
        width = Math.max(
          Math.min(this.body.clientWidth + border * 2 + 1, maxwidth),
          minwidth
        );
        height = Math.max(
          Math.min(this.body.clientHeight + this.header + border + 1, maxheight),
          minheight
        );
        this.dom.appendChild(this.body);
      } else {
        width = width ? parse(width, maxwidth) : Math.max(maxwidth / 2, minwidth) | 0;
        height = height ? parse(height, maxheight) : Math.max(maxheight / 2, minheight) | 0;
      }
      x3 = x3 ? parse(x3, viewport_w, width) : left;
      y3 = y3 ? parse(y3, viewport_h, height) : top;
      this.x = x3;
      this.y = y3;
      this.width = width;
      this.height = height;
      this.minwidth = minwidth;
      this.minheight = minheight;
      this.maxwidth = maxwidth;
      this.maxheight = maxheight;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
      this.index = index;
      this.min = false;
      this.max = false;
      this.full = false;
      this.hidden = false;
      this.focused = false;
      this.onclose = onclose;
      this.onfocus = onfocus;
      this.onblur = onblur;
      this.onmove = onmove;
      this.onresize = onresize;
      this.onfullscreen = onfullscreen;
      this.onmaximize = onmaximize;
      this.onminimize = onminimize;
      this.onrestore = onrestore;
      this.onhide = onhide;
      this.onshow = onshow;
      if (max) {
        this.maximize();
      } else if (min) {
        this.minimize();
      } else {
        this.resize().move();
      }
      if (hidden) {
        this.hide();
      } else {
        this.focus();
        if (index || index === 0) {
          this.index = index;
          if (index > index_counter)
            index_counter = index;
        }
      }
      setStyle(this.shadowdom ? this.shadowdom : this.dom, "z-index", index);
      register(this);
      if (shadowel) {
        const se = document.createElement(shadowel);
        se.style.position = "absolute";
        const style = document.createElement("style");
        style.textContent = winboxcss;
        se.appendChild(style);
        if (cssurl) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = cssurl;
          link.itemprop = "url";
          se.appendChild(link);
        }
        se.appendChild(this.dom);
        se.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>";
        this.shadowdom = se;
        (root || body).appendChild(se);
      } else {
        (root || body).appendChild(this.dom);
      }
      (oncreate = params["oncreate"]) && oncreate.call(this, params);
    }
    static new(params) {
      return new WinBox(params);
    }
    mount(src) {
      this.unmount();
      src._backstore || (src._backstore = src.parentNode);
      this.body.textContent = "";
      this.body.appendChild(src);
      return this;
    }
    unmount(dest) {
      const node = this.body.firstChild;
      if (node) {
        const root = dest || node._backstore;
        root && root.appendChild(node);
        node._backstore = dest;
      }
      return this;
    }
    setTitle(title) {
      const node = getByClass(this.dom, "wb-title");
      setText(node, this.title = title);
      return this;
    }
    setIcon(src) {
      const img = getByClass(this.dom, "wb-icon");
      setStyle(img, "background-image", "url(" + src + ")");
      setStyle(img, "display", "inline-block");
      return this;
    }
    setBackground(background) {
      setStyle(this.dom, "background", background);
      return this;
    }
    setUrl(url, onload) {
      const node = this.body.firstChild;
      if (node && node.tagName.toLowerCase() === "iframe") {
        node.src = url;
      } else {
        const name = this.framename ?? "";
        this.body.innerHTML = `<iframe name="${name}" src="${url}"></iframe>`;
        onload && (this.body.firstChild.onload = onload);
      }
      return this;
    }
    focus(state) {
      if (state === false) {
        return this.blur();
      }
      if (last_focus !== this && this.dom) {
        last_focus && last_focus.blur();
        setStyle(
          this.shadowdom ? this.shadowdom : this.dom,
          "z-index",
          ++index_counter
        );
        this.index = index_counter;
        this.addClass("focus");
        last_focus = this;
        this.focused = true;
        this.onfocus && this.onfocus();
      }
      return this;
    }
    blur(state) {
      if (state === false) {
        return this.focus();
      }
      if (last_focus === this) {
        this.removeClass("focus");
        this.focused = false;
        this.onblur && this.onblur();
        last_focus = null;
      }
      return this;
    }
    hide(state) {
      if (state === false) {
        return this.show();
      }
      if (!this.hidden) {
        this.onhide && this.onhide();
        this.hidden = true;
        return this.addClass("hide");
      }
    }
    show(state) {
      if (state === false) {
        return this.hide();
      }
      if (this.hidden) {
        this.onshow && this.onshow();
        this.hidden = false;
        return this.removeClass("hide");
      }
    }
    minimize(state) {
      if (state === false) {
        return this.restore();
      }
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.max) {
        this.removeClass("max");
        this.max = false;
      }
      if (!this.min) {
        stack_min.push(this);
        update_min_stack();
        this.dom.title = this.title;
        this.addClass("min");
        this.min = true;
        this.onminimize && this.onminimize();
      }
      return this;
    }
    restore() {
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.min) {
        remove_min_stack(this);
        this.resize().move();
        this.onrestore && this.onrestore();
      }
      if (this.max) {
        this.max = false;
        this.removeClass("max").resize().move();
        this.onrestore && this.onrestore();
      }
      return this;
    }
    maximize(state) {
      if (state === false) {
        return this.restore();
      }
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.min) {
        remove_min_stack(this);
      }
      if (!this.max) {
        this.addClass("max").resize(
          root_w - this.left - this.right,
          root_h - this.top - this.bottom,
          true
        ).move(this.left, this.top, true);
        this.max = true;
        this.onmaximize && this.onmaximize();
      }
      return this;
    }
    fullscreen(state) {
      if (this.min) {
        remove_min_stack(this);
        this.resize().move();
      }
      if (!is_fullscreen || !cancel_fullscreen()) {
        this.body[prefix_request]();
        is_fullscreen = this;
        this.full = true;
        this.onfullscreen && this.onfullscreen();
      } else if (state === false) {
        return this.restore();
      }
      return this;
    }
    close(force) {
      if (this.onclose && this.onclose(force)) {
        return true;
      }
      if (this.min) {
        remove_min_stack(this);
      }
      this.unmount();
      this.dom.remove();
      this.dom.textContent = "";
      this.dom["winbox"] = null;
      this.body = null;
      this.dom = null;
      if (last_focus === this) {
        last_focus = null;
      }
    }
    move(x3, y3, _skip_update) {
      if (!x3 && x3 !== 0) {
        x3 = this.x;
        y3 = this.y;
      } else if (!_skip_update) {
        this.x = x3 ? x3 = parse(x3, root_w - this.left - this.right, this.width) : 0;
        this.y = y3 ? y3 = parse(y3, root_h - this.top - this.bottom, this.height) : 0;
      }
      setStyle(this.dom, "left", x3 + "px");
      setStyle(this.dom, "top", y3 + "px");
      this.onmove && this.onmove(x3, y3);
      return this;
    }
    resize(w3, h3, _skip_update) {
      if (!w3 && w3 !== 0) {
        w3 = this.width;
        h3 = this.height;
      } else if (!_skip_update) {
        this.width = w3 ? w3 = parse(w3, this.maxwidth) : 0;
        this.height = h3 ? h3 = parse(h3, this.maxheight) : 0;
        w3 = Math.max(w3, this.minwidth);
        h3 = Math.max(h3, this.minheight);
      }
      setStyle(this.dom, "width", w3 + "px");
      setStyle(this.dom, "height", h3 + "px");
      this.onresize && this.onresize(w3, h3);
      return this;
    }
    addControl(control) {
      const classname = control["class"];
      const image = control.image;
      const click = control.click;
      const index = control.index;
      const title = control.title;
      const node = document.createElement("span");
      const icons = getByClass(this.dom, "wb-control");
      const self2 = this;
      if (classname)
        node.className = classname;
      if (image)
        setStyle(node, "background-image", "url(" + image + ")");
      if (click)
        node.onclick = function(event) {
          click.call(this, event, self2);
        };
      if (title)
        node.title = title;
      icons.insertBefore(node, icons.childNodes[index || 0]);
      return this;
    }
    removeControl(control) {
      control = getByClass(this.dom, control);
      control && control.remove();
      return this;
    }
    addClass(classname) {
      addClass(this.dom, classname);
      return this;
    }
    removeClass(classname) {
      removeClass(this.dom, classname);
      return this;
    }
    hasClass(classname) {
      return hasClass(this.dom, classname);
    }
    toggleClass(classname) {
      return this.hasClass(classname) ? this.removeClass(classname) : this.addClass(classname);
    }
  };
  function parse(num, base, center) {
    if (typeof num === "string") {
      if (num === "center") {
        num = (base - center) / 2 | 0;
      } else if (num === "right" || num === "bottom") {
        num = base - center;
      } else {
        const value = parseFloat(num);
        const unit = "" + value !== num && num.substring(("" + value).length);
        if (unit === "%") {
          num = base / 100 * value | 0;
        } else {
          num = value;
        }
      }
    }
    return num;
  }
  function setup() {
    body = document.body;
    body[prefix_request = "requestFullscreen"] || body[prefix_request = "msRequestFullscreen"] || body[prefix_request = "webkitRequestFullscreen"] || body[prefix_request = "mozRequestFullscreen"] || (prefix_request = "");
    prefix_exit = prefix_request && prefix_request.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
    addListener(window, "resize", function() {
      init2();
      update_min_stack();
    });
    init2();
  }
  function register(self2) {
    addWindowListener(self2, "drag");
    addWindowListener(self2, "n");
    addWindowListener(self2, "s");
    addWindowListener(self2, "w");
    addWindowListener(self2, "e");
    addWindowListener(self2, "nw");
    addWindowListener(self2, "ne");
    addWindowListener(self2, "se");
    addWindowListener(self2, "sw");
    addListener(getByClass(self2.dom, "wb-min"), "click", function(event) {
      preventEvent(event);
      self2.min ? self2.focus().restore() : self2.blur().minimize();
    });
    addListener(getByClass(self2.dom, "wb-max"), "click", function(event) {
      self2.max ? self2.restore() : self2.maximize();
    });
    if (prefix_request) {
      addListener(getByClass(self2.dom, "wb-full"), "click", function(event) {
        self2.fullscreen();
      });
    } else {
      self2.addClass("no-full");
    }
    addListener(getByClass(self2.dom, "wb-close"), "click", function(event) {
      preventEvent(event);
      self2.close() || (self2 = null);
    });
    addListener(self2.dom, "click", function(event) {
      self2.focus();
    });
  }
  function remove_min_stack(self2) {
    stack_min.splice(stack_min.indexOf(self2), 1);
    update_min_stack();
    self2.removeClass("min");
    self2.min = false;
    self2.dom.title = "";
  }
  function update_min_stack() {
    const length = stack_min.length;
    const splitscreen_index = {};
    const splitscreen_length = {};
    for (let i3 = 0, self2, key; i3 < length; i3++) {
      self2 = stack_min[i3];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      if (splitscreen_length[key]) {
        splitscreen_length[key]++;
      } else {
        splitscreen_index[key] = 0;
        splitscreen_length[key] = 1;
      }
    }
    for (let i3 = 0, self2, key, width; i3 < length; i3++) {
      self2 = stack_min[i3];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      width = Math.min(
        (root_w - self2.left - self2.right) / splitscreen_length[key],
        250
      );
      self2.resize(width + 1 | 0, self2.header, true).move(
        self2.left + splitscreen_index[key] * width | 0,
        root_h - self2.bottom - self2.header,
        true
      );
      splitscreen_index[key]++;
    }
  }
  function addWindowListener(self2, dir) {
    const node = getByClass(self2.dom, "wb-" + dir);
    if (!node)
      return;
    let touch, x3, y3;
    let raf_timer, raf_move, raf_resize;
    let dblclick_timer = 0;
    addListener(node, "mousedown", mousedown);
    addListener(node, "touchstart", mousedown, eventOptions);
    function loop() {
      raf_timer = requestAnimationFrame(loop);
      if (raf_resize) {
        self2.resize();
        raf_resize = false;
      }
      if (raf_move) {
        self2.move();
        raf_move = false;
      }
    }
    function mousedown(event) {
      preventEvent(event);
      self2.focus();
      if (dir === "drag") {
        if (self2.min) {
          self2.restore();
          return;
        }
        const now = Date.now();
        const diff = now - dblclick_timer;
        dblclick_timer = now;
        if (diff < 300 && !self2.dom.classList.contains("no-max")) {
          self2.max ? self2.restore() : self2.maximize();
          return;
        }
      }
      if (!self2.max && !self2.min) {
        addClass(body, "wb-lock");
        use_raf && loop();
        if ((touch = event.touches) && (touch = touch[0])) {
          event = touch;
          addListener(window, "touchmove", handler_mousemove, eventOptions);
          addListener(window, "touchend", handler_mouseup, eventOptions);
        } else {
          addListener(window, "mousemove", handler_mousemove);
          addListener(window, "mouseup", handler_mouseup);
        }
        x3 = event.pageX;
        y3 = event.pageY;
      }
    }
    function handler_mousemove(event) {
      preventEvent(event);
      if (touch) {
        event = event.touches[0];
      }
      const pageX = event.pageX;
      const pageY = event.pageY;
      const offsetX = pageX - x3;
      const offsetY = pageY - y3;
      const old_w = self2.width;
      const old_h = self2.height;
      const old_x = self2.x;
      const old_y = self2.y;
      let resize_w, resize_h, move_x, move_y;
      if (dir === "drag") {
        self2.x += offsetX;
        self2.y += offsetY;
        move_x = move_y = 1;
      } else {
        if (dir === "e" || dir === "se" || dir === "ne") {
          self2.width += offsetX;
          resize_w = 1;
        } else if (dir === "w" || dir === "sw" || dir === "nw") {
          self2.x += offsetX;
          self2.width -= offsetX;
          resize_w = 1;
          move_x = 1;
        }
        if (dir === "s" || dir === "se" || dir === "sw") {
          self2.height += offsetY;
          resize_h = 1;
        } else if (dir === "n" || dir === "ne" || dir === "nw") {
          self2.y += offsetY;
          self2.height -= offsetY;
          resize_h = 1;
          move_y = 1;
        }
      }
      if (resize_w) {
        self2.width = Math.max(
          Math.min(self2.width, self2.maxwidth, root_w - self2.x - self2.right),
          self2.minwidth
        );
        resize_w = self2.width !== old_w;
      }
      if (resize_h) {
        self2.height = Math.max(
          Math.min(self2.height, self2.maxheight, root_h - self2.y - self2.bottom),
          self2.minheight
        );
        resize_h = self2.height !== old_h;
      }
      if (resize_w || resize_h) {
        use_raf ? raf_resize = true : self2.resize();
      }
      if (move_x) {
        self2.x = Math.max(
          Math.min(self2.x, root_w - self2.width - self2.right),
          self2.left
        );
        move_x = self2.x !== old_x;
      }
      if (move_y) {
        self2.y = Math.max(
          Math.min(self2.y, root_h - self2.height - self2.bottom),
          self2.top
        );
        move_y = self2.y !== old_y;
      }
      if (move_x || move_y) {
        use_raf ? raf_move = true : self2.move();
      }
      if (resize_w || move_x) {
        x3 = pageX;
      }
      if (resize_h || move_y) {
        y3 = pageY;
      }
    }
    function handler_mouseup(event) {
      preventEvent(event);
      removeClass(body, "wb-lock");
      use_raf && cancelAnimationFrame(raf_timer);
      if (touch) {
        removeListener(window, "touchmove", handler_mousemove, eventOptions);
        removeListener(window, "touchend", handler_mouseup, eventOptions);
      } else {
        removeListener(window, "mousemove", handler_mousemove);
        removeListener(window, "mouseup", handler_mouseup);
      }
    }
  }
  function init2() {
    const doc = document.documentElement;
    root_w = doc.clientWidth;
    root_h = doc.clientHeight;
  }
  function has_fullscreen() {
    return document["fullscreen"] || document["fullscreenElement"] || document["webkitFullscreenElement"] || document["mozFullScreenElement"];
  }
  function cancel_fullscreen() {
    is_fullscreen.full = false;
    if (has_fullscreen()) {
      document[prefix_exit]();
      return true;
    }
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
  function t(t2) {
    return t2.split("-")[1];
  }
  function e(t2) {
    return "y" === t2 ? "height" : "width";
  }
  function n(t2) {
    return t2.split("-")[0];
  }
  function o(t2) {
    return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
  }
  function r(r3, i3, a3) {
    let { reference: l3, floating: s3 } = r3;
    const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, u3 = o(i3), m3 = e(u3), g3 = l3[m3] / 2 - s3[m3] / 2, d3 = "x" === u3;
    let p3;
    switch (n(i3)) {
      case "top":
        p3 = { x: c3, y: l3.y - s3.height };
        break;
      case "bottom":
        p3 = { x: c3, y: l3.y + l3.height };
        break;
      case "right":
        p3 = { x: l3.x + l3.width, y: f3 };
        break;
      case "left":
        p3 = { x: l3.x - s3.width, y: f3 };
        break;
      default:
        p3 = { x: l3.x, y: l3.y };
    }
    switch (t(i3)) {
      case "start":
        p3[u3] -= g3 * (a3 && d3 ? -1 : 1);
        break;
      case "end":
        p3[u3] += g3 * (a3 && d3 ? -1 : 1);
    }
    return p3;
  }
  var i = async (t2, e2, n3) => {
    const { placement: o3 = "bottom", strategy: i3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
    let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: i3 }), { x: u3, y: m3 } = r(f3, o3, c3), g3 = o3, d3 = {}, p3 = 0;
    for (let n4 = 0; n4 < s3.length; n4++) {
      const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: u3, y: m3, initialPlacement: o3, placement: g3, strategy: i3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
      u3 = null != y3 ? y3 : u3, m3 = null != x3 ? x3 : m3, d3 = { ...d3, [a4]: { ...d3[a4], ...w3 } }, v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: i3 }) : v3.rects), { x: u3, y: m3 } = r(f3, g3, c3)), n4 = -1);
    }
    return { x: u3, y: m3, placement: g3, strategy: i3, middlewareData: d3 };
  };
  function a(t2) {
    return "number" != typeof t2 ? function(t3) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
    }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
  }
  function l(t2) {
    return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
  }
  async function s(t2, e2) {
    var n3;
    void 0 === e2 && (e2 = {});
    const { x: o3, y: r3, platform: i3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e2, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await i3.getClippingRect({ element: null == (n3 = await (null == i3.isElement ? void 0 : i3.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == i3.getDocumentElement ? void 0 : i3.getDocumentElement(c3.floating)), boundary: u3, rootBoundary: m3, strategy: f3 })), w3 = "floating" === g3 ? { ...s3.floating, x: o3, y: r3 } : s3.reference, v3 = await (null == i3.getOffsetParent ? void 0 : i3.getOffsetParent(c3.floating)), b3 = await (null == i3.isElement ? void 0 : i3.isElement(v3)) && await (null == i3.getScale ? void 0 : i3.getScale(v3)) || { x: 1, y: 1 }, R2 = l(i3.convertOffsetParentRelativeRectToViewportRelativeRect ? await i3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
    return { top: (x3.top - R2.top + h3.top) / b3.y, bottom: (R2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - R2.left + h3.left) / b3.x, right: (R2.right - x3.right + h3.right) / b3.x };
  }
  var c = Math.min;
  var f = Math.max;
  function u(t2, e2, n3) {
    return f(t2, c(e2, n3));
  }
  var g = ["top", "right", "bottom", "left"];
  var d = g.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
  var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function h(t2) {
    return t2.replace(/left|right|bottom|top/g, (t3) => p[t3]);
  }
  function y(n3, r3, i3) {
    void 0 === i3 && (i3 = false);
    const a3 = t(n3), l3 = o(n3), s3 = e(l3);
    let c3 = "x" === l3 ? a3 === (i3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
    return r3.reference[s3] > r3.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
  }
  var x = { start: "end", end: "start" };
  function w(t2) {
    return t2.replace(/start|end/g, (t3) => x[t3]);
  }
  var b = function(e2) {
    return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o3) {
      var r3;
      const { placement: i3, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: u3 } = o3, { mainAxis: m3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true, ...b3 } = e2, R2 = n(i3), A2 = n(c3) === c3, P2 = await (null == f3.isRTL ? void 0 : f3.isRTL(u3.floating)), T3 = d3 || (A2 || !v3 ? [h(c3)] : function(t2) {
        const e3 = h(t2);
        return [w(t2), e3, w(e3)];
      }(c3));
      d3 || "none" === x3 || T3.push(...function(e3, o4, r4, i4) {
        const a4 = t(e3);
        let l4 = function(t2, e4, n3) {
          const o5 = ["left", "right"], r5 = ["right", "left"], i5 = ["top", "bottom"], a5 = ["bottom", "top"];
          switch (t2) {
            case "top":
            case "bottom":
              return n3 ? e4 ? r5 : o5 : e4 ? o5 : r5;
            case "left":
            case "right":
              return e4 ? i5 : a5;
            default:
              return [];
          }
        }(n(e3), "start" === r4, i4);
        return a4 && (l4 = l4.map((t2) => t2 + "-" + a4), o4 && (l4 = l4.concat(l4.map(w)))), l4;
      }(c3, v3, x3, P2));
      const O3 = [c3, ...T3], D3 = await s(o3, b3), E3 = [];
      let L3 = (null == (r3 = a3.flip) ? void 0 : r3.overflows) || [];
      if (m3 && E3.push(D3[R2]), g3) {
        const { main: t2, cross: e3 } = y(i3, l3, P2);
        E3.push(D3[t2], D3[e3]);
      }
      if (L3 = [...L3, { placement: i3, overflows: E3 }], !E3.every((t2) => t2 <= 0)) {
        var k2, B;
        const t2 = ((null == (k2 = a3.flip) ? void 0 : k2.index) || 0) + 1, e3 = O3[t2];
        if (e3)
          return { data: { index: t2, overflows: L3 }, reset: { placement: e3 } };
        let n3 = null == (B = L3.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : B.placement;
        if (!n3)
          switch (p3) {
            case "bestFit": {
              var C2;
              const t3 = null == (C2 = L3.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : C2[0];
              t3 && (n3 = t3);
              break;
            }
            case "initialPlacement":
              n3 = c3;
          }
        if (i3 !== n3)
          return { reset: { placement: n3 } };
      }
      return {};
    } };
  };
  var O = function(e2) {
    return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(r3) {
      const { x: i3, y: a3 } = r3, l3 = await async function(e3, r4) {
        const { placement: i4, platform: a4, elements: l4 } = e3, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(i4), f3 = t(i4), u3 = "x" === o(i4), m3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && u3 ? -1 : 1, d3 = "function" == typeof r4 ? r4(e3) : r4;
        let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d3 };
        return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), u3 ? { x: h3 * g3, y: p3 * m3 } : { x: p3 * m3, y: h3 * g3 };
      }(r3, e2);
      return { x: i3 + l3.x, y: a3 + l3.y, data: l3 };
    } };
  };
  function D(t2) {
    return "x" === t2 ? "y" : "x";
  }
  var E = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
      const { x: r3, y: i3, placement: a3 } = e2, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t3) => {
        let { x: e3, y: n3 } = t3;
        return { x: e3, y: n3 };
      } }, ...m3 } = t2, g3 = { x: r3, y: i3 }, d3 = await s(e2, m3), p3 = o(n(a3)), h3 = D(p3);
      let y3 = g3[p3], x3 = g3[h3];
      if (l3) {
        const t3 = "y" === p3 ? "bottom" : "right";
        y3 = u(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t3]);
      }
      if (c3) {
        const t3 = "y" === h3 ? "bottom" : "right";
        x3 = u(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t3]);
      }
      const w3 = f3.fn({ ...e2, [p3]: y3, [h3]: x3 });
      return { ...w3, data: { x: w3.x - r3, y: w3.y - i3 } };
    } };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
  function n2(t2) {
    var e2;
    return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
  }
  function o2(t2) {
    return n2(t2).getComputedStyle(t2);
  }
  var i2 = Math.min;
  var r2 = Math.max;
  var l2 = Math.round;
  function c2(t2) {
    const e2 = o2(t2);
    let n3 = parseFloat(e2.width), i3 = parseFloat(e2.height);
    const r3 = t2.offsetWidth, c3 = t2.offsetHeight, s3 = l2(n3) !== r3 || l2(i3) !== c3;
    return s3 && (n3 = r3, i3 = c3), { width: n3, height: i3, fallback: s3 };
  }
  function s2(t2) {
    return h2(t2) ? (t2.nodeName || "").toLowerCase() : "";
  }
  var f2;
  function u2() {
    if (f2)
      return f2;
    const t2 = navigator.userAgentData;
    return t2 && Array.isArray(t2.brands) ? (f2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), f2) : navigator.userAgent;
  }
  function a2(t2) {
    return t2 instanceof n2(t2).HTMLElement;
  }
  function d2(t2) {
    return t2 instanceof n2(t2).Element;
  }
  function h2(t2) {
    return t2 instanceof n2(t2).Node;
  }
  function p2(t2) {
    if ("undefined" == typeof ShadowRoot)
      return false;
    return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
  }
  function g2(t2) {
    const { overflow: e2, overflowX: n3, overflowY: i3, display: r3 } = o2(t2);
    return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r3);
  }
  function m2(t2) {
    return ["table", "td", "th"].includes(s2(t2));
  }
  function y2(t2) {
    const e2 = /firefox/i.test(u2()), n3 = o2(t2), i3 = n3.backdropFilter || n3.WebkitBackdropFilter;
    return "none" !== n3.transform || "none" !== n3.perspective || !!i3 && "none" !== i3 || e2 && "filter" === n3.willChange || e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
      const e3 = n3.contain;
      return null != e3 && e3.includes(t3);
    });
  }
  function x2() {
    return /^((?!chrome|android).)*safari/i.test(u2());
  }
  function w2(t2) {
    return ["html", "body", "#document"].includes(s2(t2));
  }
  function v2(t2) {
    return d2(t2) ? t2 : t2.contextElement;
  }
  var b2 = { x: 1, y: 1 };
  function L2(t2) {
    const e2 = v2(t2);
    if (!a2(e2))
      return b2;
    const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, fallback: r3 } = c2(e2);
    let s3 = (r3 ? l2(n3.width) : n3.width) / o3, f3 = (r3 ? l2(n3.height) : n3.height) / i3;
    return s3 && Number.isFinite(s3) || (s3 = 1), f3 && Number.isFinite(f3) || (f3 = 1), { x: s3, y: f3 };
  }
  function E2(t2, e2, o3, i3) {
    var r3, l3;
    void 0 === e2 && (e2 = false), void 0 === o3 && (o3 = false);
    const c3 = t2.getBoundingClientRect(), s3 = v2(t2);
    let f3 = b2;
    e2 && (i3 ? d2(i3) && (f3 = L2(i3)) : f3 = L2(t2));
    const u3 = s3 ? n2(s3) : window, a3 = x2() && o3;
    let h3 = (c3.left + (a3 && (null == (r3 = u3.visualViewport) ? void 0 : r3.offsetLeft) || 0)) / f3.x, p3 = (c3.top + (a3 && (null == (l3 = u3.visualViewport) ? void 0 : l3.offsetTop) || 0)) / f3.y, g3 = c3.width / f3.x, m3 = c3.height / f3.y;
    if (s3) {
      const t3 = n2(s3), e3 = i3 && d2(i3) ? n2(i3) : i3;
      let o4 = t3.frameElement;
      for (; o4 && i3 && e3 !== t3; ) {
        const t4 = L2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4);
        e4.x += (o4.clientLeft + parseFloat(i4.paddingLeft)) * t4.x, e4.y += (o4.clientTop + parseFloat(i4.paddingTop)) * t4.y, h3 *= t4.x, p3 *= t4.y, g3 *= t4.x, m3 *= t4.y, h3 += e4.x, p3 += e4.y, o4 = n2(o4).frameElement;
      }
    }
    return { width: g3, height: m3, top: p3, right: h3 + g3, bottom: p3 + m3, left: h3, x: h3, y: p3 };
  }
  function R(t2) {
    return ((h2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function T2(t2) {
    return d2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
  }
  function C(t2) {
    return E2(R(t2)).left + T2(t2).scrollLeft;
  }
  function F(t2) {
    if ("html" === s2(t2))
      return t2;
    const e2 = t2.assignedSlot || t2.parentNode || p2(t2) && t2.host || R(t2);
    return p2(e2) ? e2.host : e2;
  }
  function W(t2) {
    const e2 = F(t2);
    return w2(e2) ? e2.ownerDocument.body : a2(e2) && g2(e2) ? e2 : W(e2);
  }
  function D2(t2, e2) {
    var o3;
    void 0 === e2 && (e2 = []);
    const i3 = W(t2), r3 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), l3 = n2(i3);
    return r3 ? e2.concat(l3, l3.visualViewport || [], g2(i3) ? i3 : []) : e2.concat(i3, D2(i3));
  }
  function S(e2, i3, l3) {
    let c3;
    if ("viewport" === i3)
      c3 = function(t2, e3) {
        const o3 = n2(t2), i4 = R(t2), r3 = o3.visualViewport;
        let l4 = i4.clientWidth, c4 = i4.clientHeight, s4 = 0, f4 = 0;
        if (r3) {
          l4 = r3.width, c4 = r3.height;
          const t3 = x2();
          (!t3 || t3 && "fixed" === e3) && (s4 = r3.offsetLeft, f4 = r3.offsetTop);
        }
        return { width: l4, height: c4, x: s4, y: f4 };
      }(e2, l3);
    else if ("document" === i3)
      c3 = function(t2) {
        const e3 = R(t2), n3 = T2(t2), i4 = t2.ownerDocument.body, l4 = r2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), c4 = r2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
        let s4 = -n3.scrollLeft + C(t2);
        const f4 = -n3.scrollTop;
        return "rtl" === o2(i4).direction && (s4 += r2(e3.clientWidth, i4.clientWidth) - l4), { width: l4, height: c4, x: s4, y: f4 };
      }(R(e2));
    else if (d2(i3))
      c3 = function(t2, e3) {
        const n3 = E2(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r3 = a2(t2) ? L2(t2) : { x: 1, y: 1 };
        return { width: t2.clientWidth * r3.x, height: t2.clientHeight * r3.y, x: i4 * r3.x, y: o3 * r3.y };
      }(i3, l3);
    else {
      const t2 = { ...i3 };
      if (x2()) {
        var s3, f3;
        const o3 = n2(e2);
        t2.x -= (null == (s3 = o3.visualViewport) ? void 0 : s3.offsetLeft) || 0, t2.y -= (null == (f3 = o3.visualViewport) ? void 0 : f3.offsetTop) || 0;
      }
      c3 = t2;
    }
    return l(c3);
  }
  function A(t2, e2) {
    return a2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
  }
  function H(t2, e2) {
    const i3 = n2(t2);
    let r3 = A(t2, e2);
    for (; r3 && m2(r3) && "static" === o2(r3).position; )
      r3 = A(r3, e2);
    return r3 && ("html" === s2(r3) || "body" === s2(r3) && "static" === o2(r3).position && !y2(r3)) ? i3 : r3 || function(t3) {
      let e3 = F(t3);
      for (; a2(e3) && !w2(e3); ) {
        if (y2(e3))
          return e3;
        e3 = F(e3);
      }
      return null;
    }(t2) || i3;
  }
  function V(t2, e2, n3) {
    const o3 = a2(e2), i3 = R(e2), r3 = E2(t2, true, "fixed" === n3, e2);
    let l3 = { scrollLeft: 0, scrollTop: 0 };
    const c3 = { x: 0, y: 0 };
    if (o3 || !o3 && "fixed" !== n3)
      if (("body" !== s2(e2) || g2(i3)) && (l3 = T2(e2)), a2(e2)) {
        const t3 = E2(e2, true);
        c3.x = t3.x + e2.clientLeft, c3.y = t3.y + e2.clientTop;
      } else
        i3 && (c3.x = C(i3));
    return { x: r3.left + l3.scrollLeft - c3.x, y: r3.top + l3.scrollTop - c3.y, width: r3.width, height: r3.height };
  }
  var O2 = { getClippingRect: function(t2) {
    let { element: e2, boundary: n3, rootBoundary: l3, strategy: c3 } = t2;
    const f3 = "clippingAncestors" === n3 ? function(t3, e3) {
      const n4 = e3.get(t3);
      if (n4)
        return n4;
      let i3 = D2(t3).filter((t4) => d2(t4) && "body" !== s2(t4)), r3 = null;
      const l4 = "fixed" === o2(t3).position;
      let c4 = l4 ? F(t3) : t3;
      for (; d2(c4) && !w2(c4); ) {
        const t4 = o2(c4), e4 = y2(c4);
        "fixed" === t4.position ? r3 = null : (l4 ? e4 || r3 : e4 || "static" !== t4.position || !r3 || !["absolute", "fixed"].includes(r3.position)) ? r3 = t4 : i3 = i3.filter((t5) => t5 !== c4), c4 = F(c4);
      }
      return e3.set(t3, i3), i3;
    }(e2, this._c) : [].concat(n3), u3 = [...f3, l3], a3 = u3[0], h3 = u3.reduce((t3, n4) => {
      const o3 = S(e2, n4, c3);
      return t3.top = r2(o3.top, t3.top), t3.right = i2(o3.right, t3.right), t3.bottom = i2(o3.bottom, t3.bottom), t3.left = r2(o3.left, t3.left), t3;
    }, S(e2, a3, c3));
    return { width: h3.right - h3.left, height: h3.bottom - h3.top, x: h3.left, y: h3.top };
  }, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
    let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
    const i3 = a2(n3), r3 = R(n3);
    if (n3 === r3)
      return e2;
    let l3 = { scrollLeft: 0, scrollTop: 0 }, c3 = { x: 1, y: 1 };
    const f3 = { x: 0, y: 0 };
    if ((i3 || !i3 && "fixed" !== o3) && (("body" !== s2(n3) || g2(r3)) && (l3 = T2(n3)), a2(n3))) {
      const t3 = E2(n3);
      c3 = L2(n3), f3.x = t3.x + n3.clientLeft, f3.y = t3.y + n3.clientTop;
    }
    return { width: e2.width * c3.x, height: e2.height * c3.y, x: e2.x * c3.x - l3.scrollLeft * c3.x + f3.x, y: e2.y * c3.y - l3.scrollTop * c3.y + f3.y };
  }, isElement: d2, getDimensions: function(t2) {
    return a2(t2) ? c2(t2) : t2.getBoundingClientRect();
  }, getOffsetParent: H, getDocumentElement: R, getScale: L2, async getElementRects(t2) {
    let { reference: e2, floating: n3, strategy: o3 } = t2;
    const i3 = this.getOffsetParent || H, r3 = this.getDimensions;
    return { reference: V(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r3(n3) } };
  }, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o2(t2).direction };
  var z = (t2, n3, o3) => {
    const i3 = /* @__PURE__ */ new Map(), r3 = { platform: O2, ...o3 }, l3 = { ...r3.platform, _c: i3 };
    return i(t2, n3, { ...r3, platform: l3 });
  };

  // src/content-script/previewr.ts
  var iframeName = "essentialkit_calc_frame";
  var apis = {
    default: {
      i18n: chrome?.i18n?.getMessage,
      link: chrome?.runtime?.getURL
    },
    demo: {
      i18n: (x3, y3) => x3,
      link: (path) => window.location.host + "/" + path
    },
    ghPage: {
      i18n: (x3, y3) => x3,
      link: (path) => {
        if (window.location.host === "127.0.0.1:3000") {
          return "http://127.0.0.1:3000/website/GENERATED_" + path;
        } else if (window.location.host === "floatingcalc.com") {
          return "https://floatingcalc.com/GENERATED_" + path;
        }
      }
    }
  };
  var Previewr = class {
    constructor() {
      this.logger = new Logger("previewr");
      this.api = apis.default;
      this.onEscHandler = (evt) => {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = evt.keyCode === 27;
        }
        if (isEscape) {
          this.handleMessage({
            action: "escape",
            href: document.location.href,
            sourceFrame: iframeName
          });
        }
      };
    }
    init() {
      if (this.inIframe()) {
        this.logger.debug(
          "Not inserting previewr in iframe: ",
          window.location.href
        );
        return;
      }
      this.listenForCspError();
      document.addEventListener("keydown", this.onEscHandler);
    }
    listenForCspError() {
      document.addEventListener("securitypolicyviolation", (e2) => {
        if (window.name !== iframeName) {
          return;
        }
        this.logger.error("CSP error", e2, e2.blockedURI);
      });
    }
    async handleMessage(message) {
      this.logger.debug("#handleMessage: ", message);
      this.api = apis.default;
      const mode = message.data?.mode;
      if (mode === "demo") {
        this.api = apis.demo;
      } else if (mode === "ghPage") {
        this.api = apis.ghPage;
      }
      switch (message.action) {
        case "toggle-calculator":
          try {
            let link = this.api.link("standalone/calc.html");
            console.log("creatign url", link);
            let newUrl = new URL(link);
            if (newUrl.href === this.url?.href) {
              this.logger.warn("Ignoring update of same URL", newUrl.href);
              return;
            }
            this.url = newUrl;
            this.previewUrl(newUrl, message.point);
            return;
          } catch (e2) {
            this.logger.log("Error creating url: ", e2);
          }
          break;
        case "escape":
          this.dialog?.close();
          break;
        default:
          this.logger.warn("Unhandled action: ", message.action);
          break;
      }
    }
    async previewUrl(url, point) {
      this.logger.log("#previewUrl: ", url);
      const winboxOptions = await this.getWinboxOptions(url, point);
      if (!this.dialog) {
        this.logger.debug("creating new dialog with options", winboxOptions);
        this.dialog = new WinBox(this.api.i18n("appName"), winboxOptions);
      } else {
        this.logger.debug("restoring dialog");
        this.dialog.setUrl(url.href);
        this.dialog.move(
          winboxOptions.x,
          winboxOptions.y,
          false
        );
      }
      this.dialog?.show();
    }
    async getWinboxOptions(url, point) {
      let pos = { x: 0, y: 0, placement: "top" };
      if (point) {
        pos = await this.getPos(point);
      }
      return {
        icon: this.api.link("assets/logo-24x24.png"),
        x: pos.x,
        y: pos.y,
        width: "655px",
        height: "375px",
        autosize: false,
        class: ["no-max", "no-full", "no-min", "no-resize", "no-move"],
        index: await this.getMaxZIndex(),
        html: `<iframe name="${iframeName}" src="${url}"></iframe>`,
        hidden: true,
        shadowel: "floating-calculator-preview-window",
        framename: iframeName,
        onclose: () => {
          this.url = void 0;
          this.dialog = void 0;
          document.querySelectorAll("floating-calculator-preview-window")?.forEach((e2) => e2.remove());
        }
      };
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e2) {
        return true;
      }
    }
    getMaxZIndex() {
      return new Promise((resolve) => {
        const z2 = Math.max(
          ...Array.from(
            document.querySelectorAll("body *"),
            (el) => parseFloat(window.getComputedStyle(el).zIndex)
          ).filter((zIndex) => !Number.isNaN(zIndex)),
          0
        );
        resolve(z2);
      });
    }
    async getPos(rect) {
      const virtualEl = {
        getBoundingClientRect() {
          return rect;
        }
      };
      const div = document.createElement("div");
      div.style.width = "655px";
      div.style.height = "335px";
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      document.body.appendChild(div);
      return z(virtualEl, div, {
        placement: "top",
        strategy: "fixed",
        middleware: [
          O(12),
          b(),
          E({ padding: 5 })
        ]
      }).then(({ x: x3, y: y3, placement, middlewareData }) => {
        return {
          x: x3,
          y: y3,
          placement
        };
      });
    }
  };

  // website/website.ts
  var previewr = new Previewr();
  previewr.init();
  window.addEventListener("load", (e2) => {
    console.log("loaded");
    let lastMousePosition;
    document.addEventListener("mousemove", (e3) => {
      const y3 = e3.y < 20 ? 20 : e3.y;
      lastMousePosition = {
        width: 10,
        height: 10,
        x: e3.x,
        y: y3,
        left: e3.x,
        top: y3,
        right: e3.x + 10,
        bottom: y3 + 10
      };
    });
    document.querySelector("#demo-button")?.addEventListener("click", (e3) => {
      console.log("clicked demo");
      previewr.handleMessage({
        application: "floating-calculator",
        action: "toggle-calculator",
        data: { mode: "ghPage" },
        point: lastMousePosition
      });
    });
  });
})();
