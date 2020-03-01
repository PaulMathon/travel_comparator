import City from './City';

interface Where {
    from: string,
    to: string
}

interface When {
    from: string,
    to: string
}

export default class Train {

    constructor(private where: Where,
                private when: When) { }
    
}
