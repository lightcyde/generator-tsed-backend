import { InjectorService } from '@tsed/common';
import { inject } from '@tsed/testing';
import { expect } from 'chai';
import { <%= serviceNamePascal %>Service } from './<%= serviceName %>.service';

describe('<%= serviceNamePascal %>Service', () => {

  describe('without IOC', () => {
    before(() => {
      this.<%= serviceNameCamel %>Service = new <%= serviceNamePascal %>Service();
    });

    it('should do something', () => {
      expect(this.<%= serviceNameCamel %>Service).to.be.an.instanceof(<%= serviceNamePascal %>Service);
    });
  });

  describe('with inject()', () => {
    before(inject([<%= serviceNamePascal %>Service], (<%= serviceNameCamel %>Service: <%= serviceNamePascal %>Service) => {
      this.<%= serviceNameCamel %>Service = <%= serviceNameCamel %>Service;
    }));

    it('should get the service from the inject method', () => {
      expect(this.<%= serviceNameCamel %>Service).to.be.an.instanceof(<%= serviceNamePascal %>Service);
    });
  });

  describe('via InjectorService to mock other service', () => {
    before(inject([InjectorService], (injectorService: InjectorService) => {
      const locals = new Map<any, any>();

      this.<%= serviceNameCamel %>Service = injectorService.invoke<<%= serviceNamePascal %>Service>(<%= serviceNamePascal %>Service, locals);
    }));

    it('should get the service from InjectorService', () => {
      expect(this.<%= serviceNameCamel %>Service).to.be.an.instanceof(<%= serviceNamePascal %>Service);
    });

  });
});
