'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tsed-backend:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ appName: 'test' });
  });

  it('creates files', () => {
    console.log(path.resolve('./'));
    assert.file(['scripts/mocha/register.js']);
    assert.file(['spec/style.css']);
    assert.file(['spec/swagger.default.json']);
    assert.file(['src/config/config.ts']);
    assert.file(['src/controllers/rest.controller.ts']);
    assert.file(['src/controllers/hello/hello.controller.ts']);
    assert.file(['src/controllers/hello/hello.controller.spec.ts']);
    assert.file(['src/services/.gitkeep']);
    assert.noFile(['src/services/_gitkeep']);
    assert.file(['src/index.ts']);
    assert.file(['src/server.ts']);
    assert.file(['test/mocha.opts']);
    assert.file(['.gitignore']);
    assert.noFile(['_gitignore']);
    assert.file(['.nycrc']);
    assert.noFile(['_nycrc']);
    assert.file(['ecosystem.config.js']);
    assert.file(['package.json']);
    assert.file(['package-lock.json']);
    assert.file(['readme.md']);
    assert.file(['server.config.json']);
    assert.file(['tsconfig.json']);
    assert.file(['tslint.json']);
  });
});
