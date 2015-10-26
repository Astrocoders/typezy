let events = ['checkStop', 'onStop', 'onTypo', 'onCorrectType'];

events.forEach((event) => {
  Tinytest.add(`Trigger - trigger(\'${event}\') should call properly`,
  function(test){
    StreamWordsConfig.onEvent(event, function(){
      return true;
    });

    test.isTrue(StreamWordsConfig.trigger(event));
  });
});
