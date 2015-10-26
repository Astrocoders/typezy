let events = ['onLoose', 'onWin'];

events.forEach((event) => {
  Tinytest.add(`Trigger - trigger(\'${event}\') should call properly`,
  function(test){
    Game.onEvent(event, function(value){
      return value;
    });

    test.isTrue(Game.trigger(event, true));
  });
});
