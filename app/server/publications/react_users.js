Meteor.publish('reactUsers', function(){
  return Meteor.users.find();
});
