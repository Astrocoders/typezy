Meteor.publish('game', function(gameId) {
  if (this.userId) {
    return Games.find({_id: gameId});
  } else {
    this.ready();
  }
});