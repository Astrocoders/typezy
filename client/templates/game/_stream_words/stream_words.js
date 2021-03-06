/*****************************************************************************/
/* StreamWords: Event Handlers */
/*****************************************************************************/

Template.StreamWords.events({
  'keydown #typebox': function(event) {
    typingTest(event);
  },
  'focusout #typebox': function() {
    $('#typebox').focus();
  }
});

/*****************************************************************************/
/* StreamWords: Helpers */
/*****************************************************************************/

Template.StreamWords.helpers({
});

/*****************************************************************************/
/* StreamWords: Lifecycle Hooks */
/*****************************************************************************/

Template.StreamWords.onCreated(function(){
});

Template.StreamWords.onRendered(function(){
  addWords();
  $('#typebox').focus();
  App.Keyboard.show();
  typingTest();
});

Template.StreamWords.onDestroyed(function(){
});

// Sorted list of the 500 most common English words.
let wordList = [
    "the", "name", "of", "very", "to", "through", "and", "just", "a",
    "form", "in", "much", "is", "great", "it", "think", "you", "say",
    "that", "help", "he", "low", "was", "line", "for", "before", "on",
    "turn", "are", "cause", "with", "same", "as", "mean", "I", "differ",
    "his", "move", "they", "right", "be", "boy", "at", "old", "one",
    "too", "have", "does", "this", "tell", "from", "sentence", "or",
    "set", "had", "three", "by", "want", "hot", "air", "but", "well",
    "some", "also", "what", "play", "there", "small", "we", "end", "can",
    "put", "out", "home", "other", "read", "were", "hand", "all", "port",
    "your", "large", "when", "spell", "up", "add", "use", "even", "word",
    "land", "how", "here", "said", "must", "an", "big", "each", "high",
    "she", "such", "which", "follow", "do", "act", "their", "why", "time",
    "ask", "if", "men", "will", "change", "way", "went", "about", "light",
    "many", "kind", "then", "off", "them", "need", "would", "house",
    "write", "picture", "like", "try", "so", "us", "these", "again",
    "her", "animal", "long", "point", "make", "mother", "thing", "world",
    "see", "near", "him", "build", "two", "self", "has", "earth", "look",
    "father", "more", "head", "day", "stand", "could", "own", "go",
    "page", "come", "should", "did", "country", "my", "found", "sound",
    "answer", "no", "school", "most", "grow", "number", "study", "who",
    "still", "over", "learn", "know", "plant", "water", "cover", "than",
    "food", "call", "sun", "first", "four", "people", "thought", "may",
    "let", "down", "keep", "side", "eye", "been", "never", "now", "last",
    "find", "door", "any", "between", "new", "city", "work", "tree",
    "part", "cross", "take", "since", "get", "hard", "place", "start",
    "made", "might", "live", "story", "where", "saw", "after", "far",
    "back", "sea", "little", "draw", "only", "left", "round", "late",
    "man", "run", "year", "don't", "came", "while", "show", "press",
    "every", "close", "good", "night", "me", "real", "give", "life",
    "our", "few", "under", "stop", "open", "ten", "seem", "simple",
    "together", "several", "next", "vowel", "white", "toward", "children",
    "war", "begin", "lay", "got", "against", "walk", "pattern", "example",
    "slow", "ease", "center", "paper", "love", "often", "person",
    "always", "money", "music", "serve", "those", "appear", "both",
    "road", "mark", "map", "book", "science", "letter", "rule", "until",
    "govern", "mile", "pull", "river", "cold", "car", "notice", "feet",
    "voice", "care", "fall", "second", "power", "group", "town", "carry",
    "fine", "took", "certain", "rain", "fly", "eat", "unit", "room",
    "lead", "friend", "cry", "began", "dark", "idea", "machine", "fish",
    "note", "mountain", "wait", "north", "plan", "once", "figure", "base",
    "star", "hear", "box", "horse", "noun", "cut", "field", "sure",
    "rest", "watch", "correct", "color", "able", "face", "pound", "wood",
    "done", "main", "beauty", "enough", "drive", "plain", "stood", "girl",
    "contain", "usual", "front", "young", "teach", "ready", "week",
    "above", "final", "ever", "gave", "red", "green", "list", "oh",
    "though", "quick", "feel", "develop", "talk", "sleep", "bird", "warm",
    "soon", "free", "body", "minute", "dog", "strong", "family",
    "special", "direct", "mind", "pose", "behind", "leave", "clear",
    "song", "tail", "measure", "produce", "state", "fact", "product",
    "street", "black", "inch", "short", "lot", "numeral", "nothing",
    "class", "course", "wind", "stay", "question", "wheel", "happen",
    "full", "complete", "force", "ship", "blue", "area", "object", "half",
    "decide", "rock", "surface", "order", "deep", "fire", "moon", "south",
    "island", "problem", "foot", "piece", "yet", "told", "busy", "knew",
    "test", "pass", "record", "farm", "boat", "top", "common", "whole",
    "gold", "king", "possible", "size", "plane", "heard", "age", "best",
    "dry", "hour", "wonder", "better", "laugh", "true", "thousand",
    "during", "ago", "hundred", "ran", "am", "check", "remember", "game",
    "step", "shape", "early", "yes", "hold", "hot", "west", "miss",
    "ground", "brought", "interest", "heat", "reach", "snow", "fast",
    "bed", "five", "bring", "sing", "sit", "listen", "perhaps", "six",
    "fill", "table", "east", "travel", "weight", "less", "language",
    "morning", "among"];

