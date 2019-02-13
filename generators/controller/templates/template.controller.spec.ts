import { InjectorService } from '@tsed/common';
import { inject } from '@tsed/testing';
import { expect } from 'chai';
import { <%= controllerNamePascal %>Controller } from './<%= controllerName %>.controller';

describe('<%= controllerNamePascal %>Controller', () => {

  describe('without IOC', () => {
    before(() => {
      this.<%= controllerName %>Controller = new <%= controllerNamePascal %>Controller();
    });

    it('should exist', () => {
      expect(this.<%= controllerName %>Controller).to.be.an.instanceof(<%= controllerNamePascal %>Controller);
    });
  });

  describe('via InjectorService to mock other service', () => {

    before(inject([InjectorService], (injectorService: InjectorService) => {

      const locals = new Map<any, any>();
      this.<%= controllerNamePascal %>Controller = injectorService.invoke<<%= controllerNamePascal %>Controller>(<%= controllerNamePascal %>Controller, locals);
    }));

    it('should get the service from InjectorService', () => {
      expect(this.<%= controllerNamePascal %>Controller).to.be.an.instanceof(<%= controllerNamePascal %>Controller);
    });
  });

});
