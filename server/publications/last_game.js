Meteor.publish('lastGame', function() {
  if (this.userId) {
    return Games.find({
      'players._id': this.userId
    }, {sort: {createdAt: -1}, limit: 1});
  } else {
    this.ready();
  }
});