import ensure from '../lib/index';

describe('ensure', () => {
  it('should throw if predicate is falsey', () => {
    (() => ensure(false, 'a')).should.throw(Error, 'a');
  });

  it('should not throw if predicate is truthy', () => {
    ensure(true, 'a');
  });
});
