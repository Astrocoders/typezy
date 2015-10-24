/*****************************************************************************/
/* StreamWords: Event Handlers */
/*****************************************************************************/

Template.StreamWords.events({
  'keydown #typebox'(event) {
    StreamWords.onType(event);
  },

  'focusout #typebox'(event, tmpl){
    tmpl.find('#typebox').focus();
  }
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
  StreamWords.addWords();
  $('#typebox').focus();
  App.Keyboard.show();
});

Template.StreamWords.onDestroyed(function(){
});
