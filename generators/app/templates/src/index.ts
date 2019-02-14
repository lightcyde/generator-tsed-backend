import { $log } from 'ts-log-debug';
import { Server } from './server';

$log.debug('Start server...');
new Server().start().catch((error) => {
  $log.error(error);
});
