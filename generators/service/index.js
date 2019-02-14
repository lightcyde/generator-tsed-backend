'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const stringUtils = require('mout/string');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appName` a possible command line argument.
    this.argument('serviceName', { type: String, required: false });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Let's generate a new ${chalk.blue('service')}!`));

    const prompts = [];
    if (!this.options.serviceName) {
      prompts.push({
        name: 'serviceName',
        message: 'What should be the name of the new controller? (without the word controller) 🕹'
      });
    }

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      // Set the name given by the name argument
      if (this.options.serviceName) {
        this.props.serviceName = this.options.serviceName;
      }

      this.props.serviceName = props.serviceName.toLowerCase();
      this.props.serviceNamePascal = stringUtils.pascalCase(props.serviceName);
      this.props.serviceNameCamel = stringUtils.camelCase(this.props.serviceName);
    });
  }

  writing() {
    // Copy controller file
    this.fs.copyTpl(
      this.templatePath('template.service.ts'),
      this.destinationPath(`./src/services/${this.props.serviceName}/${this.props.serviceName}.service.ts`),
      {
        serviceName: this.props.serviceName,
        serviceNamePascal: this.props.serviceNamePascal,
        serviceNameCamel: this.props.serviceNameCamel
      }
    );

    // Copy test file
    this.fs.copyTpl(
      this.templatePath('template.service.spec.ts'),
      this.destinationPath(`./src/services/${this.props.serviceName}/${this.props.serviceName}.service.spec.ts`),
      {
        serviceName: this.props.serviceName,
        serviceNamePascal: this.props.serviceNamePascal,
        serviceNameCamel: this.props.serviceNameCamel
      }
    );
  }
};
