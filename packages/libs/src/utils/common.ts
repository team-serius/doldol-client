import { UUID_REGEX } from '@libs/constants/regex';

/**
 * url의 param으로 받은 id 값을 validation
 */
export const getIdFromUrl = (id: string | string[] | undefined) => {
  if (id && typeof id === 'string') {
    // TODO: id 의 data type에 따라 validation 추가
    return id;
  }

  throw new Error('URL에 id 값 없음');
};

export const isEmptyOrSpace = (text?: string | null) => {
  return text == undefined || text === null || text?.trim() === '';
};

export const isEmptyButNumber = (number?: number | null) => {
  return number == undefined || number === null;
};

/** Event Handling */
export const preventEvent = async (event: any) => {
  // this part is for stopping parent forms to trigger their submit
  if (event) {
    // sometimes not true, e.g. React Native
    if (typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    if (typeof event.stopPropagation === 'function') {
      // prevent any outer forms from receiving the event too
      event.stopPropagation();
    }
  }
};

export const isEmptyObject = (obj: Record<string, any>) => {
  return Object.keys(obj).length === 0;
};

export const hasKey = (obj: Record<string, any>, key: string) => {
  return Object.keys(obj).includes(key);
};

export const has = (obj: Record<string, any>, keys: string[]) => {
  return Object.keys(obj).findIndex((el) => keys.includes(el)) >= 0;
};

export function isJSON(str: string) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    // NOTHING
  }
  return false;
}

// readonly array에서 값이 일치하는지 확인
// 만약 일치한다면 value는 T type으로 간주함.
// 일치하는 값이 없을 경우 false 반환. 있을 경우 true.
export function contains<T extends string>(list: ReadonlyArray<T>, value: string): value is T {
  return list.some((item) => item === value);
}

export function isLastIndex<T>(index: number, list?: Array<T> | null) {
  return index == (list?.length ?? 1) - 1;
}

export function removeEmpty<T>(obj: T | any) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
    else if (obj[key] == null) delete obj[key];
  });
  return obj;
}

export const isValidUUID = (uuid: string | string[] | undefined) => {
  return typeof uuid == 'string' && UUID_REGEX.test(uuid);
};
