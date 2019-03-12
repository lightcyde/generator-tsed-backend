module.exports = {
  apps: [{
    name: '<<name>>',
    script: 'dist/server.js',
    args: '--config=server.config.json --mode=prod',
    output: './logs/out-log.json',
    error: './logs/error-log.json',
    log_type: 'json',
    log_date_format: 'YYYY-MM-DD',
    instances: -1,
    autorestart: true,
    watch: true,
    ignore_watch: 'logs',
    max_memory_restart: '512M'
  }]
};
