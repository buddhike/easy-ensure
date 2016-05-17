export default function(predicate, message) {
  if (!predicate) {
    throw new Error(message || 'ensure failed');
  }
}
