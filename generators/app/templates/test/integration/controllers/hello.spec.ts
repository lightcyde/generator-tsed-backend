import { ExpressApplication } from '@tsed/common';
import { TestContext } from '@tsed/testing';
import { expect } from 'chai';

import * as SuperTest from 'supertest';
import { Server } from '../../../src/server';

describe('Hello', () => {

  // bootstrap your expressApplication in first
  before(TestContext.bootstrap(Server));
  before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
    this.app = expressApplication;
  }));
  after(TestContext.reset);

  // then run your test
  describe('GET /hello', () => {
    it('should speak "Hello World!"', (done) => {
      SuperTest(this.app)
          .get('/hello')
          .expect(200)
          .end((err, response: any) => {
            if ( err ) {
              throw (err);
            }

            expect(response.text).to.be.an('string');

            done();
          });
    });
  });

});
