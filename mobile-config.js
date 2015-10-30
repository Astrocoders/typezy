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

// // Set up resources such as icons and launch screens.
App.icons({
  // Android
  'android_ldpi': 'resources/icons/android/ldpi.png',
  'android_mdpi': 'resources/icons/android/mdpi.png',
  'android_hdpi': 'resources/icons/android/hdpi.png',
  'android_xhdpi': 'resources/icons/android/xhdpi.png'
});

App.launchScreens({
  // Android
  'android_ldpi_portrait': 'resources/splash/android/drawable-port-ldpi-screen.png',
  'android_ldpi_landscape': 'resources/splash/android/drawable-land-ldpi-screen.png',
  'android_mdpi_portrait': 'resources/splash/android/drawable-port-mdpi-screen.png',
  'android_mdpi_landscape': 'resources/splash/android/drawable-land-mdpi-screen.png',
  'android_hdpi_portrait': 'resources/splash/android/drawable-port-hdpi-screen.png',
  'android_hdpi_landscape': 'resources/splash/android/drawable-land-hdpi-screen.png',
  'android_xhdpi_portrait': 'resources/splash/android/drawable-port-xhdpi-screen.png',
  'android_xhdpi_landscape': 'resources/splash/android/drawable-land-xhdpi-screen.png'
});

// // // Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('phonegap-facebook-plugin', {
//   APP_NAME: 'Typezy',
//   APP_ID: '1674830279397877',
//   API_KEY: '1c3116b03dffac23d5f1bfd065f570df'
// });

