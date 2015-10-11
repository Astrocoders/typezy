let isGeolocLoading = new ReactiveVar(true);
/*****************************************************************************/
/* FriendsList: Event Handlers */
/*****************************************************************************/

Template.FriendsList.events({
  'click .start-game': function() {
    let opponent = this;
    let me = Meteor.user();
    console.log(opponent, me);
    Games.insert({
      createdAt: new Date(),
      rounds: 0,
      players: [
        {
          _id: opponent._id,
          points: 0
        },
        {
          _id: me._id,
          points: 0
        }
      ],
      started: false
    });
  }
});

/*****************************************************************************/
/* FriendsList: Helpers */
/*****************************************************************************/

Template.FriendsList.helpers({
  isGeolocLoading: function() {
    console.log(isGeolocLoading.get());
    return isGeolocLoading.get();
  },
  nearbyUsers: function(){
    var userId = Meteor.userId();

    return Meteor.users.find({
      _id: {
        $ne: userId
      }
    });
  }
});

/*****************************************************************************/
/* FriendsList: Lifecycle Hooks */
/*****************************************************************************/

Template.FriendsList.onCreated(function(){
  App.updateUserLocation();
  this.autorun((c) => {
    var coords = Geolocation.latLng({
      enableHighAccuracy: false
    });

    if(coords){
      console.log(coords);
      this.subscribe('nearbyUsers', coords, () => {
        isGeolocLoading.set(false);
      });
    }
  });
  this.subscribe('lastGame', () => {
    this.autorun(() => {
      var game = Games.findOne();
      console.log(game);
      if (game && !game.started) {
        FlowRouter.go('game', {_id: game._id});
      }
    });
  });
});