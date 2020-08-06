export * from './CheckingArray';
export * from './Validation';
export * from './SupportValidate';

export const Sleep = async (second: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, second);
  });
};

export const SlowFetch = async (func: Promise<any | void>, timing = 1200) => {
  const all: [Promise<any>, Promise<void>] = [func, Sleep(timing)];
  return Promise.all(all).then(([res]) => res);
};
