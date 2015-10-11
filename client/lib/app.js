App = {};
App.updateUserLocation = function(){
  if(Meteor.user()){
    Tracker.autorun((c) => {
      let coords = Geolocation.latLng({
        enableHighAccuracy: false
      });
      
      if(coords){
        Meteor.users.update(Meteor.userId(), {$set: {
          location: {
            type: 'Point',
            coordinates: [ coords.lng, coords.lat ]
          }
        }});
      }

      if(coords || !_.isEmpty(Geolocation.error())) c.stop();
    });
  }  
}

App.Keyboard = {};

App.Keyboard.show = function(){
  if(Meteor.isCordova){
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.show();    
  }
}