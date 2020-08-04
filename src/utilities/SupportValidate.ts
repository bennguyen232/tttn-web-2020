import _ from "lodash";

export enum TypesCheck {
  require = "require",
  regex = "regex",
  minMax = "minMax",
}

interface CheckRequire {
  key: TypesCheck;
  messenger?: string;
}

interface CheckRegex {
  key: TypesCheck;
  messenger?: string;
  regex: RegExp;
}

interface CheckLength {
  key: TypesCheck;
  messenger?: string;
  max?: number;
  min?: number;
}

type TypesValidate = CheckRegex | CheckLength | CheckRequire;

export interface CheckValidation<T> {
  key: keyof T;
  types?: TypesValidate[];
}

const isHollow = (str: string, messenger: string | undefined) => {
  if (str === "" || str === undefined) {
    throw messenger || "Field is requirement";
  }
};

const isRegex = (str: string, regex: RegExp, messenger: string | undefined) => {
  if (!regex.test(str)) {
    throw messenger || "Field is not equal";
  }
};

const switchCheck = (
  str: string,
  key: TypesCheck,
  check: TypesValidate,
  messengerKey: string | undefined
) => {
  if (key === TypesCheck.require) {
    isHollow(str, messengerKey);
    return;
  }
  if (key === TypesCheck.regex) {
    let regex = _.get(check, "regex");
    isRegex(str, regex, messengerKey);
    return;
  }
};

const checkValidate = (str: string, setting: CheckValidation<any>) => {
  const { types } = setting;
  if (types) {
    for (let idx = 0; idx < types.length; idx++) {
      const item = types[idx];
      switchCheck(str, item.key, item, item.messenger || undefined);
    }
  }
};

export const checkValidates = (
  data: Object,
  settings: CheckValidation<any>[]
) => {
  const keys = Object.keys(data);
  for (let idx = 0; idx < settings.length; idx++) {
    const item = settings[idx];
    if (_.findIndex(keys, (i) => i === item.key) >= 0) {
      checkValidate(_.get(data, item.key, ""), item);
    }
  }
};
