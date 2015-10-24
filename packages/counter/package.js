Package.describe({
  name: 'app:counter',
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

  api.addFiles('client/lib/counter.js', 'client');

  api.addFiles([
    'client/templates/counter/counter.html',
    'client/templates/counter/counter.js',
    'client/templates/counter/counter.styl',
  ], 'client');

  api.export('Countdown', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:counter');
  api.addFiles('counter-tests.js');
});
