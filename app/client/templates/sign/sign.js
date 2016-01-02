/*****************************************************************************/
/* Sign: Event Handlers */
/*****************************************************************************/

Template.Sign.events({
  'click .button-facebook'(){
    Meteor.loginWithFacebook(function(error){
      if(!error){
        FlowRouter.go('friendsList');
      }
    });
  }
});

/*****************************************************************************/
/* Sign: Helpers */
/*****************************************************************************/

Template.Sign.helpers({
});

/*****************************************************************************/
/* Sign: Lifecycle Hooks */
/*****************************************************************************/

Template.Sign.onCreated(function(){
});

Template.Sign.onRendered(function(){
});

Template.Sign.onDestroyed(function(){
});
