/*****************************************************************************/
/* GameLoser: Event Handlers */
/*****************************************************************************/

Template.GameLoser.events({
  'click .back-friends-list': function() {
    FlowRouter.go('friendsList');
  }
});

/*****************************************************************************/
/* GameLoser: Lifecycle Hooks */
/*****************************************************************************/

Template.GameLoser.onCreated(function(){
  App.updateGame();
});
