module.exports = {
  apps : [{
    name: '<<name>>',
    cwd: '<<working directory>>',
    script: 'out/server.js',
    args: 'server.configuration.json',
    output: './logs/out-log.json',
    error: './logs/error-log.json',
    log_type: 'json',
    log_date_format: 'YYYY-MM-DD',
    instances: -1,
    autorestart: true,
    watch: true,
    ignore_watch: 'logs',
    max_memory_restart: '0.5G'
  }]
};
