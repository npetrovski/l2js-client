import ILogger from "./ILogger";

export enum LogLevel {
  NONE = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 4,
  DEBUG = 8,
}

const logLevel = process?.env?.L2JSC_LOG_LEVEL
  ? (parseInt(process.env.L2JSC_LOG_LEVEL, 10) as LogLevel)
  : LogLevel.INFO;

export default class Logger implements ILogger {
  private static _instance = new Logger();

  constructor(public context = "") {
    if (Logger._instance) {
      throw new Error("Error: Instantiation failed: Use Logger.getLogger() instead of new.");
    }
    Logger._instance = this;
  }

  static getLogger(ctx: string): Logger {
    return new Proxy(Logger._instance, {
      get: (target: Logger, prop: string, receiver: unknown) => {
        if (prop === "context") {
          return ctx;
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  debug(message: string | any, ...data: any[]): void {
    if (logLevel >= LogLevel.DEBUG) {
      this._log("\x1b[36m[" + new Date().toLocaleString() + "]\x1b[m DEBUG " + this.context + " " + message, data);
    }
  }
  error(message: string | any, ...data: any[]): void {
    if (logLevel >= LogLevel.ERROR) {
      this._log("\x1b[31m[" + new Date().toLocaleString() + "]\x1b[m ERROR " + this.context + " " + message, data);
    }
  }
  warn(message: string | any, ...data: any[]): void {
    if (logLevel >= LogLevel.WARNING) {
      this._log("\x1b[33m[" + new Date().toLocaleString() + "]\x1b[m WARN " + this.context + " " + message, data);
    }
  }
  info(message: string | any, ...data: any[]): void {
    if (logLevel >= LogLevel.INFO) {
      this._log("\x1b[32m[" + new Date().toLocaleString() + "]\x1b[m INFO " + this.context + " " + message, data);
    }
  }
  private _log(msg: string | any, data: any[]): void {
    if (data.length > 0) {
      console.log(msg, data);
    } else {
      console.log(msg);
    }
  }
}
