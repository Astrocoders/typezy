App = {};

App.Keyboard = {};

App.Keyboard.show = function(){
  if(Meteor.isCordova){
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.show();
  }
};
