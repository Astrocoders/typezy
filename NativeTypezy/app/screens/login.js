let {server} = require('../config.js');
let Button = require('../../components/button.web.js');

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Image,
  View,
} = React;

let styles = StyleSheet.create({
  fullbackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  signIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

let SignInScreen = React.createClass({
  loginBtnPress(){
    Alert.alert('Stop!', 'This is really cool, do you wanna continue?');
  },

  render(){
    return (
      <View style={styles.signIn}>
      <Image
        source={{uri: `http://${server}/images/sign_in_bg.jpg`}}
        style={styles.fullbackground} />

        <Button onPress={this.loginBtnPress} style={{backgroundColor: '#4bf'}}>
          Sign in with Facebook
        </Button>
      </View>
    );
  }
});

module.exports = SignInScreen;
