let events = ['onUserSelected'];

events.forEach((event) => {
  Tinytest.add(`Trigger - trigger(\'${event}\') should call properly`,
  function(test){
    NearbyList.onEvent(event, function(value){
      return value;
    });

    test.isTrue(NearbyList.trigger(event, true));
  });
});
