import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';
import { GoyavError, IGoyavError, Either, error, valid } from './GoyavError';

export class JsonUtils {

  static async readJson(jsonPath: string): Promise<Either<IGoyavError, Object>> {
    try {
      const readFile = util.promisify(fs.readFile);
      const data = await readFile(path.resolve(process.cwd(), jsonPath), 'utf8');
      const words = JSON.parse(data);
      return valid(words);
    } catch (err) {
      return error(new GoyavError(err.error, err.message));
    }
  }
}
