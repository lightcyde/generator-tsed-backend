'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tsed-backend:service', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service')).withPrompts({ serviceName: 'test' });
  });

  it('creates files', () => {
    assert.file(['src/services/test/test.service.ts']);
    assert.file(['src/services/test/test.service.spec.ts']);
  });
});

describe('generator-tsed-backend:service-without-name-argument', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service')).withArguments('test');
  });

  it('creates files', () => {
    assert.file(['src/services/test/test.service.ts']);
    assert.file(['src/services/test/test.service.spec.ts']);
  });
});
