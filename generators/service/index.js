'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const stringUtils = require('mout/string');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Let's generate a new ${chalk.blue('service')}!`));

    const prompts = [
      {
        name: 'serviceName',
        message: 'What should be the name of the new service? (without the word service) ⚙️'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.serviceName = props.serviceName.toLowerCase();
      this.props.serviceNamePascal = stringUtils.pascalCase(props.serviceName);
    });
  }

  writing() {
    // Copy controller file
    this.fs.copyTpl(
      this.templatePath('template.service.ts'),
      this.destinationPath(`./src/services/${this.props.serviceName}/${this.props.serviceName}.service.ts`),
      {
        serviceName: this.props.serviceName,
        serviceNamePascal: this.props.serviceNamePascal
      }
    );

    // Copy test file
    this.fs.copyTpl(
      this.templatePath('template.service.spec.ts'),
      this.destinationPath(`./src/services/${this.props.serviceName}/${this.props.serviceName}.service.spec.ts`),
      {
        serviceName: this.props.serviceName,
        serviceNamePascal: this.props.serviceNamePascal
      }
    );
  }
};
