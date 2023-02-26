import * as Sentry from '@sentry/browser';
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://11fa19323b3a48d5882f26d3a98c1864@o526305.ingest.sentry.io/4504743091699712',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.1,
  release: 'floating-calculator@23.2.10',
  environment: 'DEV',
});

/**
 * Simple util for logging to console.
 *
 * Ensure output level is set to 'verbose' to see debug logs.
 */


enum LogLevel {
  ERROR,
  WARNING,
  INFO,
  DEBUG
}
export class Logger {
  static debugMode = true;

  tag = "";

  constructor(tag: string) {
    this.tag = tag;
  }

  debug(...messages: unknown[]) {
    this.internalLog(LogLevel.DEBUG, ...messages);
  }
  log(...messages: unknown[]) {
    this.internalLog(LogLevel.INFO, ...messages);
  }
  warn(...messages: unknown[]) {    
    this.internalLog(LogLevel.WARNING, ...messages);
  }
  error(...messages: unknown[]) {
    this.internalLog(LogLevel.ERROR, ...messages);
  }

  internalLog(level: LogLevel, ...messages: unknown[]) {    
    const d = new Date(Date.now());
    const output = ["%c%s %s",
      "color: blue",
      `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`,
      this.tag,
      ...messages];

      if (!Logger.debugMode) {
        switch(level) {
          case LogLevel.WARNING:
          case LogLevel.INFO:
            Sentry.captureMessage(messages.join(" "));
            break;
          case LogLevel.ERROR:
            Sentry.captureException(messages)
            break;
        }
        return;
      } else {
        switch(level) {
          case LogLevel.DEBUG:
            console.debug(...output);
            break;
          case LogLevel.WARNING:
            console.warn(...output);
            break;
          case LogLevel.INFO:
            console.log(...output);
            break;
          case LogLevel.ERROR:
            console.error(...output);
            break;
        }
      }      
  }
}
