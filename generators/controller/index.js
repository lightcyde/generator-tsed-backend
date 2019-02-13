'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const stringUtils = require('mout/string');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the awe-inspiring ${chalk.red('generator-tsed-backend')} generator!\n
      This will generate a new controller for your backend! 🕹`)
    );

    const prompts = [
      {
        name: 'controllerName',
        message: 'What should be the name of the new controller? (without the word controller)'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.controllerName = props.controllerName.toLowerCase();
      this.props.controllerNamePascal = stringUtils.pascalCase(props.controllerName);
    });
  }

  writing() {
    // Copy controller file
    this.fs.copyTpl(
      this.templatePath('template.controller.ts'),
      this.destinationPath(`./src/controllers/${this.props.controllerName}/${this.props.controllerName}.controller.ts`),
      {
        controllerName: this.props.controllerName,
        controllerNamePascal: this.props.controllerNamePascal
      }
    );

    // Copy test file
    this.fs.copyTpl(
      this.templatePath('template.controller.spec.ts'),
      this.destinationPath(`./src/controllers/${this.props.controllerName}/${this.props.controllerName}.controller.spec.ts`),
      {
        controllerName: this.props.controllerName,
        controllerNamePascal: this.props.controllerNamePascal
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
