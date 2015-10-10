/**
 * Routes
 */

FlowRouter.route('/', {
  name: 'sign',
  action: function() {
    BlazeLayout.render('Sign');
  }
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

