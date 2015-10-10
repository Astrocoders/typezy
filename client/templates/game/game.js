/*****************************************************************************/
/* Game: Event Handlers */
/*****************************************************************************/

Template.Game.events({
});

/*****************************************************************************/
/* Game: Helpers */
/*****************************************************************************/

Template.Game.helpers({
  isCounting: function() {
    return Session.get('counting');
  }
});

/*****************************************************************************/
/* Game: Lifecycle Hooks */
/*****************************************************************************/

Template.Game.onCreated(function(){
  Session.set('counting', true);
});

Template.Game.onRendered(function(){
});

Template.Game.onDestroyed(function(){
});
