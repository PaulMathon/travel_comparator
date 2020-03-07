class LogLevel {

    private logLevel: string;
    private logLevels: {[key: string]: number} = {
        'info': 0,
        'warn': 1,
        'debug': 2,
        'error': 3
    }

    constructor(logLevel: string) {
        this.logLevel = logLevel;
    }

    toInt() {
        return this.logLevels[this.logLevel];
    }
}

export default class Logger {
    
    private logLevel: LogLevel;

    constructor(logLevel: string) {
        this.logLevel = new LogLevel(logLevel);
    }

    public info(message: string) {
        if (this.logLevel.toInt() >= 0) {
            console.info(message);
        }
    }

    public warn(message: string) {
        if (this.logLevel.toInt() >= 1) {
            console.warn(message);
        }
    }

    public debug(message: string) {
        if (this.logLevel.toInt() >= 2) {
            console.debug(message);
        }
    }

    public error(message: string) {
        if (this.logLevel.toInt() >= 3) {
            console.error(message);
        }
    }
}
