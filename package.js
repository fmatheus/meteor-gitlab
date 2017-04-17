Package.describe({
  name: 'tomsen-san:oauth2-gitlab',
  version: '0.0.1',
  summary: 'OAuth2 handler for Gitlab',
  git: 'https://github.com/tomsen-san/meteor-gitlab',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-ui', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Gitlab');

  api.addFiles(
    ['gitlab_configure.html', 'gitlab_configure.js'],
    'client');

  api.addFiles('gitlab_server.js', 'server');
  api.addFiles('gitlab_client.js', 'client');
});
