NearbyList = {};

let callbacks = {
  onUserSelected: function(){}
};

/**
 * Attaches a callback to StreamWords call
 * @param  {String}   name Event name
 * @param  {Function} fn   Callback
 * @return {Boolean}  True
 */
function onEvent(name, fn){
  callbacks[name] = fn;

  return true;
}

/**
 * Triggers a previously attached callback
 * @param  {String} name [description]
 * @return {Any}      Return of callback
 */
function trigger(name, ...args){
  return callbacks[name].apply(null, args);
}

/**
 * Updates user location
 * @return {[type]} [description]
 */
function updateUserLocation(){
  if(Meteor.user()){
    Tracker.autorun((c) => {
      let coords = Geolocation.latLng({
        enableHighAccuracy: false
      });

      if(coords){
        setUserLocation(coords);
      }

      if(coords || !_.isEmpty(Geolocation.error())){
        c.stop();
      }
    });

    return true;
  } else {
    return false;
  }
}

/**
 * Sets the current user location
 * @param {Object} coords { lat, lng }
 */
function setUserLocation(coords){
  return Meteor.users.update(Meteor.userId(), {$set: {
    'profile.location': {
      type: 'Point',
      coordinates: [ coords.lng, coords.lat ]
    }
  }});
}

NearbyList.trigger            = trigger;
NearbyList.onEvent            = onEvent;
NearbyList.updateUserLocation = updateUserLocation;
