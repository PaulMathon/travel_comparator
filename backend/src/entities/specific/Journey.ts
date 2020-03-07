import {City} from './City';

interface Where {
    from: string,
    to: string
}

interface When {
    from: string,
    to: string
}

export class Journey {

    constructor(private where: Where,
                private when: When) { }
    
}
