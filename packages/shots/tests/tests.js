/* globals Data */

Tinytest.add(`ShotSvg Helpers - percentage - When there\'s no points should
return 100`,
function(test){
  Data.points = null;
  let percentageHelper = Template.ShotSvg.__helpers.get('percentage');

  test.equal(percentageHelper(), 100);
});


Tinytest.add(`ShotSvg Helpers - strokeColor - When points is lower or equal than
 20, it should '#A79A7C'`,
function(test){
  Data.points = 19;
  let strokeColorHelper = Template.ShotSvg.__helpers.get('strokeColor');

  test.equal(strokeColorHelper(), '#A79A7C');
});

Tinytest.add(`ShotSvg Helpers - strokeColor - When points is greater than
 20, it should '#FFFFFF'`,
function(test){
  Data.points = 30;
  let strokeColorHelper = Template.ShotSvg.__helpers.get('strokeColor');

  test.equal(strokeColorHelper(), '#FFFFFF');
});
