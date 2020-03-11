import { GoyavError } from "../../utils/GoyavError";

export class IAAT {
  
  private value: string;
  private readonly iaatLenght = 3;

  constructor(iaat: string) {
    if (iaat.length === this.iaatLenght && iaat.toUpperCase() === iaat) {
      this.value = iaat
    } else {
      throw new GoyavError('BadRequest', `The retrieved IAAT hasn't a valid format, got ${iaat}`);
    }
  }

  getValue(): string {
    return this.value;
  }
}