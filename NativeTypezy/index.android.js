'use strict';

let React = require('react-native');
let {
  AppRegistry,
  View,
  Navigator,
} = React;

let SignInScreen = require('./app/screens/login.js');
let NearbyUsersScreen = require('./app/screens/nearby_users.js');

let NativeTypezy = React.createClass({
  renderScene(route, nav){
    switch(route.id){
      case 'login':
        return <SignInScreen navigator={nav}/>;
      case 'nearbyUsers':
        return <NearbyUsersScreen navigator={nav}/>;
    }
  },

  render(){
    return (
      <Navigator
        initialRoute={{id: 'login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
});

AppRegistry.registerComponent('NativeTypezy', () => NativeTypezy);
