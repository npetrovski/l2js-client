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

    static hex(data: Uint8Array) {
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
    };
}
