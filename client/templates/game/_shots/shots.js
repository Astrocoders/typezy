/*****************************************************************************/
/* Shots: Event Handlers */
/*****************************************************************************/

Template.Shots.events({
  'click .cancel': function() {
    let gameId = FlowRouter.getParam('_id');
    Games.update({_id: gameId},{$set: {
        alreadyStarted: true
      }
    });
  }
});

/*****************************************************************************/
/* Shots: Helpers */
/*****************************************************************************/

Template.Shots.helpers({
});

/*****************************************************************************/
/* Shots: Lifecycle Hooks */
/*****************************************************************************/

Template.Shots.onCreated(function(){
  let gameId = FlowRouter.getParam('_id');
  this.subscribe('game', gameId, () => {
    this.autorun(()=> {
      let game = Games.findOne();
      if (game && game.alreadyStarted) {
        FlowRouter.go('friendsList');
      }
    });
  });
});

Template.Shots.onRendered(function(){
});

Template.Shots.onDestroyed(function(){
});
