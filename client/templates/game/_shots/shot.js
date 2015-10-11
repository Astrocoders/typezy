Template.ShotSvg.helpers({
  percentage: function(){
    var points = Template.instance().data.points;

    if(!points){
      return 100;
    } else {
      return points;
    }
  }
});