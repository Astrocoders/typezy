Meteor.publish('nearbyUsers', function(location){
  return Meteor.users.find({
    _id: {
      $ne: this.userId
    },

    location: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [ location.lng, location.lat ]
        },

        $maxDistance: 100
      }
    }
  }, {
    fields: {
      profile: 1,
      'services.facebook.name': 1
    }
  });
});