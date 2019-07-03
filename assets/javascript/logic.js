$(document).ready(function() {
  loadSlides();
  playSlides();
  setInterval(makeItRain, 10);
});

function makeItRain() {
  //make a burst of drops

  var drop = $("<div>").addClass("drop");
  var x_init = Math.random() * 1.25 * $(window).width();
  var x_fin = x_init - $(window).height() * 0.22;
  drop.css("left", x_init + "px");
  $(".container").append(drop);
  drop.animate({ top: "90%", left: x_fin + "px" }, 100, function() {
    $(this).remove();
  });
}
