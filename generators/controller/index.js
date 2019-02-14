'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const stringUtils = require('mout/string');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appName` a possible command line argument.
    this.argument('controllerName', { type: String, required: false });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Let's generate a new ${chalk.blue('controller')}!`));

    const prompts = [];
    if (!this.options.controllerName) {
      prompts.push({
        name: 'controllerName',
        message: 'What should be the name of the new controller? (without the word controller) 🕹'
      });
    }

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      // Set the name given by the name argument
      if (this.options.controllerName) {
        this.props.controllerName = this.options.controllerName;
      }

      this.props.controllerName = this.props.controllerName.toLowerCase();
      this.props.controllerNamePascal = stringUtils.pascalCase(this.props.controllerName);
      this.props.controllerNameCamel = stringUtils.camelCase(this.props.controllerName);
    });
  }

  writing() {
    // Copy controller file
    this.fs.copyTpl(
      this.templatePath('template.controller.ts'),
      this.destinationPath(`./src/controllers/${this.props.controllerName}/${this.props.controllerName}.controller.ts`),
      {
        controllerName: this.props.controllerName,
        controllerNamePascal: this.props.controllerNamePascal,
        controllerNameCamel: this.props.controllerNameCamel
      }
    );

    // Copy test file
    this.fs.copyTpl(
      this.templatePath('template.controller.spec.ts'),
      this.destinationPath(`./src/controllers/${this.props.controllerName}/${this.props.controllerName}.controller.spec.ts`),
      {
        controllerName: this.props.controllerName,
        controllerNamePascal: this.props.controllerNamePascal,
        controllerNameCamel: this.props.controllerNameCamel
      }
    );
  }
};
