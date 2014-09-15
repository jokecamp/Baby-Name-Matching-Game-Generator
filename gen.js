function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var json = [{
    "question": 'Geri Halliwell “Ginger Spice"',
    "answer": "Bluebell"
  },
  {
    "question": "Rachel Griffiths",
    "answer": "Banjo"
  },
  {
    "question": "Beyonce and Jay-Z",
    "answer": "Blue Ivy"
  },
  {
    "question": "Gwyneth Paltrow and Chris Martin",
    "answer": "Apple"
  },
  {
    "question": "Kim Kardashian and Kanye West",
    "answer": "North"
  },
  {
    "question": "Nicole Richie and Joel Madden",
    "answer": "Sparrow"
  },
  {
    "question": "Jamie Oliver",
    "answer": "Petal Blossom Rainbow"
  },
  {
    "question": "Mariah Carey and Nick Cannon",
    "answer": "Moroccan"
  },
  {
    "question": "Bear Grylls",
    "answer": "Marmaduke"
  },
  {
    "question": "Nicole Kidman and Keith Urban",
    "answer": "Sunday"
  },
  {
    "question": "Ashlee Simpson and Pete Wentz",
    "answer": "Bronx"
  },
  {
    "question": "Busy Philips",
    "answer": "Birdie"
  },
  {
    "question": "Rob Morrow",
    "answer": "Tu"
  },
  {
    "question": "Peyton Manning",
    "answer": "Mosley"
  }];


  console.log(json);

  for(var i = 0; i < json.length; i ++) {

    $("#questions").append("<li>" + json[i].question + "</li>");
    //$("#answers").append("<li>" + json[i].answer + "</li>");
    $("#blanks").append("<li>___</li>")

  }

  _.forEach(shuffle(json), function(i) {
      $("#answers").append("<li>" + i.answer + "</li>");
  });
