App.accessRule('*');

// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.astrocoders.typezy',
  name: 'Typezy',
  description: 'Type to survive the shot',
  author: 'Astrocoders',
  email: 'contact@astrocoders.com',
  website: 'http://typezy.com',
  version: "1.0.0"
});

// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('hideKeyboardAccessoryBar', true);
App.setPreference('ShowSplashScreenSpinner', false);
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#535453');
App.setPreference('android-targetSdkVersion', '22');
App.setPreference('android-minSdkVersion', '19');
App.setPreference('keyboardDisplayRequiresUserAction', false);

// // // Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('phonegap-facebook-plugin', {
//   APP_NAME: 'Typezy',
//   APP_ID: '1674830279397877',
//   API_KEY: '1c3116b03dffac23d5f1bfd065f570df'
// });

