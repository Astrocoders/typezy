/*****************************************************************************/
/* FriendsList: Event Handlers */
/*****************************************************************************/

Template.FriendsList.events({
  'click .item-avatar': function() {
    let selectedUser = this;

    NearbyList.trigger('onUserSelected', selectedUser);
  }
});

/*****************************************************************************/
/* FriendsList: Helpers */
/*****************************************************************************/

Template.FriendsList.helpers({
  isGeolocLoading: function() {
    return Template.instance().isGeolocLoading.get();
  },

  nearbyUsers: function(){
    let userId = Meteor.userId();

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
  NearbyList.updateUserLocation();
  this.isGeolocLoading = new ReactiveVar(true);

  this.autorun(() => {
    let coords = Geolocation.latLng({
      enableHighAccuracy: false
    });

    if(coords){
      console.log(coords);
      this.subscribe('nearbyUsers', coords, () => {
        this.isGeolocLoading.set(false);
      });
    }
  });
});
