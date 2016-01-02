StreamWords
===========

## API
Include `{{> StreamWords}}` somewhere, then setup a callback for each event
available:
- `StreamWordsConfig.onEvent('checkStop')`

  Called in each word submission to know when the counting must stop
- `StreamWordsConfig.onEvent('onStop')`

  Called when 'checkStop' callback returns true.
- `StreamWordsConfig.onEvent('onStop')`

  Called whenever the user submit a mistyped word.
- `StreamWordsConfig.onEvent('onCorrectType')`

  Called whenever the user submit a correctly type word.

## Tests

```
meteor test-packages ./
```
