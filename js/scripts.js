hue = 0;

var myFunc = function(){
  hue++;
  if(hue >= 360)
    hue = 0;
  $('.colorfilter').css("-webkit-filter", "hue-rotate("+hue+"deg)");
  setTimeout(myFunc, 10);
};

$(document).ready(function(){
  myFunc();
});
