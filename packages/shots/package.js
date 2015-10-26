Package.describe({
  name: 'app:shots',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'stylus',
    'meteor-platform',
    'ui',
    'templating',
    'blaze',
    'reactive-var'
  ]);

  api.addFiles([
    'client/templates/shots/shots.html',
    'client/templates/shots/shots.js',
    'client/templates/shots/shots.styl',
    'client/templates/shots/shot.html',
    'client/templates/shots/shot.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:shots');
  api.use([
    'app:shots',
    'meteor-platform',
    'templating',
    'blaze',
    'ui'
  ]);

  api.addFiles([
    'tests/mocks.js',
    'tests/tests.js'
  ], 'client');
});
