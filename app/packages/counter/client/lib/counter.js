Countdown = {};

let callbacks = {
  onEnd: function(){},
  onLoop: function(){}
};

let counter;

/**
 * Attaches an callback to an event
 * @param  {String}   name Event name
 * @param  {Function} fn   Callback
 * @return {Boolean}
 */
function onEvent(name, fn){
  callbacks[name] = fn;
  return true;
}

/**
 * Trigger an event callback previously attached
 * @param  {String} name Event name
 * @return {Any} Callback return
 */
function trigger(name, ...args){
  return callbacks[name].apply(null, args);
}

/**
 * Initializes counter and start the loop
 * @param  {Integer} seconds Seconds to Countdown
 * @return {Boolean}
 */
function start(seconds){
  counter = seconds - 1 || 3;
  loop();
  return true;
}

function loop(){
  Meteor.setTimeout(function() {
    if (counter >= 1) {
      trigger('onLoop', counter);
      --counter;
      loop();
    } else {
      trigger('onEnd');
    }
  }, 1000);
}

Countdown.onEvent = onEvent;
Countdown.start = start;
