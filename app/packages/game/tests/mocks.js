/* globals Data */

Meteor.userId = function(){
  return '123';
};

Data = {};

Games.findOne = function(){
  return {
    players: [
      {
        _id: '123',
        points: Data.youPoints
      },

      {
        _id: '321',
        points: Data.opponentPoints
      }
    ]
  };
};
