let React = require('react-native');

let {
  StyleSheet,
  TouchableOpacity,
  Text,
} = React;

let styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 44,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#444',
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});

let Button = React.createClass({
  render(){
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.button, this.props.style]}
      >
        <Text
          style={[styles.text, this.props.textStyle]}
        >
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
});

module.exports = Button;
