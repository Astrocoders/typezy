Meteor.startup(userHasUnfinishedGame);

/**
 * Reactively redirects an user if he has a unfinished game.
 * @return {[type]} [description]
 */
function userHasUnfinishedGame(){
  Meteor.subscribe('lastGame', () => {
    Deps.autorun(() => {
      let game = Games.findOne();
      let alreadyPlaying = FlowRouter.getRouteName() === 'game' ||
                           FlowRouter.getRouteName() === 'counter'; 

      if (game && !game.finished && !alreadyPlaying) {
        FlowRouter.go('counter');
      }
    });
  });
}
