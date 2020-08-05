import {isEmpty, isEqual} from 'lodash';

const DefaultMessenger = {
  required: 'Value is required.',
  regex: 'Value incorrect regex.',
  equal: 'Value is not equal',
  maxLength: 'Character length does not match.',
  minLength: 'Character length does not match.',
  minMaxLength: 'Character length does not match.',
};

export type ValidationType = keyof typeof DefaultMessenger;

type FuncValidation = (value: string) => boolean;

interface StackType {
  check: FuncValidation;
  type: ValidationType;
  messenger?: string;
}

interface ErrorType {
  type: ValidationType;
  messenger: string;
}

type MessengerType = string | undefined;

type FuncCheckType = (type: ValidationType) => [boolean, number];

export class Validation {
  private _value: string;
  private _statusError: ErrorType | null;
  private _stackFuncs: StackType[];
  constructor(value: string = '') {
    this._value = value;
    this._statusError = null;
    this._stackFuncs = [];
  }

  private checkFuncs: FuncCheckType = (type: ValidationType) => {
    for (let i = 0; i < this._stackFuncs.length; i++) {
      const item = this._stackFuncs[i];
      if (type === item.type) {
        return [true, i];
      }
    }
    return [false, -1];
  };

  required(messenger: MessengerType = '') {
    const [check] = this.checkFuncs('required');
    if (!check) {
      this._stackFuncs.push({
        check: () => isEmpty(this._value),
        type: 'required',
        messenger,
      });
    }
    return this;
  }

  equal(str: string, messenger: MessengerType = '') {
    const [check, index] = this.checkFuncs('equal');
    if (check) {
      this._stackFuncs[index].check = () => !isEqual(this._value, str);
    } else {
      this._stackFuncs.push({
        check: () => !isEqual(this._value, str),
        type: 'equal',
        messenger,
      });
    }
    return this;
  }

  regex(regex: RegExp, messenger: MessengerType = '') {
    const [check] = this.checkFuncs('regex');
    if (!check) {
      this._stackFuncs.push({
        check: () => !regex.test(this._value),
        type: 'regex',
        messenger,
      });
    }
    return this;
  }

  maxLength(max: number, messenger: MessengerType = '') {
    const [check] = this.checkFuncs('maxLength');
    if (!check) {
      this._stackFuncs.push({
        check: () => this._value.length > max,
        type: 'maxLength',
        messenger,
      });
    }
    return this;
  }

  minLength(min: number, messenger: MessengerType = '') {
    const [check] = this.checkFuncs('minLength');
    if (!check) {
      this._stackFuncs.push({
        check: () => this._value.length < min,
        type: 'minLength',
        messenger,
      });
    }
    return this;
  }

  minMaxLength(min: number, max: number, messenger: MessengerType = '') {
    const [check] = this.checkFuncs('minMaxLength');
    if (!check) {
      this._stackFuncs.push({
        check: () => this._value.length < min || this._value.length > max,
        type: 'minMaxLength',
        messenger:
          messenger ||
          `Characters must be greater than ${min} and smaller than ${max}`,
      });
    }
    return this;
  }

  get error() {
    for (const stack of this._stackFuncs) {
      const {check, type, messenger} = stack;
      if (check(this._value)) {
        const temp = DefaultMessenger[type];
        this._statusError = {
          type,
          messenger: messenger || temp,
        };
        return this._statusError;
      }
    }
    return;
  }

  set value(value: string) {
    this._value = value;
  }
}

// const test = new Validation();
// test.value = 'fuck';
// test.required().equal('fuck');
// console.log(test.error);
