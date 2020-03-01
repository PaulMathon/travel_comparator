import Express from 'express';

export class Server {
    
    private server: Express.Application;

    constructor() {
        this.server = Express();
    }
}
