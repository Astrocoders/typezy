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

  listHasEnded: function(){
    return Template.instance().SubscribeWithScroll.hasEnded.get();
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
  this.isGeolocLoading = new ReactiveVar(true);
});

Template.FriendsList.onRendered(function(){
  NearbyList.updateUserLocation();

  let coords = new ReactiveVar({});

  this.SubscribeWithScroll = new SubscribeWithScroll({
    pub: 'nearbyUsers',
    limit: 5,
    increment: 5,
    template: this,
    threshold: $('#__blaze-root'),
    collection: Meteor.users
  });

  this.SubscribeWithScroll.params = function(){
    return {
      coords: coords.get() || {}
    };
  };

  this.SubscribeWithScroll.run();

  this.autorun(() => {
    coords.set(Geolocation.latLng({
      enableHighAccuracy: false
    }));

    if(!_.isEmpty(coords.get())){
      this.isGeolocLoading.set(false);
    }
  });
});
