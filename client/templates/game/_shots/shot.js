Template.ShotSvg.helpers({
  percentage(){
    let points = Template.instance().data.points;

    if(!points){
      return 100;
    } else {
      return points;
    }
  },

  strokeColor(){
    let percentage = Template.instance().data.points;

    if(percentage <= 20){
      return '#A79A7C';
    } else {
      return '#FFFFFF';
    }
  }
});