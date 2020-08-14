import {isEmpty} from 'lodash';

export * from './CheckingArray';
export * from './Validation';
export * from './useGlobalStyles';

export const Sleep = async (second: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, second);
  });
};

export const SlowFetch = async (func: Promise<any | void>, timing = 1200) => {
  const all: [Promise<any>, Promise<void>] = [func, Sleep(timing)];
  return Promise.all(all).then(([res]) => res);
};

export const mulClasses = (values: string | string[]) => {
  if (typeof values === 'string') return values;
  let strReturn = '';
  for (const item of values) {
    if (!isEmpty(item)) {
      strReturn += ` ${item}`;
    }
  }
  return strReturn;
};
