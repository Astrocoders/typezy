StreamWordsConfig = {};

let callbacks = {
  checkStop: function(){},
  onStop: function(){},
  onTypo: function(){},
  onCorrectType: function(){}
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
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function trigger(name, ...args){
  return callbacks[name].apply(null, args);
}

StreamWordsConfig.trigger = trigger;
StreamWordsConfig.onEvent = onEvent;
