AstroPublish.defineMethod({
  type: 'query',
  name: 'getNearbyUsers',
  fn: function(params, userId){
    let {coords} = params;

    if(_.isEmpty(_.compact(coords))){
      return;
    }

    return {
      _id: {
        $ne: userId
      },

      'profile.location': {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [ coords.lng, coords.lat ]
          },

          $maxDistance: 1000000000000000000000000000000000000000
        }
      }
    };
  }
});

Meteor.users.publish('nearbyUsers')
  .getNearbyUsers()
  .fields('profile')
  .mongoRule((params) => {
    return {
      limit: params.limit
    };
  })
  .apply();
