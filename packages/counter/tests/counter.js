Tinytest.addAsync('Counter - Should trigger onEnd event after 3 secs.',
function(test, next){
  Countdown.onEvent('onEnd', function(){
    test.isTrue(true);
    next();
  });

  Countdown.start(3);
});
