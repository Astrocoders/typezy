/*****************************************************************************/
/* Hook to accounts facebook */
/*****************************************************************************/

Accounts.onCreateUser(function(options, user) {
  if (user.services && user.services.facebook) {
    let accessToken = user.services.facebook.accessToken;
    let result = Meteor.http.get(
      "https://graph.facebook.com/me?fields=id,name,email", {
      params: {
        access_token: accessToken
      }
    });

    // throw error if there is any
    if (result.error) {
      throw result.error;
    }

    console.log('Accounts.onCreateUser', result);
    // create user data from facebook data
    let email = {
      address: result.data.email,
      verified: true
    };
    let profile = {
      avatar: 'http://graph.facebook.com/' + result.data.id
        + '/picture/?type=large',
      name: result.data.name,
      facebookId: result.data.id,
    };

    // insert data on user
    user.emails = [email];
    user.profile = profile;

    } else {
      user.profile = options.profile ? options.profile : {};
    }
  return user;
});

