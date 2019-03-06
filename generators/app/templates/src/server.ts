import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from '@tsed/common';
import * as Fs from 'fs';
import * as Path from 'path';
import {Config} from './config/config';
import {$log} from 'ts-log-debug';

const rootDir = __dirname;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const Compression = require('compression');
const Helmet = require('helmet');

@ServerSettings({
  rootDir: Path.resolve(rootDir),
  httpPort: Config.httpPort,
  httpsPort: Config.httpsPort,
  httpsOptions: {
    key: Config.privateKeyPath !== '' ? Fs.readFileSync(Config.privateKeyPath) : '',
    cert: Config.sslCertPath !== '' ? Fs.readFileSync(Config.sslCertPath) : '',
    passphrase: Config.passPhrase
  },
  logger: {
    debug: true,
    logRequest: true,
    requestFields: ['reqId', 'method', 'url', 'headers', 'query', 'params', 'duration']
  },
  mount: {
    '/': '${rootDir}/controllers/**/**.ts'
  },
  swagger: {
    path: '/api-docs'
  }
})
export class Server extends ServerLoader {

  $onMountingMiddlewares(): void {
    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(Compression())
      .use(Helmet());
  }

  $onReady(): void {
    console.log('Server started with PID ' + process.getgid() + ' at ' + new Date());
  }

  $onServerInitError(error: Error): void {
    console.error(error);
  }
}

$log.debug('Start server...');
new Server().start().catch((error) => {
  $log.error(error);
});
