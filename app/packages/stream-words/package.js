Package.describe({
  name: 'app:stream-words',
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
    'client/lib/stream_words.js',
    'client/lib/stream_words_config.js',
    'client/templates/stream_words/stream_words.html',
    'client/templates/stream_words/stream_words.js',
    'client/templates/stream_words/stream_words.styl'
  ], 'client');

  api.export([
    'StreamWordsConfig'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:stream-words');

  api.addFiles([
    'tests/events.js'
  ], 'client');

});
