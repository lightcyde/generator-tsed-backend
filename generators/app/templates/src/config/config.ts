import {$log} from 'ts-log-debug';

const readJsonSync = require('read-json-sync');

export enum Environment {
  DEV,
  PROD
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

export let currentEnv = Environment.DEV;
if (arg2 === undefined) {
  $log.warn('env not defined - using \'dev\' as default');
} else {
  let currentEnvStr = arg2.slice(arg2.indexOf('=', 0) + 1, arg2.length);
  if (currentEnvStr !== 'dev' && currentEnvStr !== 'prod') {
    $log.warn('Invalid value for env (should be \'prod\' or \'dev\' - using \'dev\' as default');
  } else {
    switch (currentEnvStr) {
      case 'dev':
        currentEnv = Environment.DEV;
        break;
      case'prod':
        currentEnv = Environment.PROD;
        break;
    }
  }
}

if (arg1 === undefined) {
  $log.warn('No server.config.json file found - using default values.');
  $log.warn('Consider providing one as first parameter using --config=[PATH]');
} else {
  let configFilePath = arg1.slice(arg1.indexOf('=', 0) + 1, arg1.length);
  var json: any = undefined;
  try {
    json = readJsonSync(configFilePath);
    switch (currentEnv) {
      case Environment.DEV:
        json = json.dev;
        break;
      case Environment.PROD:
        json = json.prod;
        break;
    }
  } catch (error) {
    $log.warn('No server.config.json file found at: ' + configFilePath + ' - using default values.');
    $log.warn('Consider providing one as first parameter using --config=[PATH]');
  }
}

export class Config {
  public static readonly httpPort: number = json === undefined ? undefined : json.http_port || 8090;
  public static readonly httpsPort: number = json === undefined ? undefined : json.https_port || 8443;
  public static readonly privateKeyPath: string = json === undefined ? undefined : json.private_key_path;
  public static readonly sslCertPath: string = json === undefined ? undefined : json.ssl_cert_path;
  public static readonly passPhrase: string = json === undefined ? undefined : json.pass_phrase;
}
