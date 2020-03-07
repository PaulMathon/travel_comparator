import * as fs from 'fs';

export class JsonUtils {

    static readJson(path: string): Object {
        const data = fs.readFileSync(path, 'utf8');
        const words = JSON.parse(data);
        return words;
    }
}
