import ApiSNCF from './src/api/sncf';

const api = new ApiSNCF();

const from = { name: 'Commune de Paris', postalCode: 75056 };
const to = { name: 'Commune de Lyon', postalCode: 69123 };
const where = { from, to };

api.getAvailables(where, new Date())
    .then(lines => {
        const linesCopy: any = lines;
        console.log('LINES', linesCopy.journeys);
    });

function multipleRequests(numberOfRequests: number) {
    let count = 0;
    async function whilePromise(): Promise<number> {
        if (count < numberOfRequests) {
            count ++;
            const lines = await api.getAvailables(where, new Date());
            return whilePromise();
        }
        return count;
    }
    return whilePromise();
}

// multipleRequests(5);
