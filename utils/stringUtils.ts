import { type ParsedUrlQueryInput, stringify } from 'node:querystring';
import { useToArray } from '#imports';

export class StringUtils {
  static paramsSerializer(obj: ParsedUrlQueryInput) {
    return stringify(obj);
  }

  /**
   * 获取字符串 (兼容 Unicode) Array
   * ***
   * 类似 👉🏿👩‍👩‍👧‍👦 之类的表情，[...str], str.split("")，得到的结果是不同且错误的。
   */
  static getStrArr(str: string) {
    return useToArray(str);
  }

  static dateFormatToSec = 'YYYY-MM-DD HH:mm:ss';
  static dateFormatToSecBySlash = 'YYYY/MM/DD HH:mm:ss';
}
