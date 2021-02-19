import ILogger from "./ILogger";

export enum LogLevel {
  NONE = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 4,
  DEBUG = 8,
}

export default class Logger implements ILogger {
  private _context = "";

  private _logLevel: LogLevel = 1;

  constructor(ctx: string, level?: LogLevel) {
    this._context = ctx;
    if (level) {
      this._logLevel = level;
    } else if (process?.env?.L2JSC_LOG_LEVEL) {
      this._logLevel = parseInt(process.env.L2JSC_LOG_LEVEL, 10) as LogLevel;
    }
  }

  static getLogger(ctx: string): Logger {
    return new Logger(ctx);
  }

  debug(message: string, ...data: any[]): void {
    if (this._logLevel >= LogLevel.DEBUG) {
      this._log("\x1b[36m[" + new Date().toLocaleString() + "]\x1b[m DEBUG " + this._context + " " + message, data);
    }
  }
  error(message: string, ...data: any[]): void {
    if (this._logLevel >= LogLevel.ERROR) {
      this._log("\x1b[31m[" + new Date().toLocaleString() + "]\x1b[m ERROR " + this._context + " " + message, data);
    }
  }
  warn(message: string, ...data: any[]): void {
    if (this._logLevel >= LogLevel.WARNING) {
      this._log("\x1b[33m[" + new Date().toLocaleString() + "]\x1b[m WARN " + this._context + " " + message, data);
    }
  }
  info(message: string, ...data: any[]): void {
    if (this._logLevel >= LogLevel.INFO) {
      this._log("\x1b[32m[" + new Date().toLocaleString() + "]\x1b[m INFO " + this._context + " " + message, data);
    }
  }
  private _log(msg: string, data: any[]): void {
    if (data.length > 0) {
      console.log(msg, data);
    } else {
      console.log(msg);
    }
  }

  static hexString(data: Uint8Array): string {
    return (
      " ".repeat(7) +
      Array.from(new Array(16), (n, v) => ("0" + (v & 0xff).toString(16)).slice(-2).toUpperCase()).join(" ") +
      "\r\n" +
      "=".repeat(54) +
      "\r\n" +
      Array.from(Array.from(data), (byte, k) => {
        return (
          (k % 16 === 0
            ? ("00000" + ((Math.ceil(k / 16) * 16) & 0xffff).toString(16)).slice(-5).toUpperCase() + "  "
            : "") +
          ("0" + (byte & 0xff).toString(16)).slice(-2) +
          ((k + 1) % 16 === 0 ? "\r\n" : " ")
        );
      })
        .join("")
        .toUpperCase() +
      "\r\n"
    );
  }
}
