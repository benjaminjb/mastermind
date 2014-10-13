
var colors = {
  orange: "#F1602F",
  eggplant: "#311446",
  salmon: "#E52B5F",
  lime: "#7FDE31",
  turquoise: "#E52B5F",
  canary: "#FFCE49"
}

$(document).on('click', '.swatch', function(ev) {
  addSpot(ev.currentTarget);
});

var addSpot = function(swatch) {
  var $slot = $('.active').children('.empty').first();
  $slot.css('background-color', $(swatch).css('background-color'));
  $slot.toggleClass('empty');
};

// turns out unnecessary
var rgb2hex = function(rgb) {
  var rgb = rgb.match(/\d+/g);
  var r   = parseInt(rgb[0], 10);
  var g   = parseInt(rgb[1], 10);
  var b   = parseInt(rgb[2], 10);
  return '#'+ r.toString(16) + g.toString(16) + b.toString(16);
}

$(document).on('guess', '.guess_button', function(ev) {
  ev.preventDefault();
  console.log(ev);
  // grab position and colors of active row
  // evaluate
  // if not finished,
  //  remove active class from previous
  //  append new guess row with active class
  //  append feedback to previous row
});

// black peg class b .attr('class')
