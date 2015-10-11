/*****************************************************************************/
/* Shots: Event Handlers */
/*****************************************************************************/

Template.Shots.events({
  'click .cancel': function() {
    let gameId = FlowRouter.getParam('_id');
    Games.update({_id: gameId},{$set: {
        started: true
      }
    });
  }
});

/*****************************************************************************/
/* Shots: Helpers */
/*****************************************************************************/

Template.Shots.helpers({
  oponentPoints: function(){
    return getPlayerPoints('oponent');
  },

  youPoints: function(){
    return getPlayerPoints('you');
  }
});

/*****************************************************************************/
/* Shots: Lifecycle Hooks */
/*****************************************************************************/

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

Template.Shots.onRendered(function(){
});

Template.Shots.onDestroyed(function(){
});


function getPlayerPoints(cond){
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

    return 100 - points; 
  } else {
    return 100;
  }  
}