Template.Shots.events({
  'click .cancel': function() {
    let gameId = FlowRouter.getParam('_id');
    Game.setAsEnded(gameId);
  }
});

Template.Shots.helpers({
  oponentPoints: function(){
    return Game.getPlayerPoints('oponent');
  },

  youPoints: function(){
    return Game.getPlayerPoints('you');
  }
});

Template.Shots.onCreated(function(){
  let gameId = FlowRouter.getParam('_id');
  this.subscribe('game', gameId);
});
