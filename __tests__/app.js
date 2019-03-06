'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tsed-backend:app-without-demo-content-prompt', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ appName: 'testApp', addDemoContent: false });
  });

  it('creates files', () => {
    assert.file(['testApp/scripts/mocha/register.js']);
    assert.file(['testApp/spec/style.css']);
    assert.file(['testApp/spec/swagger.default.json']);
    assert.file(['testApp/src/config/config.ts']);
    assert.file(['testApp/src/controllers/rest.controller.ts']);
    assert.noFile(['testApp/src/controllers/hello/hello.controller.ts']);
    assert.noFile(['testApp/src/controllers/hello/hello.controller.spec.ts']);
    assert.file(['testApp/src/services/.gitkeep']);
    assert.noFile(['testApp/src/services/_gitkeep']);
    assert.noFile(['testApp/src/services/hello/hello.service.ts']);
    assert.noFile(['testApp/src/services/hello/hello.service.spec.ts']);
    assert.file(['testApp/src/server.ts']);
    assert.file(['testApp/test/mocha.opts']);
    assert.file(['testApp/.gitignore']);
    assert.noFile(['testApp/_gitignore']);
    assert.file(['testApp/.nycrc']);
    assert.noFile(['testApp/_nycrc']);
    assert.file(['testApp/ecosystem.config.js']);
    assert.file(['testApp/package.json']);
    assert.file(['testApp/package-lock.json']);
    assert.file(['testApp/readme.md']);
    assert.file(['testApp/server.config.json']);
    assert.file(['testApp/tsconfig.json']);
    assert.file(['testApp/tslint.json']);
  });
});

describe('generator-tsed-backend:app-with-demo-content-prompt', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ appName: 'testApp', addDemoContent: true });
  });

  it('creates files', () => {
    assert.file(['testApp/scripts/mocha/register.js']);
    assert.file(['testApp/spec/style.css']);
    assert.file(['testApp/spec/swagger.default.json']);
    assert.file(['testApp/src/config/config.ts']);
    assert.file(['testApp/src/controllers/rest.controller.ts']);
    assert.file(['testApp/src/controllers/hello/hello.controller.ts']);
    assert.file(['testApp/src/controllers/hello/hello.controller.spec.ts']);
    assert.noFile(['testApp/src/services/.gitkeep']);
    assert.file(['testApp/src/services/hello/hello.service.ts']);
    assert.file(['testApp/src/services/hello/hello.service.spec.ts']);
    assert.noFile(['testApp/src/services/_gitkeep']);
    assert.file(['testApp/src/server.ts']);
    assert.file(['testApp/test/mocha.opts']);
    assert.file(['testApp/.gitignore']);
    assert.noFile(['testApp/_gitignore']);
    assert.file(['testApp/.nycrc']);
    assert.noFile(['testApp/_nycrc']);
    assert.file(['testApp/ecosystem.config.js']);
    assert.file(['testApp/package.json']);
    assert.file(['testApp/package-lock.json']);
    assert.file(['testApp/readme.md']);
    assert.file(['testApp/server.config.json']);
    assert.file(['testApp/tsconfig.json']);
    assert.file(['testApp/tslint.json']);
  });
});

describe('generator-tsed-backend:app-without-demo-content-argument', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withArguments('testApp --noDemo');
  });

  it('creates files', () => {
    assert.file(['testApp/scripts/mocha/register.js']);
    assert.file(['testApp/spec/style.css']);
    assert.file(['testApp/spec/swagger.default.json']);
    assert.file(['testApp/src/config/config.ts']);
    assert.file(['testApp/src/controllers/rest.controller.ts']);
    assert.noFile(['testApp/src/controllers/hello/hello.controller.ts']);
    assert.noFile(['testApp/src/controllers/hello/hello.controller.spec.s']);
    assert.file(['testApp/src/services/.gitkeep']);
    assert.noFile(['testApp/src/services/_gitkeep']);
    assert.noFile(['testApp/src/services/hello/hello.service.ts']);
    assert.noFile(['testApp/src/services/hello/hello.service.spec.s']);
    assert.file(['testApp/src/server.ts']);
    assert.file(['testApp/test/mocha.opts']);
    assert.file(['testApp/.gitignore']);
    assert.noFile(['testApp/_gitignore']);
    assert.file(['testApp/.nycrc']);
    assert.noFile(['testApp/_nycrc']);
    assert.file(['testApp/ecosystem.config.js']);
    assert.file(['testApp/package.json']);
    assert.file(['testApp/package-lock.json']);
    assert.file(['testApp/readme.md']);
    assert.file(['testApp/server.config.json']);
    assert.file(['testApp/tsconfig.json']);
    assert.file(['testApp/tslint.json']);
  });
});

describe('generator-tsed-backend:app-with-demo-argument', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withArguments('testApp --demo');
  });

  it('creates files', () => {
    assert.file(['testApp/scripts/mocha/register.js']);
    assert.file(['testApp/spec/style.css']);
    assert.file(['testApp/spec/swagger.default.json']);
    assert.file(['testApp/src/config/config.ts']);
    assert.file(['testApp/src/controllers/rest.controller.ts']);
    assert.file(['testApp/src/controllers/hello/hello.controller.ts']);
    assert.file(['testApp/src/controllers/hello/hello.controller.spec.ts']);
    assert.noFile(['testApp/src/services/.gitkeep']);
    assert.noFile(['testApp/src/services/_gitkeep']);
    assert.file(['testApp/src/services/hello/hello.service.ts']);
    assert.file(['testApp/src/services/hello/hello.service.spec.ts']);
    assert.file(['testApp/src/server.ts']);
    assert.file(['testApp/test/mocha.opts']);
    assert.file(['testApp/.gitignore']);
    assert.noFile(['testApp/_gitignore']);
    assert.file(['testApp/.nycrc']);
    assert.noFile(['testApp/_nycrc']);
    assert.file(['testApp/ecosystem.config.js']);
    assert.file(['testApp/package.json']);
    assert.file(['testApp/package-lock.json']);
    assert.file(['testApp/readme.md']);
    assert.file(['testApp/server.config.json']);
    assert.file(['testApp/tsconfig.json']);
    assert.file(['testApp/tslint.json']);
  });
});
