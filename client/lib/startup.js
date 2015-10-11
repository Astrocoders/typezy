Meteor.startup(function(){
  App.updateUserLocation();
  BlazeLayout.setRoot('body');
});