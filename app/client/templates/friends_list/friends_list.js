/*****************************************************************************/
/* FriendsList: Event Handlers */
/*****************************************************************************/

Template.FriendsList.events({
  'click .item': function(){
    FlowRouter.go('game', {_id: this._id});
  }
});

/*****************************************************************************/
/* FriendsList: Helpers */
/*****************************************************************************/

Template.FriendsList.helpers({
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
      this.subscribe('nearbyUsers', coords);
    }
  });
});