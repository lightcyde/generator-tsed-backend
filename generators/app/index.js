'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the stylish ${chalk.red('Ts.ED backend')} generator!\n
        I will create a nice backend project for you! 🤖`)
    );

    const prompts = [
      {
        name: 'appName',
        message: 'What name should we give your backend? 🤔'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath(), this.destinationPath());
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('_nycrc'), this.destinationPath('.nycrc'));
    this.fs.copy(this.templatePath('src/services/_gitkeep'), this.destinationPath('src/services/.gitkeep'));
    this.fs.delete(this.destinationPath('_gitignore'));
    this.fs.delete(this.destinationPath('_nycrc'));
    this.fs.delete(this.destinationPath('src/services/_gitkeep'));
  }

  install() {
    this.installDependencies();
  }
};
