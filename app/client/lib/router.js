/**
 * Routes
 */

FlowRouter.route('/', {
  name: 'sign',
  action: function() {
    BlazeLayout.render('Sign');
  },
  triggersEnter: [
    function redirSignedIn(ctx, redirect){
      if(Meteor.user()){
        redirect('/friends_list');
      }
    }
  ]
});

FlowRouter.route('/friends_list', {
  name: 'friendsList',
  action: function() {
    BlazeLayout.render('FriendsList');
  }
});

FlowRouter.route('/game/:_id', {
  name: 'game',
  action: function() {
    BlazeLayout.render('Game');
  }
});

BlazeLayout.setRoot('body');