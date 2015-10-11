Meteor.methods({
  createUsers: function() {
    Meteor.seedDatabase();
  }
});



/*****************************************************************************/
/* Faking data for user and items */
/*****************************************************************************/

Meteor.seedDatabase = function(){
  var createUsers = function(name,username, password){
    console.log(username, password);
    var userId = Accounts.createUser({
      username: username,
      profile: {
        name: name,
        avatar: faker.image.avatar(),
        location: {
          type: 'Point',
          coordinates: [ -48.7975550, -22.5897000 ]
        },
      },
      email: faker.internet.email(),
      password: password
    });
  };

  _.each(_.range(20), function() {
    var username = faker.internet.userName();
    var name = faker.name.findName();
    var password = 'password';

    createUsers(name, username, password);
  });
};
