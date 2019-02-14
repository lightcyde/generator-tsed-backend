import { Service } from '@tsed/common';
import { $log } from 'ts-log-debug';

@Service()
export class HelloService {

  constructor() {
  }

  $onInit() {
    $log.info('HelloService::$onInit');
  }

}
