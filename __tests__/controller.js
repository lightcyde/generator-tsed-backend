'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tsed-backend:controller-without-name-argument', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller')).withPrompts({ controllerName: 'test' });
  });

  it('creates files', () => {
    assert.file(['src/controllers/test/test.controller.ts']);
    assert.file(['src/controllers/test/test.controller.spec.ts']);
  });
});

describe('generator-tsed-backend:controller-without-name-argument', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller')).withArguments('test');
  });

  it('creates files', () => {
    assert.file(['src/controllers/test/test.controller.ts']);
    assert.file(['src/controllers/test/test.controller.spec.ts']);
  });
});
