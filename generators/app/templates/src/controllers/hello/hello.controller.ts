import { Controller, Get } from '@tsed/common';
import { Description, Returns, Summary } from '@tsed/swagger';

@Controller('/hello')
export class HelloController {

  constructor() {
  }

  /**
   * Hello World!
   */
  @Get('/')
  @Summary('Hello World!')
  @Description('This is used as description in swagger')
  @Returns(200, { description: 'OK' })
  public async getHello() {
    return 'Hello World!';
  }

}

