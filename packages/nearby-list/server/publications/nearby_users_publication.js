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

AstroPublish.defineMethod({
  type: 'mongoRule',
  name: 'getProfile',
  fn: function(){
    return {
      fields: {
        profile: 1
      }
    };
  }
});

Meteor.users.publish('nearbyUsers').getNearbyUsers().getProfile().apply();
