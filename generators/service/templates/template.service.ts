import { Service } from '@tsed/common';
import { $log } from 'ts-log-debug';

@Service()
export class <%= serviceNamePascal %>Service {

  constructor() {
  }

  $onInit() {
    $log.info('<%= serviceNamePascal %>Service::$onInit');
  }

}
