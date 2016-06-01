function ensure(predicate, message) {
  if (!predicate) {
    throw new Error(message || 'ensure failed');
  }
}

ensure.string = (value, message) => {
  if (typeof value !== 'string') {
    throw new Error(message || `${value} is not a string`);
  }
}

ensure.nonEmptyString = (value, message) => {
  ensure.string(value, message);
  if (/^\s*$/.test(value)) {
    throw new Error(message || `${value} is an empty string`);
  }
}

ensure.number = (value, message) => {
  if (typeof value !== 'number') {
    throw new Error(message || `${value} is not a number`);
  }
}

ensure.object = (value, message) => {
  if (typeof value !== 'object') {
    throw new Error(message || `${value} is not an object`);
  }
}

ensure.func = (value, message) => {
  if (typeof value !== 'function') {
    throw new Error(message || `${value} is not a function`);
  }
}

export default ensure;

export function authorize(value) {
  if (!value) {
    throw new Error('forbidden');
  }
  return value;
}
