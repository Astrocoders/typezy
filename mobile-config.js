App.accessRule('*');

// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  // id: 'br.com.astrocoders.typesy',
  name: 'Typesy',
  description: 'Type to survive the shot',
  author: 'Astrocoders',
  email: 'contact@astrocoders.com',
  website: 'http://typesy.com',
  version: "1.0.0"
});
// Set PhoneGap/Cordova preferences
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('hideKeyboardAccessoryBar', true);
App.setPreference('ShowSplashScreenSpinner', false);
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('android-targetSdkVersion', '22');
App.setPreference('android-minSdkVersion', '19');
// // Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('phonegap-facebook-plugin', {
  APP_NAME: 'TrendyShop',
  APP_ID: '1674830279397877',
  API_KEY: '1c3116b03dffac23d5f1bfd065f570df'
});