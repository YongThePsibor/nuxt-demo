import { type AllUtils } from './allUtils';

export class LogUtils {
  static instance: LogUtils | null = null;
  parent: AllUtils;

  // 单例
  constructor(parent: AllUtils) {
    if (!LogUtils.instance) {
      LogUtils.instance = this;
    }
    this.parent = parent;

    return LogUtils.instance;
  }

  log(message?: any, ...optionalParams: any[]) {
    return console.log(message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]) {
    return console.warn(message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]) {
    return console.error(message, ...optionalParams);
  }

  info(message?: any, ...optionalParams: any[]) {
    return console.info(message, ...optionalParams);
  }
}
