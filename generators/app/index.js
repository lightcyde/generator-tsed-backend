'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appName` a possible command line argument.
    this.argument('appName', { type: String, required: false });
    // This method adds support for a `--demo` flag
    this.option('demo', { type: Boolean, required: false });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the stylish ${chalk.blue('Ts.ED backend')} generator!\n
        I will create a nice backend project for you!`)
    );

    const prompts = [];
    if (!this.options.appName) {
      prompts.push({
        name: 'appName',
        message: 'What name should we give your backend? 🤖'
      });
    }

    if (!this.options.demo) {
      prompts.push({
        type: 'confirm',
        name: 'addDemoContent',
        message: 'Would you like to generate demo content? 📝',
        default: true
      });
    }

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    if (this.options.appName) {
      this.props.appName = this.options.appName;
    }

    // Copy default content
    // Root folder content
    this.fs.copy(this.templatePath('root/'), this.destinationPath(this.props.appName + '/'));
    this.fs.copy(this.templatePath('_nycrc'), this.destinationPath(this.props.appName + '/.nycrc'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath(this.props.appName + '/.gitignore'));
    this.fs.copy(this.templatePath('scripts/'), this.destinationPath(this.props.appName + '/scripts'));
    this.fs.copy(this.templatePath('spec/'), this.destinationPath(this.props.appName + '/spec'));

    // Src root content
    this.fs.copy(this.templatePath('src/index.ts'), this.destinationPath(this.props.appName + '/src/index.ts'));
    this.fs.copy(this.templatePath('src/server.ts'), this.destinationPath(this.props.appName + '/src/server.ts'));
    this.fs.copy(this.templatePath('src/config'), this.destinationPath(this.props.appName + '/src/config'));

    // Controllers
    this.fs.copy(
      this.templatePath('src/controllers/rest.controller.ts'),
      this.destinationPath(this.props.appName + '/src/controllers/rest.controller.ts')
    );

    // Services
    this.fs.copy(this.templatePath('src/services/_gitkeep'), this.destinationPath(this.props.appName + '/src/services/.gitkeep'));

    // Integration Test folder
    this.fs.copy(this.templatePath('test/mocha.opts'), this.destinationPath(this.props.appName + '/test/mocha.opts'));
    this.fs.copy(
      this.templatePath('src/services/_gitkeep'),
      this.destinationPath(this.props.appName + '/test/integration/controllers/.gitkeep')
    );

    // Copy demo content if desired
    if (this.options.demo) {
      this.fs.copy(this.templatePath('src/controllers/hello'), this.destinationPath(this.props.appName + '/src/controllers/hello'));
      this.fs.copy(this.templatePath('src/services/hello'), this.destinationPath(this.props.appName + '/src/services/hello'));
      this.fs.copy(
        this.templatePath('test/integration/controllers/hello.spec.ts'),
        this.destinationPath(this.props.appName + '/test/integration/controllers/hello.spec.ts')
      );
      this.fs.delete(this.destinationPath(this.props.appName + '/src/services/.gitkeep'));
    }
  }

  install() {
    this.spawnCommand('npm', ['install', '--prefix', this.destinationPath(this.props.appName)]);
  }
};
