/*****************************************************************************/
/* StreamWords: Event Handlers */
/*****************************************************************************/

Template.StreamWords.events({
});

/*****************************************************************************/
/* StreamWords: Helpers */
/*****************************************************************************/

Template.StreamWords.helpers({
});

/*****************************************************************************/
/* StreamWords: Lifecycle Hooks */
/*****************************************************************************/

Template.StreamWords.onCreated(function(){
});

Template.StreamWords.onRendered(function(){
});

Template.StreamWords.onDestroyed(function(){
});


function fillPoints(round) {
  let shotToFill = $('.oponent').find('path')[round];
  $(shotToFill).css('fill', 'white');
}