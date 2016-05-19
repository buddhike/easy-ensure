import {authorize} from '../lib/index';

describe('authorize', () => {
  it('should throw if value is falsey', () => {
    (() => authorize(false)).should.throw(Error, 'forbidden');
  });

  it('should not throw if value is truthey', () => {
    authorize(true);
  });
});
