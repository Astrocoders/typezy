Package.describe({
  name: 'app:nearby-list',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'reactive-var',
    'meteor-platform',
    'blaze',
    'templating',
    'ui',
    'deps',
    'astrocoders:geolocation',
    'stylus',
    'astrocoders:accounts-fb-hook'
  ]);

  api.addFiles([
    'client/lib/nearby_list.js',
    'client/templates/nearby_list/friends_list.html',
    'client/templates/nearby_list/friends_list.js',
    'client/templates/nearby_list/friends_list.styl'
  ], 'client');

  api.addFiles([
    'server/publications/nearby_users_publication.js'
  ], 'server');

  api.export('NearbyList', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:nearby-list');
  api.addFiles('nearby-list-tests.js');
});
