Games.publish('lastGame')
  .ifSignedIn()
  .query(function(userId){
    return {'players._id': userId};
  })
  .latest().one().apply();
