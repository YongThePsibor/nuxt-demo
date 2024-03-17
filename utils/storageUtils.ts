import { type AllUtils } from './allUtils';

enum StorageKeyEnum {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  LOGOUT_REASON = 'LOGOUT_REASON',
  USER_ID = 'USER_ID',
}

interface ACCESS_TOKEN_TYPE {
  accessToken: string;
  refreshToken: string;
}

enum LOGOUT_REASON_TYPE {
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}

type USER_ID_TYPE = string;

interface StorageResultType {
  [StorageKeyEnum.ACCESS_TOKEN]: ACCESS_TOKEN_TYPE;
  [StorageKeyEnum.LOGOUT_REASON]: LOGOUT_REASON_TYPE;
  [StorageKeyEnum.USER_ID]: USER_ID_TYPE;
}

export class StorageUtils {
  static instance: StorageUtils | null = null;
  parent: AllUtils;
  private userId = '';
  readonly keysStoredByUserId = [StorageKeyEnum.LOGOUT_REASON];

  // 单例
  constructor(parent: AllUtils) {
    if (!StorageUtils.instance) {
      StorageUtils.instance = this;
    }
    this.parent = parent;
    return StorageUtils.instance;
  }

  /**
   * 是否按照 userId 存储， ie 不同用户的信息都会存下来
   */
  isKeyStoredByUser(key: StorageKeyEnum) {
    return this.keysStoredByUserId.includes(key);
  }

  composeStorageKeyByEnum(key: StorageKeyEnum) {
    if (this.isKeyStoredByUser(key)) {
      return `${key}_${this.userId}`;
    } else {
      return `${key}_`;
    }
  }

  getDefaultValue<ValueKey extends StorageKeyEnum>(key: ValueKey): StorageResultType[ValueKey] {
    if (key === StorageKeyEnum.ACCESS_TOKEN) {
      return {
        accessToken: '',
        refreshToken: '',
      } as any;
    }
    return '' as any;
  }

  private transformResultToJs(str: string, key: StorageKeyEnum) {
    let toJsResult;

    try {
      toJsResult = JSON.parse(str);
    } catch (err) {
      this.parent.logUtils.log('transformResultToJs error', err);
      toJsResult = this.getDefaultValue(key);
    }

    return toJsResult;
  }

  clearStorage() {
    localStorage.clear();
  }

  getLocalStorage<ValueKey extends StorageKeyEnum>(key: ValueKey): StorageResultType[ValueKey] {
    const composedKey = this.composeStorageKeyByEnum(key);
    const resultStr = localStorage.getItem(composedKey) || '';
    return this.transformResultToJs(resultStr, key);
  }

  setLocalStorage<ValueKey extends StorageKeyEnum>(key: ValueKey, value: StorageResultType[ValueKey]) {
    const composedKey = this.composeStorageKeyByEnum(key);

    const str = JSON.stringify(value);

    try {
      localStorage.setItem(composedKey, str);
    } catch (err) {
      // localStorage 写满了，报错，此时清除所有 localStorage
      this.parent.logUtils.log('setLocalStorage error', err);
      this.clearStorage();
    }
  }
}
