Game = {};

let callbacks = {
  onLoose: function(){},
  onWin: function(){}
};

function changeScore(inc){
  let game = Games.findOne();

  if(game){
      let playerIndex = getCurPlayerIndex(game);

      return changePlayerPoints({
        playerIndex,
        inc,
        gameId: game._id
      });
  } else {
    return false;
  }
}

/**
 * Get current player index in Game.player
 * @param  {Object} game Game doc to search
 * @return {Integer} The index of the Game.player, is 0 or 1
 */
function getCurPlayerIndex(game){
  let index;

  game.players.forEach(function(player, i){
    if(player._id === Meteor.userId()) {
      index = i;
    }
  });

  return index;
}

/**
 * Modify the score of the given player of a giving
 * game document.
 * @param  {Object} options { playerIndex, inc, gameId }
 * @return {Integer}         Collection.update return
 */
function changePlayerPoints(options){
  let $mod = {};

  $mod[`players.${options.playerIndex}.points`] = options.inc;

  return Games.update(options.gameId, {
      $inc: $mod
  });
}

/**
 * Check if some player has reached 100 points
 * @return {Boolean}
 */
function playerHasCeilPoints(){
  if(Games.find().count()){
    return !!Games.findOne({
      'players.points': {
        $gte: Math.floor(100/MULTIPLIER)
      }
    });
  } else {
    return false;
  }
}

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
function trigger(name){
  return callbacks[name]();
}

function createNewGame(playerOneId, playerTwoId){
  return Games.insert({
    createdAt: new Date(),
    rounds: 0,
    players: [
      {
        _id: playerOneId,
        points: 0
      },
      {
        _id: playerTwoId,
        points: 0
      }
    ],
    finished: false
  });
}

function userHasUnfinishedGame(){
  Meteor.subscribe('lastGame', () => {
    Deps.autorun(() => {
      let game = Games.findOne();
      let alreadyPlaying = FlowRouter.getRouteName() === 'game';

      if (game && !game.finished && !alreadyPlaying) {
        FlowRouter.go('game', {_id: game._id});
      }
    });
  });
}

Game.playerHasCeilPoints          = playerHasCeilPoints;
Game.changeCurPlayerScore         = changeScore;
Game.onEvent                      = onEvent;
Game.trigger                      = trigger;
Game.createNewGame                = createNewGame;
Game.redirUserOnUnfinishedGame    = userHasUnfinishedGame;
