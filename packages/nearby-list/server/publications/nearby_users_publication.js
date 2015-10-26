AstroPublish.defineMethod({
  type: 'query',
  name: 'getNearbyUsers',
  fn: function(location, userId){
    return {
      _id: {
        $ne: userId
      },

      'profile.location': {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [ location.lng, location.lat ]
          },

          $maxDistance: 1000000000000000000000000000000000000000
        }
      }
    };
  }
});

Meteor.users.publish('nearbyUsers').getNearbyUsers().fields('profile').apply();
