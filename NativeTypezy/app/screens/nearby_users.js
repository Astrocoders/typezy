/* jshint esnext: true */
let Config = require('../config.js');

let React = require('react-native');
let {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
} = React;

let DDPClient = require('ddp-client');

let styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#444',
    borderBottomColor: '#111',
    borderBottomWidth: 1,
    height: 100,
  },

  listThumb: {
    flex: 3,
    width: null,
    resizeMode: 'cover',
  },

  listName: {
    flex: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingSayings: {
    fontSize: 22,
    flex: 1,
    alignSelf: 'center',
  }
});

let NearbyUsersScreen = React.createClass({
  updateList(users){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(users),
      ready: true,
    });
  },

  renderRow(user){
    return (
      <View style={styles.listItem}>
        <Image style={styles.listThumb} source={{uri: user.profile.avatar}}/>
        <Text style={styles.listName}>{user.profile.name}</Text>
      </View>
    );
  },

  getInitialState(){
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    return {
      dataSource,
      ready: false,
    };
  },

  componentDidMount(){
    let ddpClient = new DDPClient({url: Config.ddpServer});
    ddpClient.connect(() => ddpClient.subscribe('reactUsers'));

    let observer = ddpClient.observe('users');
    ['added', 'changed', 'removed'].forEach((msg) => {
      observer[msg] = (() => this.updateList(ddpClient.collections.users));
    });
  },

  renderLoading(){
    return (
      <View style={styles.loadingView}>
        <Text style={styles.loadingSayings}>Loading</Text>
      </View>
    );
  },

  render(){
    if(!this.state.ready) return this.renderLoading();

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    );
  },
});

module.exports = NearbyUsersScreen;
