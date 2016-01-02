/* globals Data */

let youPoints = 20;
let MULTIPLIER = 3;

Tinytest.add(`Game - Should get your ${youPoints} points and return the value by
the formule (100-curPoints * ${MULTIPLIER})`,
function(test){
  Data.youPoints = youPoints;
  let points = Game.getPlayerPoints('you');

  test.equal(points, 100 - youPoints * MULTIPLIER);
});

Tinytest.add(`Game - Should get properly your player index in game doc`,
function(test){
  let index = Game.getCurPlayerIndex(Games.findOne());

  test.equal(index, 0);
});
