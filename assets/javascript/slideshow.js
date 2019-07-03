//slides array
var slides = []; //the slides will be generated and stored here
//the logic
function loadSlides() {
  //this is a test function that will auto-generate slides. When content is developed, this function should be modified
  for (var i = 0; i < 5; i++) {
    var z = 5 - i;
    var slide = $("<img>")
      .attr("src", "assets/images/nature_" + i + ".jpg")
      .attr("alt", "nature image")
      .addClass("slide")
      .css("z-index", z.toString());
    slides.push(slide);
    slide.appendTo($("#image-pane")); //i have no way of testing the order yet. This is all driven on faith.
  }
  slides[0].toggleClass("top");
}

$(document).on("fade:", ".slide", function() {
  $(this).toggleClass("top");
  $(this).animate({ opacity: "0" }, 500, function() {
    //reorder the slides by adjusting the z-index
    slides.push(slides.shift());
    for (var i = 0; i < slides.length; i++) {
      var z = slides.length - i;
      slides[i].css("z-index", z.toString());
      slides[i].css("opacity", "1");
    }
    slides[0].toggleClass("top");
  });
});

function playSlides() {
  setInterval(function() {
    $(".top").trigger("fade:");
  }, 5500);
}
