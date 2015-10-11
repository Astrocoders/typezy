Template.Shots.events({
  'click .cancel': function() {
    let gameId = FlowRouter.getParam('_id');
    Games.update({_id: gameId},{$set: {
        started: true
      }
    });
  }
});
Template.Shots.helpers({
  oponentPoints: function(){
    return App.getPlayerPoints('oponent');
  },

  youPoints: function(){
    return App.getPlayerPoints('you');
  }
});
Template.Shots.onCreated(function(){
  let gameId = FlowRouter.getParam('_id');
  this.subscribe('game', gameId, () => {
    this.autorun(()=> {
      let game = Games.findOne();
      if (game && game.started) {
        FlowRouter.go('friendsList');
      }
    });
  });
});