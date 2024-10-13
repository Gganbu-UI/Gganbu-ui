import { isNonNull } from './assertion';

export const pick = <T extends Record<string, T>, K extends keyof T>(
  object: T,
  keys: K[],
) =>
  keys.reduce((obj, key) => {
    const value = object[key];

    if (isNonNull(value)) {
      return {
        ...obj,
        [key]: value,
      };
    }

    return obj;
  }, {});

export const omit = <T extends Record<string, T>, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  /*
   * Return a (shallow) copy of an object with some specified set of keys removed.
   */
  const clone = { ...object };

  for (const key of keys) {
    if (key in clone) delete clone[key as string];
  }
  return clone;
};

export const split = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): [Pick<T, K>, Omit<T, K>] => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const dKeys = Object.keys(descriptors);

  const matched = {} as Pick<T, K>;
  const rest = {} as Omit<T, K>;

  for (const key of dKeys) {
    if (keys.includes(key as K)) {
      Object.defineProperty(matched, key, descriptors[key]);
    } else {
      Object.defineProperty(rest, key, descriptors[key]);
    }
  }

  return [matched, rest];
};
