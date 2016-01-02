Security.defineMethod('ifIsCurrentUser', {
  fetch: [],
  transform: null,
  deny: function(type, arg, userId, doc){
    return userId !== doc._id;
  }
});

Security.permit(['insert']).collections([Meteor.users]).apply();

Meteor.users.permit(['update']).ifIsCurrentUser().apply();
