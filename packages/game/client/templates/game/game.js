/*****************************************************************************/
/* Game: Event Handlers */
/*****************************************************************************/

Template.Game.events({
  'click .cancel': function() {
    let gameId = FlowRouter.getParam('_id');
    Game.setAsEnded(gameId);
  }
});

/*****************************************************************************/
/* Game: Helpers */
/*****************************************************************************/

Template.Game.helpers({
  isCounting: function() {
    return Session.get('counting');
  },

  oponentPoints: function(){
    return Game.getPlayerPoints('oponent');
  },

  youPoints: function(){
    return Game.getPlayerPoints('you');
  }
});

/*****************************************************************************/
/* Game: Lifecycle Hooks */
/*****************************************************************************/

Template.Game.onCreated(function(){
});

Template.Game.onRendered(function(){
});

Template.Game.onDestroyed(function(){
});
