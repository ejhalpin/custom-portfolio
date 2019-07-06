//an object for each section
var games = [
  {
    title: "Word Guess",
    desc: "A single player hangman style guessing game with a Rick and Morty theme. Guessing the correct answer rewards the player with a clip from the show.",
    repo: "Word-Guess"
  },
  {
    title: "Rock-Paper-Scissors",
    desc:
      "A single-game platform for real time player vs. player challenges. Backed with a firebase real-time database and featuring data persistence through firebase authentication, the platform allows users to play against one another, view their win/loss record and site ranking, and persist their data across sessions with optional user accounts",
    repo: "RPS-Game"
  },
  {
    title: "Battlestar Galactica Trivia",
    desc: "A simple timed trivia game with a few animations and random question delivery.",
    repo: "TriviaGame"
  },
  {
    title: "Card-Based RPG",
    desc:
      "A Final Fantasy VII themed single player card attack came where players must pick their hero and attack their foes. The hero's attack points increase with every attack and the enemies counter with their base attack. The hero's hit points do not regenerate.",
    repo: "unit-4-challenge"
  },
  {
    title: "Psychic Game",
    desc:
      "A single player game with a simple concept: guess the letter. The game is themed in an old-school text-based RPG format with some animations to set the story.",
    repo: "Psychic-Game"
  }
];
var uis = [
  {
    title: "Giphy Search UI",
    desc:
      "A simple high-contrast UI powered by the Giphy API. Users can make custom search buttons during their session and perform searches with clicks. Giphy images can be favorited and users can view certain data returned by the API, such as the gif rating and an embed tag pre-populated with the image url",
    repo: "giphy-search"
  },
  {
    title: "Just the Tip",
    desc:
      "A simple UI form that will calculate the tip for a user-provided amount. The program displays the bill total as well as the tip amount and, if selected, the per-guest amount.",
    repo: "tip-calculator"
  },
  {
    title: "New York Times Search",
    desc:
      "A simple high-contrast UI powered by the NY Times API. Users can do key-word searches and the results are displayed in repeating rows. Each result returns the headline of a related article, the article abstract, the publication date, the by-line (if any), and a live link to the article on the NY Times site.",
    repo: "NYT-search"
  }
];
var projects = [
  {
    title: "Recipe Box",
    desc:
      "A search and save UI for recipes. Backed by the Edamam Recipe API, this site allows users to search for and save recipes to a firebase real-time database. Firebase authentication allows users to persist their data across sessions and devices.",
    repo: "Recipe-box"
  }
];

function loadContent() {
  var gameBox = $("#games");
  var main = $("<div>").addClass("main-tile");
  var left = $("<div>")
    .addClass("next, left")
    .text("<");
  var right = $("<div>")
    .addClass("next, right")
    .text(">");
  var dots = $("<div>").addClass("dots");
  for (var i = 0; i < games.length; i++) {
    var dot = $("<div>")
      .addClass("dot")
      .attr("data-index", i.toString());
    dots.append(dot);
  }
  main.append(left, dots, right);
  gameBox.append(main);
}

loadContent();
