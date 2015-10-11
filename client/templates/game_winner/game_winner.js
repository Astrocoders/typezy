/*****************************************************************************/
/* GameWinner: Event Handlers */
/*****************************************************************************/

Template.GameWinner.events({
  'click .back-friends-list': function() {
    FlowRouter.go('friendsList');
  }
});

/*****************************************************************************/
/* GameWinner: Lifecycle Hooks */
/*****************************************************************************/

Template.GameWinner.onCreated(function(){
  var gameId = FlowRouter.getParam('gameId');
  Games.update({_id: gameId},{$set: {
      alreadyStarted: true
    }
  });
});
