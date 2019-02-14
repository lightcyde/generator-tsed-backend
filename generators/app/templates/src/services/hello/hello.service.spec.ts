import { InjectorService } from '@tsed/common';
import { inject } from '@tsed/testing';
import { expect } from 'chai';
import { HelloService } from './hello.service';

describe('HelloService', () => {

  describe('without IOC', () => {
    before(() => {
      this.helloService = new HelloService();
    });

    it('should do something', () => {
      expect(this.helloService).to.be.an.instanceof(HelloService);
    });
  });

  describe('with inject()', () => {
    before(inject([HelloService], (helloService: HelloService) => {
      this.helloService = helloService;
    }));

    it('should get the service from the inject method', () => {
      expect(this.helloService).to.be.an.instanceof(HelloService);
    });
  });

  describe('via InjectorService to mock other service', () => {
    before(inject([InjectorService], (injectorService: InjectorService) => {
      const locals = new Map<any, any>();

      this.helloService = injectorService.invoke<HelloService>(HelloService, locals);
    }));

    it('should get the service from InjectorService', () => {
      expect(this.helloService).to.be.an.instanceof(HelloService);
    });

  });
});
