export default function(predicate, message) {
  if (!predicate) {
    throw new Error(message || 'ensure failed');
  }
}

export function authorize(value) {
  if (!value) {
    throw new Error('forbidden');
  }
  return value;
}
