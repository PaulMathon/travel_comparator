import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';
import { GoyavError } from './GoyavError';

export class JsonUtils {

  static async readJson(jsonPath: string): Promise<Object> {
    try {
      const readFile = util.promisify(fs.readFile);
      const data = await readFile(path.resolve(process.cwd(), jsonPath), 'utf8');
      const words = JSON.parse(data);
      return words;
    } catch (err) {
      throw new GoyavError(err.error, err.message);
    }
  }
}
