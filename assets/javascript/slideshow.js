//images array
var images = ["NYT-search", "Psychic-Game", "rps-game", "tip-calculator", "TriviaGame", "unit-4-challenge", "Unit-4-Game", "word-guess"];
//description text
var descriptions = [
  {
    desc: "An in-class challenge to build a simple UI that allows users to search the NYT api for articles by keyword.",
    elems: ["ajax GET requests to the NYT api", "formatting on the fly with jQuery"]
  },
  {
    desc: "A text-based RPG intro to a simple letter guessing game.",
    elems: ["jQuery animations", "custom graphics", "key event listeners", "randomization"]
  },
  {
    desc:
      "A two-player rock-paper-scissors game housed in a simple UI and backed by a firebase real-time database. Firebase authentication used to link and store user statistics",
    elems: ["firebase athentication", "firebase real-time database", "form validation", "simple game logic"]
  },
  {
    desc:
      "an entry in a coding challenge that provides a simple responsive UI that calculates the tip on a restuarant bill. The tip split for any number of guests.",
    elems: ["form validation", "simple calculations with real-time updates to values"]
  },
  {
    desc: "a Battlestar Galactica trivia game to exemplify knowledge of javascript timing functions",
    elems: ["javascript timing events", "jQuery animations"]
  },
  {
    desc: "A card-based RPG game with a Final Fantasy VII theme to show proficiency with javascript / jQuery",
    elems: ["CSS3 3D transformations in the custom card carosel", "JSON object data structure", "additional chacters are unlocked with each success"]
  },
  {
    desc: "A MineCraft themed game to show proficiency with javascript / jQuery",
    elems: ["pseudo-random number gneration", "a simple UI with elements that can be shown/hidden with button clicks"]
  },
  {
    desc: "A Rick and Morty themed word guessing game to show proficiency with javascript / jQuery",
    elems: ["JSON object data structure", "videos play when a clue is guessed", "simple responsive UI made with CSS"]
  }
];
//slides array
var slides = []; //the slides will be generated and stored here
//the logic
function loadSlides() {
  //this is a test function that will auto-generate slides. When content is developed, this function should be modified
  for (var i = 0; i < images.length; i++) {
    var z = images.length - i;
    var slide = $("<img>")
      .attr("src", "assets/images/screenshots/" + images[i] + ".PNG")
      .attr("alt", "nature image")
      .addClass("slide")
      .css("z-index", z.toString());
    slides.push(slide);
    slide.appendTo($("#image-pane")); //i have no way of testing the order yet. This is all driven on faith.
  }
  slides[0].toggleClass("top");
  showText(0);
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
    descriptions.push(descriptions.shift());
    showText(0);
  }, 5500);
}

function showText(n) {
  var textBox = $("#text-pane").empty();
  var desc = $("<p>").text(descriptions[n].desc);
  var list = $("<ul>");
  for (var i = 0; i < descriptions[n].elems.length; i++) {
    $("<li>")
      .text(descriptions[n].elems[i])
      .appendTo(list);
  }
  textBox.append(desc, list);
}
