import { SncfApi } from '../src/api/SncfApi';
import { KiwiApi } from '../src/api/KiwiApi';

const apiSncf = new SncfApi();
const apiKiwi = new KiwiApi();

/* const from = {
    name: 'Commune de Paris',
    postalCode: 75056
};
const to = {
    name: 'Commune de Lyon',
    postalCode: 69123
};

apiSncf.getAvailables({ from, to }, new Date())
    .then((lines: any) => {
        console.log('LINES', lines.journeys);
    });

function multipleRequests(numberOfRequests: number) {
    let count = 0;
    async function whilePromise(): Promise<number> {
        if (count < numberOfRequests) {
            count ++;
            const lines = await apiSncf.getAvailables({ from, to }, new Date());
            return whilePromise();
        }
        return count;
    }
    return whilePromise();
}
*/

const from = {
    name: 'New York, NY - La Guardia',
    postalCode: 75056
};
const to = {
    name: 'Paris, France - Charles Degaulle',
    postalCode: 69123
};

apiKiwi.getAvailables(from, to, new Date('April 17, 2020'))
    .then((fly: any) => {
        console.log('FLIES', fly);
    });

// multipleRequests(5);