//////////////////////////////////////////

// Knuth-Fisher-Yates Shuffle
// http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// Add words to word-section

function addWords() {
    let hasCurrent = $(".current-word")[0];
    if (hasCurrent) {return false;}

    // clear existing word-section
    let wordSection = $("#word-section")[0];
    wordSection.innerHTML = "";

    for (let i = 3; i > 0; i--) {
        let words = shuffle(wordList);
        let wordSpan = `<span>${words[i]}</span>`;
        wordSection.innerHTML += wordSpan;
    }
    // mark first word as current-word
    wordSection.firstChild.classList.add("current-word");

    // mark last word with magic-box
    // let magicBox = document.createElement("DIV");
    // magicBox.classList.add("magic-box");
    // wordSection.appendChild(magicBox);
}

//////////////////////////////////////////

// Word Colors
let colorCurrentWord =" #dddddd";
let colorCorrectWord = "#93C572";
let colorIncorrectWord = "#e50000";

// Word Count and other data.
let wordData = {
    seconds: 60,
    correct: 0,
    incorrect: 0,
    total: 0,
    typed: 0
};

//////////////////////////////////////////
// Initial implementation notes:
// next word on <space>, if empty, then set value=""
// after <space> if value == current-word, mark as correct-word
// else, mark as incorrect-word
// if value.length != current-word[:value.length], mark as incorrect-word
// else, mark as current-word
//////////////////////////////////////////

function checkWord(word) {
    let wlen = word.value.length;
    let current = $(".current-word")[0];
    let currentSubstring = current.innerHTML.substring(0, wlen);
    if (word.value.trim().toLowerCase() != currentSubstring.toLowerCase()) {
        current.classList.add("incorrect-word-bg");
        return false;
    } else {
        current.classList.remove("incorrect-word-bg");
        return true;
    }
}

function submitWord(word) {
    let current = $(".current-word")[0];
    if (checkWord(word)) {
        current.classList.remove("current-word");
        current.classList.add("correct-word-c");
        wordData.correct += 1;
        changeScore(1);
    } else {
        current.classList.remove("current-word", "incorrect-word-bg");
        current.classList.add("incorrect-word-c");
    }
    wordData.total = wordData.correct;
    current.nextSibling && current.nextSibling.classList.add("current-word");
}

function clearLine() {
    let wordSection = $("#word-section")[0];
    let hasCurrent = $(".current-word")[0];
    if (!hasCurrent) {
      wordSection.removeChild(wordSection.firstChild);
    }
}

/**
 * [goToResult get result of game and redirect to right path]
 */
function goToResult() {
    let gameId = FlowRouter.getParam('_id');
    let game = Games.findOne({});
    let players = game.players;
    let winner = _.sortBy(players, 'points').reverse()[0];

    if (winner._id === Meteor.userId()) {
        FlowRouter.go('winner', {gameId: gameId})
    } else {
        FlowRouter.go('loser', {gameId: gameId})
    }
}

function typingTest(e) {
    // Char:        Key Code:
    // <space>      32
    // <backspace>  8
    // <shift>      16
    // [A-Z]        65-90
    // [' "]        222

    e = e || window.event;
    let kcode = e.keyCode;
    let word = $("#typebox")[0];

    if (word.value.match(/^\s/g)) {
        word.value = "";
    } else {
        if (!playerHasCeilPoints()) {
            checkWord(word);    // checks for typing errors while you type
            if (kcode == 32) {
                submitWord(word);  // keep track of correct / incorrect words
                addWords(); //add words if not current available
                $("#typebox")[0].value = ""; // clear typebox after each word
            }
            wordData.typed += 1; // count each valid character typed
        } else {
          goToResult();
        }
    }
}

function changeScore(inc){
  let game = Games.findOne();
    if(game){
        let index;
        let $mod = {};

        game.players.forEach(function(player, i){
          if(player._id === Meteor.userId()) index = i;
        });

        $mod[`players.${index}.points`] = inc;

        Games.update(game._id, {
            $inc: $mod
        });
    }
}

/**
 * Check if some player has reached 100 points
 * @return {Boolean}
 */
function playerHasCeilPoints(){
  if(Games.find().count()){
    return !!Games.findOne({
      'players.points': {
        $gte: Math.floor(100/MULTIPLIER)
      }
    });
  } else {
    return false;
  }
}
