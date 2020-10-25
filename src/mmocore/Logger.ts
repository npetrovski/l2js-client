import ILogger from "./ILogger";

export enum LogLevel {
    SEVERE,
    WARNING,
    INFO,
    CONFIG,
    FINE,
    FINER,
    FINEST,
}

export default class Logger implements ILogger {

    private _context: string = "";

    constructor(ctx: string) {
        this._context = ctx;
    }

    static getLogger(ctx: string): Logger {
        return new Logger(ctx);
    }

    debug(message: string, ...data: any[]): void {
        this._log(LogLevel.FINE, "\x1b[36m[" + new Date().toLocaleString() + "]\x1b[m DEBUG " + this._context + " " + message, data);
    }
    warn(message: string, ...data: any[]): void {
        this._log(LogLevel.WARNING, "\x1b[33m[" + new Date().toLocaleString() + "]\x1b[m WARN " + this._context + " " + message, data);
    }
    error(message: string, ...data: any[]): void {
        this._log(LogLevel.SEVERE, "\x1b[31m[" + new Date().toLocaleString() + "]\x1b[m ERROR " + this._context + " " + message, data);
    }
    info(message: string, ...data: any[]): void {
        this._log(LogLevel.INFO, "\x1b[32m[" + new Date().toLocaleString() + "]\x1b[m INFO " + this._context + " " + message, data);
    }
    private _log(type: LogLevel, msg: string, data: any[]): void {
        if (data.length > 0) {
            console.log(msg, data);
        } else {
            console.log(msg);
        }
    }
}
