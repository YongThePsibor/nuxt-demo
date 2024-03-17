import { ConstsUtils } from './constsUtils';
import { LogUtils } from './logUtils';
import { StorageUtils } from './storageUtils';
import { StringUtils } from './stringUtils';

export class AllUtils {
  utilsArr: any[];
  constsUtils: ConstsUtils;
  logUtils: LogUtils;
  storageUtils: StorageUtils;
  stringUtils: StringUtils;
  constructor() {
    this.constsUtils = new ConstsUtils(this);
    this.logUtils = new LogUtils(this);
    this.storageUtils = new StorageUtils(this);
    this.stringUtils = StringUtils;
    this.utilsArr = [];
  }
}
