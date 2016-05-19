import {authorize} from '../lib/index';

describe('authorize', () => {
  it('should throw if value is falsey', () => {
    (() => authorize(false)).should.throw(Error, 'forbidden');
  });

  it('should not throw if value is truthey', () => {
    authorize(true);
  });

  it('should return the same value if it is a truthey', () => {
    const i = {};
    authorize(i).should.equal(i);
  });
});
