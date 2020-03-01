import fs from 'fs';

export default class DataUtils {

    static readJSON(path: string): Object {
        const data = fs.readFileSync(path, 'utf8');
        const words = JSON.parse(data);
        return words;
    }
}