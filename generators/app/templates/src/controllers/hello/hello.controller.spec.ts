import { InjectorService } from '@tsed/common';
import { inject } from '@tsed/testing';
import { expect } from 'chai';
import { HelloController } from './hello.controller';

describe('HelloController', () => {

  describe('without IOC', () => {
    before(() => {
      this.helloController = new HelloController();
    });

    it('should exist', () => {
      expect(this.helloController).to.be.an.instanceof(HelloController);
    });
  });

  describe('via InjectorService to mock other service', () => {

    before(inject([InjectorService], (injectorService: InjectorService) => {

      const locals = new Map<any, any>();
      this.HelloController = injectorService.invoke<HelloController>(HelloController, locals);
      this.result = this.HelloController.getHello();

      return this.result;
    }));

    it('should get the service from InjectorService', () => {
      expect(this.HelloController).to.be.an.instanceof(HelloController);
    });

    it('should print "Hello World!"', () => {
      return this.result.should.eventually.equal('Hello World!');
    });
  });

});
