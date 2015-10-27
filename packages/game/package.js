Package.describe({
  name: 'app:game',
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
    'reactive-var',
    'astrocoders:publish',
    'app:stream-words',
    'app:shots',
    'app:counter'
  ]);

  api.addFiles([
    'lib/games_collection.js',
    'lib/game.js',
  ]);

  api.addFiles([
    'server/security.js',
    'server/publications/game_publication.js',
    'server/publications/last_game_publication.js'
  ], 'server');

  api.addFiles([
    'client/templates/game/game.html',
    'client/templates/game/game.js',
    'client/templates/game/game.styl'
  ], 'client');


  api.addFiles([
    'client/templates/game_loser/game_loser.html',
    'client/templates/game_loser/game_loser.js',
    'client/templates/game_loser/game_loser.styl'
  ], 'client');

  api.addFiles([
    'client/templates/game_winner/game_winner.html',
    'client/templates/game_winner/game_winner.js',
    'client/templates/game_winner/game_winner.styl'
  ], 'client');

  api.export([
    'Games',
    'Game'
  ]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:game');

  api.addFiles([
    'tests/mocks.js',
    'tests/events.js',
    'tests/game.js'
  ], 'client');
});
