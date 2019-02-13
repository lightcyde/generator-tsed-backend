import { Controller, Get, RouteService } from '@tsed/common';

@Controller('/rest')
export class RestController {

  constructor(private routeService: RouteService) {

  }

  @Get('/')
  public getRoutes() {
    return this.routeService.getAll();
  }
}
