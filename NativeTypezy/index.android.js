/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
let React = require('react-native');
let {
  AppRegistry,
  View,
  Navigator,
} = React;

let SignInScreen = require('./app/screens/login.js');


let NativeTypezy = React.createClass({
  renderScene(route, nav){
    switch(route.id){
      case 'login':
        return <SignInScreen navigator={nav}/>;
    }
  },

  render(){
    return (
      <Navigator
        initialRoute={{id: 'login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
});

AppRegistry.registerComponent('NativeTypezy', () => NativeTypezy);
