function ensure(predicate, message) {
  if (!predicate) {
    throw new Error(message || 'ensure failed');
  }
}

ensure.string = (value, name) => {
  if (typeof value !== 'string') {
    throw new Error(`${name || value} is not a string`);
  }
}

ensure.nonEmptyString = (value, name) => {
  ensure.string(value, name);
  if (/^\s*$/.test(value)) {
    throw new Error(`${name || value} is an empty string`);
  }
}

ensure.number = (value, name) => {
  if (typeof value !== 'number') {
    throw new Error(`${name || value} is not a number`);
  }
}

ensure.object = (value, name) => {
  if (typeof value !== 'object') {
    throw new Error(`${name || value} is not an object`);
  }
}

ensure.func = (value, name) => {
  if (typeof value !== 'function') {
    throw new Error(`${name || value} is not a function`);
  }
}

ensure.instanceOf = (value, type, name) => {
  if (!(value instanceof type)) {
    throw new Error(`${name || value} must be an instance of ${type}`);
  }
}

ensure.array = (value, name) => {
  if (!Array.isArray(value)) {
    throw new Error(`${name || value} must be an array`);
  }
}

ensure.date = (value, name) => {
  ensure.instanceOf(value, Date, name);
}

export default ensure;

export function authorize(value) {
  if (!value) {
    throw new Error('forbidden');
  }
  return value;
}
