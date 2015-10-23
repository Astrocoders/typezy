MULTIPLIER = 3;

App = {};
App.updateUserLocation = function(){
  if(Meteor.user()){
    Tracker.autorun((c) => {
      let coords = Geolocation.latLng({
        enableHighAccuracy: false
      });

      if(coords){
        Meteor.users.update(Meteor.userId(), {$set: {
          'profile.location': {
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

App.getPlayerPoints = function(cond){
  let game = Games.findOne();

  if(game){
    let points = 0;
    game.players.forEach(function(player, i){
      let statement = cond === 'you' ? player._id === Meteor.userId() :
                      player._id !== Meteor.userId();
      if(statement){
        points = player.points;
      }
    });

    return 100 - points * MULTIPLIER;
  } else {
    return 100;
  }
}
