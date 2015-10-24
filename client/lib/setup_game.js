/**
 * Get the result of the game and redirect to right path.
 */
function goToResult() {
    let gameId = FlowRouter.getParam('_id');
    let game = Games.findOne({});
    let players = game.players;
    let winner = _.sortBy(players, 'points').reverse()[0];

    setGameAsEnded(gameId);

    if (winner._id === Meteor.userId()) {
        FlowRouter.go(`/winner/${gameId}`);
    } else {
        FlowRouter.go(`/loser/${gameId}`);
    }
}

function setGameAsEnded(gameId){
  return Games.update({_id: gameId}, {$set: {
      finished: true
    }
  });
}


StreamWordsConfig.onEvent('checkStop', Game.playerHasCeilPoints);
StreamWordsConfig.onEvent('onStop', goToResult);
StreamWordsConfig.onEvent('onCorrectType', () => Game.changeCurPlayerScore(+1));

Game.onEvent('onLooseAction', () => FlowRouter.go('friendsList'));
Game.onEvent('onWinAction', () => FlowRouter.go('friendsList'));
Game.redirUserOnUnfinishedGame();

NearbyList.onEvent('onUserSelected', (playerTwo) =>
    Game.createNewGame(Meteor.userId(), playerTwo._id) );
