const readJsonSync = require('read-json-sync');

if ( process.argv[2] === undefined ) {
  console.error('Please provide the path to the server.configuration.json file.');
}

let json: any = undefined;
try {
  json = readJsonSync(process.argv[2]);
} catch (error) {
  let msg = 'no server configuration file found at: ' + process.argv[2] + ', provide one as the first parameter!\n';
  msg += 'Config file should look like this:' +
      `{
            "http_port": "",
            "https_port": "",
            "private_key_path": "",
            "ssl_cert_path": "",
            "pass_phrase": "",
        }`;
  console.warn(msg);
  console.warn('USING DEFAULT VALUES BECAUSE OF MISSING SERVER CONFIG.');
}

export class Config {
  public static readonly httpPort: number = json === undefined ? 8081 : json.http_port || 8081;
  public static readonly httpsPort: number = json === undefined ? 8091 : json.https_port || 8091;
  public static readonly privateKeyPath: string = json === undefined ? '' : json.private_key_path || '';
  public static readonly sslCertPath: string = json === undefined ? '' : json.ssl_cert_path || '';
  public static readonly passPhrase: string = json === undefined ? '' : json.pass_phrase || '';
}
