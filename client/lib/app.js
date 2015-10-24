MULTIPLIER = 3;

App = {};

App.Keyboard = {};

App.Keyboard.show = function(){
  if(Meteor.isCordova){
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.show();
  }
};

App.getPlayerPoints = function(cond){
  let game = Games.findOne();

  if(game){
    let points = 0;
    game.players.forEach(function(player){
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
};
