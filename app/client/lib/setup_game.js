/**
 * Get the result of the game and redirect to right path.
 */
function goToResult() {
    let gameId = FlowRouter.getParam('_id');
    let game = Games.findOne({});
    let players = game.players;
    let winner = _.sortBy(players, 'points').reverse()[0];

    Game.setAsEnded(gameId);

    if (winner._id === Meteor.userId()) {
        FlowRouter.go(`/winner/${gameId}`);
    } else {
        FlowRouter.go(`/loser/${gameId}`);
    }
}

StreamWordsConfig.onEvent('checkStop', Game.playerHasCeilPoints);
StreamWordsConfig.onEvent('onStop', goToResult);
StreamWordsConfig.onEvent('onCorrectType', () => Game.changeCurPlayerScore(+1));

Game.onEvent('onLooseAction', () => FlowRouter.go('friendsList'));
Game.onEvent('onWinAction', () => FlowRouter.go('friendsList'));

NearbyList.onEvent('onUserSelected', (playerTwo) => {
  let gameId = Game.createNewGame(Meteor.userId(), playerTwo._id);

  Countdown.onEvent('onEnd', () => FlowRouter.go(`/game/${gameId}`));
});
