let Counter = new ReactiveVar(3);
/*****************************************************************************/
/* Counter: Event Handlers */
/*****************************************************************************/

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
});

Template.Counter.onRendered(function(){
  Counter.set(3);
  countingToStart();
});

Template.Counter.onDestroyed(function(){
});


let countingToStart = function() {
  Meteor.setTimeout(function() {
    let counter = Counter.get();
    if (counter > 0) {
      Counter.set(counter - 1);
      countingToStart();
    } else {
      Session.set('counting', false);
    }
  }, 1000);

}