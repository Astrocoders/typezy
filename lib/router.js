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

FlowRouter.route('/winner/:gameId', {
  name: 'winner',
  action: function() {
    BlazeLayout.render('GameWinner');
  }
});

FlowRouter.route('/loser/:gameId', {
  name: 'loser',
  action: function() {
    BlazeLayout.render('GameLoser');
  }
});
