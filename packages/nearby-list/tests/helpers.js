// If this not getting right, put 10 (10s is the maximum timeout).
let geoLocSecsToWait = 5;

Tinytest.addAsync(`FriendsList Helpers - isGeolocLoading - It should
  return false in at least ${geoLocSecsToWait}s`, function(test, next){
  let onCreated = Template.FriendsList._callbacks.created[0];
  let templateContext = {
    autorun: Meteor.autorun,
    subscribe: function(){}
  };

  onCreated.call(templateContext);

  Meteor.setTimeout(() => {
    test.isFalse(templateContext.isGeolocLoading.get());
    next();
  }, geoLocSecsToWait * 1000);
});
