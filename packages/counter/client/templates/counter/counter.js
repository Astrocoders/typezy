
/*****************************************************************************/
/* Counter: Event Handlers */
/*****************************************************************************/
let Counter = new ReactiveVar();
Template.Counter.events({
});

/*****************************************************************************/
/* Counter: Helpers */
/*****************************************************************************/

Template.Counter.helpers({
  counter: function() {
    return Counter.get();
  }
});

/*****************************************************************************/
/* Counter: Lifecycle Hooks */
/*****************************************************************************/

Template.Counter.onCreated(function(){
  Countdown.onEvent('onLoop', (counter) => Counter.set(counter));
  Countdown.onEvent('onEnd', () => Session.set('counting', false));
});

Template.Counter.onRendered(function(){
  Session.set('counting', true);
  Countdown.start(3);
});

Template.Counter.onDestroyed(function(){
  this.destroyed = true;
});
