import { type AllUtils } from './allUtils';

export class ConstsUtils {
  parent: AllUtils;
  constructor(parent: AllUtils) {
    this.parent = parent;
  }

  readonly emptyFn = () => {};

  readonly emptyObject = {};

  readonly emptyArray = [];

  readonly emptyMap = new Map();
}
