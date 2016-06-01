import ensure from '../lib/index';

describe('ensure', () => {
  it('should throw for falsey predicate', () => {
    (() => ensure(false, 'a')).should.throw(Error, 'a');
  });

  it('should work for truthy predicate', () => {
    ensure(true, 'a');
  });
});

describe('ensure string', () => {
  it('should work for a string', () => {
    (() => ensure.string('a', 'msg')).should.not.throw();
  });

  it('should work for an empty string', () => {
    (() => ensure.string('', 'msg')).should.not.throw();
  });

  it('should not work for null', () => {
    (() => ensure.string(null, 'msg').should.throw(/msg/));
  });

  it('should not work for undefined', () => {
    (() => ensure.string(undefined, 'msg')).should.throw(/msg/);
  });
});

describe('ensure number', () => {
  it('should work for an integer', () => {
    (() => ensure.number(1, 'msg')).should.not.throw();
  });

  it('should work for a decimal', () => {
    (() => ensure.number(1.1, 'msg')).should.not.throw();
  });

  it('should not work for null', () => {
    (() => ensure.number(null, 'msg')).should.throw(/msg/);
  });

  it('should not work for undefined', () => {
    (() => ensure.number(undefined, 'msg')).should.throw(/msg/);
  });
});

describe('ensure object', () => {
  it('should work for an object', () => {
    (() => ensure.object({}, 'msg')).should.not.throw();
  });

  it('should work for null', () => {
    (() => ensure.object(null, 'msg')).should.not.throw();
  });

  it('should not work for numbers', () => {
    (() => ensure.object(1, 'msg')).should.throw(/msg/);
  });

  it('should not work for undefined', () => {
    (() => ensure.object(undefined, 'msg')).should.throw(/msg/);
  });
});

describe('ensure function', () => {
  it('should work for a function', () => {
    (() => ensure.func(() => {}, 'msg')).should.not.throw();
  });

  it('should not work for numbers', () => {
    (() => ensure.func(1, 'msg')).should.throw(/msg/);
  });

  it('should not work for null', () => {
    (() => ensure.func(null, 'msg')).should.throw(/msg/);
  });

  it('should not work for undefined', () => {
    (() => ensure.func(undefined, 'msg')).should.throw(/msg/);
  });
});

describe('ensure non empty string', () => {
  it('should work for a non empty string', () => {
    (() => ensure.nonEmptyString('a', 'msg')).should.not.throw();
  });

  it('should not work for an empty string', () => {
    (() => ensure.nonEmptyString('', 'msg')).should.throw(/msg/);
  });

  it('should not work for numbers', () => {
    (() => ensure.nonEmptyString(1, 'msg')).should.throw(/msg/);
  });

  it('should not work for null', () => {
    (() => ensure.nonEmptyString(null, 'msg')).should.throw(/msg/);
  });

  it('should not work for undefined', () => {
    (() => ensure.nonEmptyString(undefined, 'msg')).should.throw(/msg/);
  });
});
